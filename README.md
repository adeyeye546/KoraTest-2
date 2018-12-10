# KoraTest-2

1) Bettter Code Splitting


I split the code into different text files to make it easier to maintain, I split the routes into two different .js files one for the main index page and the other for the route of operation, this was achieved by using 'expressRouter'.

I created a models folder which contains the logic of the whole system, this is where the database models are stored and the database itself is initialized,  this folder is contains three text files

All this were exported as modules and were just required  in the main node file(app.js)

Note* the database string was declared in the .env file so a new have to be created .env file for it to work.


2) One Click URL Copy
I created a separate div tag in the "shorten-area" div, to contain a button of type"button" and onclick="callFunction" and a span tag respectively, then, I gave an ID to the a tag that contains the newly generated URL which I selected with JQUERY, then I created an element "input" to pick up the value of the 'a tag'  then selected the  content of the input(to highlight the text) then use the dom execCommand("copy") to copy selected text to clipboard then finally removed the input element.

For user experience I sent a message to the front end to tell user, that the "text has been copied " through the span I created
