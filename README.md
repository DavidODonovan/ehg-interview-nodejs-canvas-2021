## Colour Thing

This is the coding challenge I completed to get an interview with _Education Horizons Group_.

This app displays a very long image that contains 32,768 discrete colours.

The app traverses a view of the image in 30 second loops.

The image is created using a simple Node.js app that leverages the 'canvas' package.

The front end was bootstrapped with create-react-app.

To install dependencies open 'frontend' folder and run `npm i`, then navigate back up to root directory and run `npm i` again.

To create image and launch app: `npm run dev`

###The brief for the challenge was:###

You need to write a program which will produce an image in which each colour occurs exactly once -- with no repetition and no unused colours.


Colours are formed by combining a red, green, and blue component in the range 0..256; your program will need to break each component into 32 steps -- 8, 16,24, .. 256 -- which means you will have 32,768 discrete colours.
let myRGBColour=`rgb(${red}, ${green}, ${blue})`;

Your image will therefore need to be sized to accommodate exactly this number of unique colours -- for example, 256x128px (although other dimensions are possible).

The result should be aesthetically pleasing (or at least interesting) and should not use any existing graphics or other files.
Your submission will be evaluated in terms of good development practices followed, cleanliness of code, the elegance of the algorithm you use, and the originality of your approach.

We’re also looking to see that your app doesn’t greatly impact the browser performance.

You may write this program preferably in Reactjs & Nodejs for use on a web browser which displays its results on-screen.
Feel free to submit in reply to james.overell@educationhorizons.com via zip file or link to github etc.
If you could submit this as soon as convenient that would positively reflect on you in this application.

Here are some frequently-asked questions:

Are third-party open source libraries such as React, Angular, etc. allowed in my submission?
Please use React and include any dependencies (or instructions for installation) with your submission.

What browsers need to be supported?
If a web-based submission, your submission should work in all modern standards-compliant browsers.

What version of Java/JavaScript/Python can I use?
Any is fine

What about 0 values?
You can safely ignore the 0 values for each colour component; they're not necessary in this task.

Does the image have to be 256x128px in size?
No -- you can use any dimensions you like, so long as the image contains each colour exactly once.

Can I use third party css/js plotting library?
No
