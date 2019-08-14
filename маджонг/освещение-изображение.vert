varying vec3 position;
varying vec3 normal;
varying vec2 texCoord;

void main()
{
    // Translate vertex coordinates from model/object space to screen one.
    gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;

    // Pass vertex coordinates and normal into camera/eye space.
    position = vec3(gl_ModelViewMatrix * gl_Vertex);
    normal = vec3(gl_ModelViewMatrix * vec4(gl_Normal, 0.0));
    
	// Pass texture coordinate.
    texCoord = gl_MultiTexCoord0.xy;
}
