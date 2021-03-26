# Gifinder as a Progressive Web App

_Made for Progressive Web App [@ cmda-minor-web 2020 - 2021](https://github.com/cmda-minor-web)_

![Gifinder Mockups](https://user-images.githubusercontent.com/57795294/111635461-c7947800-87f7-11eb-94dc-198ce14e6aaa.png)

---

<!-------------------------- New Paragraph -------------------------->

## :pencil2: App description

Always wanted to quickly see the trending GIFs? **_Gifinder_** is here! On load, you will get 24 GIFs that meet your requirements!
By clicking on one of the GIFs, you will see that GIF's title, posted time, original source and a link to view the GIF at [Giphy.com](https://giphy.com).

Gifinder is a server side rendering application.

[**_My work_** can be viewed right here](https://gifinder-pwa.herokuapp.com/).

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :pushpin: Table of Contents

- [What does this Web App do?](#gem-What-does-this-Web-App-do?)
- [API](#link-API)
- [Used Packages](#gift-Used-Packages)
- [Install](#inbox_tray-Install)
- [Next Steps](#telescope-Next-Steps)
- [License](#closed_lock_with_key-License)
- [Sources](#books-Sources)

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :gem: What does this Web App do?


### General features
- Gifinder can be downloaded, as any good PWA should be 
- Caches pages both statically and dynamically 
- Always servers user who have previously visited the web app with the index page, even if they happen to be offline when they visit again
- Serves the user an offline page when they click on a GIF and happen to be offline

<br/> 

### Performance based features
- Gifinder uses a packages called ```compression```, which ensures that JSON and other static file responses are smaller
<!-- - Uses gulp to optimize assets like CSS, JS and images 
- Scores 100 on all options in Chrome Lighthouse  -->

<br/> 

### API based features
- Fetch & show the trending GIFs on load
- Fetch & show the user the GIF and details of the GIF they clicked on
- Provide the user with feedback when hovering over a GIF

<br/> 

---

<!-------------------------- New Paragraph -------------------------->

## :link: API

### :question: Which API did I use?

This Web App has been designed and developed with the [the Giphy API](https://developers.giphy.com/docs/api/).
Giphy has the largest GIF library in the world and their API makes it possible to seamlessly integrate these GIFs into any application.

<br/>

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

<br/>

### :raising_hand: What did I do with this API?

I have implemented the following points into **_Gifinder_**:

**Home page**

- Show trending GIFs to users on load of the page

<br/>

**Detail page**

- Generate a GIF by ID endpoint
- Generate the details of a GIF by ID endpoint

<br/>

### :end: Endpoint & parameters
<!-- The API that was used is the API supplied by The Movie DB. These are public APIs and can be found at the link below:

https://developers.themoviedb.org/3/

This has been my 'standard' endpoint to which several parameters have been added to retrieve the data. The parameters below were used to obtain the various information:

discover/movie
movie/${movieID}
movie/${movieID}/recommendations
movie/${movieID}/watch/providers
search/movie
Based on these parameters, it can be seen that I show discovery movies, a specific movie, recommended movies based on a specific movie, the places where this specific movie can be viewed and the user can search for movies.

<br/> 

---
-->

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


---

<!-------------------------- New Paragraph -------------------------->

## :inbox_tray: Install

### 1. :dancers: Clone this repo

Before we can get started, we'll need to clone this repo.
This can be done by typing the following line of code into your terminal:

`git clone https://github.com/lisaoude/gifinder-pwa.git`

<br/>

### 2. :computer: Install the packages

Next, we will have to install the used packages.

`npm install `

<br/>

### 3. :arrow_forward: Start local dev environment

This can be done by typing the following line of code into your terminal:

`npm run dev`

<br/>

### 4. :globe_with_meridians: Navigate to localhost

Almost done! We just need to navigate to the localhost in the browser.

`http://localhost:5500/`

<br/>

---

<!-------------------------- New Paragraph -------------------------->

## :telescope: Next Steps

We all know creative developing projects are never _truly_ done..  
These are some next steps that I would love to make:

- Make it possible to let the users search for GIFs
- Let the users save GIFs to a favorites list
- Let the users save GIFs to a special collection, which the user can name themselves (e.g. funny gifs, cat gifs, etc.)
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


<!-- Notes Node.js Crash Course

## #2 - Node.js Basics
### Browser VS Node
In the browser
- Window is the global object
  - Like window.setTimeout
  - Window can be left out, because its presence is implied

In node
- Window is **not** the global object
  - **Global** is the global object
  - Represents the global context in a node environment


### Global object
As can be seen above, the global object in node is different from the global object in window.
This means that most of the things in the window object we can't excess in node, such as DOM methods like the querySelector.


### Dirname & Filename
- dirname = directory name
  - gets the absolute path of the current folder that the file is in

- filename
  - gets the absolute path of the current folder that the file is in **WITH** the file name added on


## #3 - Clients & Servers
### IP addresses and domains
GET Request
- Is made every time we go to a different webpage, either by a link or typing it directly into the address bar
- We're sending a **GET Request** to the server to get a certain resource (like an HTML webpage)
  - Communication via HTTP

POST Request
- Used to send data to a server from something like a webform


### Creating a server
In node, you manually create a server which lives on the back-end of your website.
This server listens for requests from the browser and then decide what responses to send to the browser.


### Localhost & Port numbers
Localhost
- Like a domain name you'd use on the web

Port numbers
- Like a door into a computer



## #4 - Requests & Responses
### Request object

### Response object
- What we use to send a response to the browser -->

