#!/usr/bin/python

import sys
# Python 3.
try:
    from http.server import HTTPServer
    from http.server import SimpleHTTPRequestHandler
# Python 2.
except ImportError:
    from BaseHTTPServer import HTTPServer
    from SimpleHTTPServer import SimpleHTTPRequestHandler
import glob
import os
import base64

class HTTPRequestHandler(SimpleHTTPRequestHandler):
    # Implementation.
    def do_GET(self):
        tool.process(self)
    def do_POST(self):
        tool.process(self)

def listFiles(path):
    items = []

    fileNames = glob.glob(path + "/*")
    fileNames.sort()
    for fileName in fileNames:
        file = { }
        # Path.
        file["path"] = os.path.basename(fileName)
        # Type.
        file["type"] = None
        if (os.path.isdir(fileName)):
            file["type"] = "dir"
        elif (os.path.isfile(fileName)):
            file["type"] = "file";

        items.append(file)

    return items
def fileListToJSON(fileList):
    out = ""
    for file in fileList:
        if (len(out)):
            out += ","
        out += "{\"path\":\"%s\",\"type\":\"%s\"}" % (file["path"], file["type"])
    return "[" + out + "]"
def jsonToPathContents(json):
    # This function takes `abc` and `def` from string of the following format:
    # `{"path": "abc", "contents": "def"}`.
    parts = json.split('"')
    if (len(parts) == 9):
        return (parts[3], parts[7])
    return (None, None)

class Tool(object):
    # Configuration.
    def __init__(self, arguments):
        self.arguments = arguments
        self.PORT = 8000
        self.serverHost = ""
    # Main execution sequence.
    def run(self):
        self.validateArguments()
        self.parseArguments()
        self.printArguments()
        self.runServer()
    # Implementation.
    def validateArguments(self):
        if (len(self.arguments) < 2):
            print(
                (
                    "Usage: %s DIR [PORT]"
                    "\n\n"
                    "\tPORT defaults to 8000"
                ) % self.arguments[0]
            )
            sys.exit(1)
    
    def printArguments(self):
        print("DIR: '%s'" % self.DIR)
        print("PORT: '%s'" % self.PORT)
    def parseArguments(self):
        self.DIR = self.arguments[1]
        # Override default port if specified.
        if (len(self.arguments) >= 3):
            self.PORT = self.arguments[2]
    def runServer(self):
        addr = (self.serverHost, int(self.PORT))
        self.httpd = HTTPServer(addr, HTTPRequestHandler)
        self.httpd.serve_forever()
    def process(self, requestHandler):
        if (requestHandler.path == "/path"):
            self.processPath(requestHandler)
        if (requestHandler.path == "/list"):
            self.processFileList(requestHandler)
        if (requestHandler.path == "/read"):
            self.processReadFile(requestHandler)
        if (requestHandler.path == "/write"):
            self.processWriteFile(requestHandler)
    def processPath(self, request):
        request.send_response(200)
        request.send_header("Access-Control-Allow-Origin", "*")
        request.end_headers()
    
        data = self.DIR.encode()
        request.wfile.write(data)
    def processFileList(self, request):
        request.send_response(200)
        request.send_header("Access-Control-Allow-Origin", "*")
        request.end_headers()
    
        size = int(request.headers["Content-Length"])
        path = request.rfile.read(size)
        path = path.decode()
        absPath = "%s/%s" % (self.DIR, path)
    
        fileList = listFiles(absPath)
        fileListJSON = fileListToJSON(fileList)
        data = fileListJSON.encode()
        request.wfile.write(data)
    def processReadFile(self, request):
        request.send_response(200)
        request.send_header("Access-Control-Allow-Origin", "*")
        request.end_headers()
    
        size = int(request.headers["Content-Length"])
        path = request.rfile.read(size)
        path = path.decode()
        absPath = "%s/%s" % (self.DIR, path)
        print("Reading '%s'" % absPath)
    
        f = open(absPath, "r")
        contents = f.read()
        f.close()
    
        # Perform Python3 compatible encoding.
        # If this crashes for Python2 (when there are non-ASCII symbols),
        # it's probably fine for `contents` to stay intact.
        try:
            contents = contents.encode()
        except:
            pass
        
        request.wfile.write(contents)
    def processWriteFile(self, request):
        request.send_response(200)
        request.send_header("Access-Control-Allow-Origin", "*")
        request.end_headers()
    
        size = int(request.headers["Content-Length"])
        data = request.rfile.read(size)
    
        # Extract path and contents.
        (path, contents) = jsonToPathContents(data)
        if ((path is None) or (contents is None)):
            print("ERROR Writing failed due to corrupt incoming data")
    
        # Try to convert using pre-Python2.4 API.
        try:
            contents = base64.decodestring(contents)
        # Resort to Python2.4+ API.
        except:
            contents = base64.b64decode(contents)
    
        # Perform Python3 compatible DEcoding.
        # If this crashes for Python2 (when there are non-ASCII symbols),
        # it's probably fine for `contents` to stay intact.
        try:
            contents = contents.decode()
        except:
            pass
    
        # Write.
        absPath = "%s/%s" % (self.DIR, path)
        print("Writing '%s'" % absPath)
        f = open(absPath, "w")
        f.write(contents)
        f.close()

tool = Tool(sys.argv)
tool.run()
