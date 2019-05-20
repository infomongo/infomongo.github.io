infomongo
=========

The site uses Jekyll. But I'm compiling SASS directly via

    sass --watch _includes/css --style compressed --sourcemap=none --precision 6
    
This is faster than the compile times with Jekyll, and more flexible. 
I'm putting all the CSS in the head, rather than a linked CSS file. 
