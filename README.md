infomongo
=========

The site uses Jekyll. But I'm compiling SASS directly via

   sass --watch _includes/css --style compressed --no-source-map
    
This `dart-sass` is an alias for for the dart version of sass installed at `/usr/local/bin/sass`. Have to call the fully qualified path to dart sass, to use it instead of the sass gem.
    
This is faster than the compile times with Jekyll, and more flexible. 
I'm putting all the CSS in the head, rather than a linked CSS file. 
