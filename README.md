infomongo
=========

The site uses Jekyll. But I'm compiling SASS directly via

   sass --watch _includes/css --style compressed --no-source-map
        
This is faster than the compile times with Jekyll, and more flexible. 
I'm putting all the CSS in the head, rather than a linked CSS file. 

I installed gems locally for this project using the following command:

   bundle install --path vendor/bundle
   
I think this gets saved in the .bundle/config file.