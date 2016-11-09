# Ivy

Disclaimer: This is hackathon code in the truest sense, please don't expect scalability, great architecture or any other good code design principal, however...

We won 1st place at [HackZurich](http://hackzurich.com/) 2016!
Thank you so much to all the organizers and participants for this incredible experience. 

To try it out see: https://ivybot.co/  
For an example see: https://www.youtube.com/watch?v=_2B_P9cFqLY  
For the actual pitch see: https://www.youtube.com/watch?v=zLyxq9hRDRk  

###What is it?

Ivy is a website building bot that listens to the description of your website, and then designs that website for you.


###How to use it?
Note - Ivy uses a lot of machine learning to understand what you say to her. The following are just examples of commands you might want to use. To ensure that Ivy understands you properly, you should make your commands somehow similar and always ask for only one thing at a time.

To select a tempate - this has to be your first step
- "create me a blog" - will give you a blog page template
- "create a commercial store" - will give you a ecommerce template

Following commands work only with "blog" template for now

To load images
- "Show me pictures of [unique place - e.g. San Francisco]"

To change title 
- "change title to [title - e.g. Chicago]"

To change color
- "set the color to [color - e.g. blue]"

To show articles 
- "show me some articles"

###Limitations
 - Unfortunetaly Ivy does not work out of the box. You have to supply your own API keys (you can set them in ```tools/ENV_VARS.js```)
 - The same goes for the [LUIS](https://www.microsoft.com/cognitive-services/en-us/language-understanding-intelligent-service-luis) models that we used. You have to supply your own, although we will soon be uploading ours.
 - Finally, make sure to use Ivy on Google Chrome as it uses the Google Web API for speech recognition, which as of right now only works on Google Chrome.
 
###Contributors
- Michael Vakoč - https://www.facebook.com/michael.vakoc
- Rene Brandel - https://www.facebook.com/rbrandel
- Julian Brendl - https://www.facebook.com/julian.brendl
- Yue Ou - https://www.facebook.com/allenouyue
