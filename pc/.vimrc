" An example for a vimrc file.
"
" Maintainer:   Bram Moolenaar <Bram@vim.org>
" Last change:  2002 Sep 19
" Modified by kornerr: 2007 Nov
"
" To use it, copy it to
"     for Unix and OS/2:  ~/.vimrc
"         for Amiga:  s:.vimrc
"  for MS-DOS and Win32:  $VIM\_vimrc
"       for OpenVMS:  sys$login:.vimrc

set runtimepath+=~/.vim/bundle/swift.vim

" Use VIM in VI-incompatible mode, make it modern
" This must be first, because it changes other options as a side effect
set nocompatible
" Do not accept mouse motions and mouse clicks, except for scrolling
set mouse=
" Work with files using UTF-8
set encoding=utf-8
set fileencoding=utf-8
set fileencodings=utf-8
" Allow backspacing over everything in insert mode
set backspace=indent,eol,start
" Do not back-up
set nobackup
" Keep 50 commands and search patterns in the history
set history=50
" Display the cursor position in the lower right corner
set ruler
" Display incomplete commands
set showcmd
" Do incremental searching
set incsearch
" Useless mapping
map Q gq
" Turn syntax highlighting on when the terminal has colors or it's
" gui vim, and highlight the last used search pattern
if &t_Co > 2 || has("gui_running")
    syntax on
    set hlsearch
endif

" Only do this part when compiled with support for autocommands
if has("autocmd")
    " Enable file type detection.
    " Use the default filetype settings, so that mail gets 'tw' set to 72,
    " 'cindent' is on in C files, etc.
    " Also load indent files to automatically do language-dependent
    " indentation
    filetype plugin indent on

    " Put these in an autocmd group, so that we can delete them easily.
    augroup vimrcEx
    au!

    " For all text files set 'textwidth' to 78 characters.
    autocmd FileType text setlocal textwidth=78

    " When editing a file, always jump to the last known cursor position.
    " Don't do it when the position is invalid or when inside an event handler
    " (happens when dropping a file on gvim).
    autocmd BufReadPost *
      \ if line("'\"") > 0 && line("'\"") <= line("$") |
      \   exe "normal g`\"" |
      \ endif

    augroup END
else
" Always set autoindentation on
  set autoindent
endif " has("autocmd")
" Ignore case when searching
set ignorecase

source ~/acpp.vim
map <F5> :Acpp<CR>

" allows cmds usage when in RU


" sets the color of comments
"highlight Comment ctermfg=darkblue

" when inserting { in INSERT mode put } and go on typing and only for C/C++
au BufNewFile,BufRead *.c,*.cpp,*.h,*.hpp,*.java inoremap { {<CR>}<Esc>O

" switches files by F5, F7 and F8
"nmap <F5> :A<CR>
"imap <F5> <ESC> :A<CR>i<Right>
nmap <F7> :bp<CR>
imap <F7> <ESC> :bp<CR>i<Right>
nmap <F8> :bn<CR>
imap <F8> <ESC> :bn<CR>i<Right>

" save file by F2
nmap <F2> :w<CR>
imap <F2> <ESC> :w<CR>i

" quit by F10
nmap <F10> :qa<CR>
imap <F10> <ESC> :qa<CR>

" set some thing about TAB
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
"set smarttab
" align with a case label instead of the statement after it in the same line
set cino=l1

" pgup and pgdown now must save position
nmap <PageUp> <C-U><C-U>
imap <PageUp> <C-O><C-U><C-O><C-U>

nmap <PageDown> <C-D><C-D>
imap <PageDown> <C-O><C-D><C-O><C-D>

" set encoding
" RotateEnc doesn't work
"set encoding=koi8-r
map <F4> :execute RotateEnc()<CR>

let b:encindex=0
function! RotateEnc()
    let y = -1
    while y == -1
        let encstring = "#8bit-cp1251#8bit-cp866#utf-8#koi8-r#"
        let x = match (encstring, "#", b:encindex)
        let y = match (encstring, "#", x+1)
        let b:encindex = 0
        if y == -1
            let b:encindex = 0
        else
            let str = strpart (encstring, x + 1, y - x - 1)
            return ":set encoding=".str
        endif
    endwhile
endfunction

set statusline=%<%f%h%m%r%=%b\ %{&encoding}\ 0x%B\ \ %l,%c%V\ %P

nmap <F12> :Pastie<CR> :w<CR>

:set guifont=Courier\ 10\ Pitch\ 20
" Block commenting for perl
"
" , #perl # comments
map ,# :s/^/#/<CR>"
" txt2tags syntax highlighting
au BufNewFile,BufRead *.t2t set ft=txt2tags
au BufNewFile,BufRead *.frag,*.vert,*.fp,*.vp,*.glsl setf glsl

