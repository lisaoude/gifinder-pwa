# Gifinder as a Progressive Web App

_Made for Progressive Web App [@ cmda-minor-web 2020 - 2021](https://github.com/cmda-minor-web)_

![Gifinder Mockups](https://user-images.githubusercontent.com/57795294/111635461-c7947800-87f7-11eb-94dc-198ce14e6aaa.png)

---

<!-------------------------- New Paragraph -------------------------->

## :pencil2: App description

Always wanted to quickly see the trending GIFs? **_Gifinder_** is here! On load, you will get 24 GIFs that meet your requirements!
By clicking on one of the GIFs, you will see that GIF's title, posted time, original source and a link to view the GIF at [Giphy.com](https://giphy.com).

Gifinder is a server side rendering application.

[My work can be viewed right here](https://gifinder-pwa.herokuapp.com/).

</br> 

---

<!-------------------------- New Paragraph -------------------------->

## :pushpin: Table of Contents

- [What does this Web App do?](#gem-What-does-this-Web-App-do?)
- [API](#link-API)
- [Performance](#muscle-boom-Performance)
- [Used Packages](#gift-Used-Packages)
- [Install](#inbox_tray-Install)
- [Next Steps](#telescope-Next-Steps)
- [License](#closed_lock_with_key-License)
- [Sources](#books-Sources)

</br>

---

<!-------------------------- New Paragraph -------------------------->

## :gem: What does this Web App do?


### General features
- Gifinder can be downloaded, as any good PWA should be 
- Caches pages both statically and dynamically 
- Serves the user an offline page when they happen to be offline

</br> 

### Performance based features
- Gifinder uses a packages called ```compression```, which ensures that JSON and other static file responses are smaller
- Uses gulp to optimize CSS
- Scores above 90 on 3 out of 4 options in Chrome Lighthouse  
- [More about performance later!](#muscle-boom-Performance)

</br>

### API based features
- Fetch & show the trending GIFs on load
- Fetch & show the user the GIF and details of the GIF they clicked on
- Provide the user with feedback when hovering over a GIF

</br>

---

<!-------------------------- New Paragraph -------------------------->


## :link: API

### :question: Which API did I use?

This Web App has been designed and developed with the [the Giphy API](https://developers.giphy.com/docs/api/).
Giphy has the largest GIF library in the world and their API makes it possible to seamlessly integrate these GIFs into any application.

</br>

### :eyes: What can you do with this API?

_All information can also be found on [the Giphy website](https://giphy.com)_

- Return a random GIF
- Show trending GIFs to users
- Let the user search for GIFs, using a word or phrase
- Convert what the user typed into the input field into the perfect GIF using their :sparkles:special sauce:sparkles: algorithm
- Autocomplete user input with a list of valid terms that completes what the user has typed into the input field
- Generate a unique ID to assign to each new user in an application
- Generate one or multiple GIFs by ID endpoint
- Provide users with a list of GIF categories
- Provide users with a list of the trending search terms
- Suggest searches to users
- Upload content programmatically on Giphy.com

</br>

### :raising_hand: What did I do with this API?

I have implemented the following points into **_Gifinder_**:

**Home page**

- Show trending GIFs to users on load of the page

</br>

**Detail page**

- Generate a GIF by ID endpoint
- Generate the details of a GIF by ID endpoint

</br>

### :end: Endpoint & parameters
Gifinder uses one main endpoint, which can be seen below.  

```
https://api.giphy.com/v1/gifs/[parameters here]?&api_key=${key}`
```  

I used the parameters below to get different data.
- `${trendingType}`
- `${req.params.id}`

The `${trendingType}` parameter fetches the trending GIFs at the moment. When using the trendingType parameter, the following needs to be added at the very end `&limit=24`. The limit can be changed to any number.  
The `${req.params.id}` parameter fetches a specific GIF by ID and gets the data that belongs to that ID.

</br>

### :microphone: API response
After making a request to the API, you will receive some information about the GIFs. Below you can find what information you get and what it means.

```
{
"type":                // the type of image (mostly all GIFs)
"id":                  // unique ID of the GIF
"url":                 // URL of the GIF, on Giphy.com
"slug":                // GIfs unique slug (used in the url)
"bitly_gif_url":       // short URL, linking to Giphy.com
"bitly_url":           // short URL, linking to Giphy.com
"embed_url":           // embed URL
"username":            // username of who posted the GIF
"source":              // original source of the GIF
"title":               // GIFs title
"rating":              // GIFs MPAA-style rating, such as Y, G, PG, PG-13 and R
"content_url":         // content URL, currently unused by Giphy
"source_tld":          // top level domain of the original source
"source_post_url":     // URL of the webpage on which the GIF was found
"is_sticker":          // stating if the GIF can be used as a web sticker
"import_datetime":     // the creation or upload date from the GIF
"trending_datetime":   // the date on which this GIF was marked as trending
"images": {}           // containing data for different formats and sizes of the GIF
                       // such as original, downsized, fixed-height, fixed-width and stills
}
```

</br>

---

<!-------------------------- New Paragraph -------------------------->

## :muscle::boom: Performance

To improve the performance of my Web App, I ran it through the Chrome Lighthouse tool at three separate moments during development. In order to get trustworthy outcomes, I ran it through 3 to 5 times for each test, screenshotted all results, and picked the one representing the average outcome (if outcomes were different at all).  

<br/> 

### Lighthouse test 1 - No optimizations added 
First, I ran my Web App through as it was - no performance based optimizations added.
As you can see, Gifinder scores 67 on performance, 75 on accessibility, 100 on best practices and 73 on SEO. Definitely some room for improvement here! The lowest scoring option here is performance, so lets's take a look at that.  

</br>

![lighthouse_test_1](https://user-images.githubusercontent.com/57795294/112719800-0cf12d80-8efb-11eb-9ae2-74b22b46d37b.png)  

</br>

We can see here that it takes 3.7 seconds for the largest contentful paint to load and 2.7 seconds before the user can interact with Gifinder. Below that we see the suggestion that using video formats for animated content could save a large amount of loading time. I won't put the GIFs inside a video element, because using the image element saves me code (autoplay etc.) and I will take a look at improving the performance in others ways.  

</br>

![lighthouse_test_1_performance](https://user-images.githubusercontent.com/57795294/112720322-e08ae080-8efd-11eb-9762-b3a63ac68a06.png)  

</br>

### Lighthouse test 2 - Compression
On my second test run, I didn't yet implement any of the suggestions Lighthouse gave me on the first try, but I did install and use a package called [compression](#arrow_double_down-compression).  
As you can see, Gifinder now scores 92 on performance!  

</br>

![lighthouse_test_2](https://user-images.githubusercontent.com/57795294/112719802-0cf12d80-8efb-11eb-9b21-c23d6ef8a31d.png)  

</br>

We can see it now only takes 0.8 seconds for the largest contentful paint to load and 1.8 seconds before the user can interact with Gifinder.  

</br>

![lighthouse_test_2_performance](https://user-images.githubusercontent.com/57795294/112721848-6ca10600-8f06-11eb-88e2-cf1c0fa63b33.png)  

</br>

### Lighthouse final test - Gulp
On my final test run, I implemented Lighthouse's suggestions from the first and second run and installed and used a package called [gulp](:tropical_drink-gulp).  
As you can see, Gifinder now scores 95 on performance, 100 on accessibility, 100 on best practices and 90 on SEO. Looking pretty good if you ask me :sunglasses:. SEO is 'stuck' at 90, because Lighthouse can't seen to find my meta description, but I can assure you that it's there.  

</br>

![lighthouse_test_3](https://user-images.githubusercontent.com/57795294/112720198-357a2700-8efd-11eb-9140-80e6835c335a.png)  

</br>

We now see that there's only 0.8 seconds difference between the first and largest contentful paint and users can interact with Gifinder after 0.4 seconds! The suggestion about putting the GIFs inside video elements is still there, but the time went down from nearly 60 seconds to 20 seconds, so i'll take it for now! GIFs just take a long time to load and that won't change, so this is already great in my opinion.  

</br>

![lighthouse_test_3_performance](https://user-images.githubusercontent.com/57795294/112721914-c3a6db00-8f06-11eb-9a57-afe80567511e.png)  

</br> 

### Optimization summary
- Implemented compression
- Implemented gulp
- Now using downsized GIFs

</br>

---

<!-------------------------- New Paragraph -------------------------->

## :gift: Used packages

### :smiling_imp: nodemon
[Nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps with the development of node.js based applications. The nodemon package restarts the node application automatically when any file changes are made inside the directory.

</br>

I installed nodemon to quickly see wether the changes I made caused any errors, and also for the convenience that comes with automatic restarts.

```
npm i -g nodemon
```

</br>

### :monorail: express
[Express](https://www.npmjs.com/package/nodemon) is a node.js framework. 

</br>

I installed express, because this package makes routing via the server easier. Another reason for installing express, was the support for many template engines, as I used one for this project, but hadn't decided on one just yet.

```
npm i express
```
```
const express = require('express');
```

</br>

### :memo: ejs
[Ejs](https://www.npmjs.com/package/ejs) is a template engine that makes it possible for JavaScript code to be injected into the client.

</br>

I installed ejs, because the package is easy to understand, has a gentle, gradual learning curve (which makes it great for newbies - like me!) and using the package makes it easier to inject dat from the server into the client.

```
npm i ejs
```
```
app.set('view engine', 'ejs');
```

</br>

### :large_blue_circle: dotenv
[Dotenv](https://www.npmjs.com/package/dotenv) is a package that loads variables from a ```.env``` file.

</br>

I installed dotenv, because it helps to store sensitive data (such as the API key), which can then be hidden from the GitHUb repository using my ```.gitignore``` file.

```
npm i dotenv
```
```
require('dotenv').config();
```

</br>

### :dog::soccer: node-fetch
[Node-fetch](https://www.npmjs.com/package/node-fetch) is a module which works just like the ```window.fetch``` methode does client side, but for the server side.

</br>

I installed node-fetch, because it allows me to do an API fetch via the server side.

```
npm i node-fetch
```
```
const fetch = require('node-fetch');
```

</br>

### :arrow_double_down: compression
[Compression](https://www.npmjs.com/package/compression) is node.js compression middleware. 

</br>

I installed compression, because it  ensures that JSON and other static file responses are smaller.


```
npm i compression
```
```
const compression = require('compression');
```
```
app.use(compression());
```

</br>


### :tropical_drink: gulp
[Gulp](https://www.npmjs.com/package/gulp) is a frontend build system with hundreds of plugins available for different tasks.

</br>

I used gulp to minify my CSS with the plugin ```gulp-cleanCSS```, which is a CSS optimizer!  
I have only minified my CSS, because it's my largest file of all (42% of all my code). My client side JavaScript is a single file with about 8 lines, so that'll do just fine without minification.  

```
npm i gulp
```
```
"build": "node build/build-css.js"
```

</br>

---

<!-------------------------- New Paragraph -------------------------->

## :inbox_tray: Install

### 1. :dancers: Clone this repo

Before we can get started, we'll need to clone this repo.
This can be done by typing the following line of code into your terminal:

```
git clone https://github.com/lisaoude/gifinder-pwa.git
```

<br/>

### 2. :computer: Install the packages

Next, we will have to install the used packages.

```
npm install
```

<br/>

### 3. :arrow_forward: Start local dev environment

This can be done by typing the following line of code into your terminal:

```
npm run dev
```

<br/>

### 4. :globe_with_meridians: Navigate to localhost

Almost done! We just need to navigate to the localhost in the browser.

```
http://localhost:5500/
```

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :telescope: Next Steps

We all know creative developing projects are never _truly_ done..  
These are some next steps that I would love to make:

- Make it possible to let the users search for GIFs
- Let the users save GIFs to a favorites list
- Let the users save GIFs to a special collection, which the user can name themselves (e.g. funny GIFs, cat GIFs, etc.)
- Give Gifinder a random mode, which returns a random GIF to the user after a button press
- Autocomplete user input with a list of valid terms that completes what the user has typed into the input field
- Provide users with a list of GIF categories
- Provide users with a list of the trending search terms
- Suggest searches to users

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :closed_lock_with_key: License

This repository is licensed as [MIT](https://github.com/lisaoude/progressive-web-apps-2021/blob/master/LICENSE) by © Lisa Oude Elferink, 2021

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :books: Sources

- Schepenaar, W. (2018, June 12). Server-side vs Client-side Routing. Retrieved March 8, 2021, from [Medium](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)
- Ian Schoonover. (2020, June 27). How to Install Node JS on Windows 10. Retrieved March 8, 2021, from [YouTube](https://www.youtube.com/watch?v=AuCuHvgOeBY)
- Installing Express. (2021). Retrieved March 8, 2021, from [Expressjs.com](http://expressjs.com/en/starter/installing.html)
- The Net Ninja. (2020).  Node.js Crash Course Tutorial. Retrieved March 8, 2021, from [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)
- npm: ejs. (2021, February 6). Retrieved March 9, 2021, from [NPMjs.com](https://www.npmjs.com/package/ejs)
- npm: nodemon. (2021, January 6). Retrieved March 23, 2021, from [NPMjs.com](https://www.npmjs.com/package/nodemon)
- npm: dotenv. (2019, October 16). Retrieved March 16, 2021, from [NPMjs.com](https://www.npmjs.com/package/dotenv)
- npm: node-fetch. (2020, September 5). Retrieved March 16, 2021, from [NPMjs.com](https://www.npmjs.com/package/node-fetch)
- The Net Ninja. (2019). PWA Tutorial for Beginners. Retrieved March 22, 2021, from [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7)
- npm: compression. (2019, March 18). Retrieved March 23, 2021, from [NPMjs.com](https://www.npmjs.com/package/compression)
- npm: gulp. (2019, May 6). Retrieved March 25, 2021, from [NPMjs.com](https://www.npmjs.com/package/gulp)
- npm: gulp-cleancss. (2014, June 16). Retrieved March 25, 2021, from [NPMjs.com](https://www.npmjs.com/package/gulp-cleancss)

