# Progressive Web App

_Made for Progressive Web App @ cmda-minor-web 2020 - 2021_

<!-- mock up pictures ? -->

<!-------------------------- New Paragraph -------------------------->

## :pencil2: App description

<!-- Always wanted to quickly search for a specific GIF? **_Gifinder_** is here! By simply typing a word of choice, you will get 24 GIFs that meet your requirements!
By clicking on one of the GIFs, you will see that GIF's title, posted time, original source and a link to view the GIF at [Giphy.com](https://giphy.com) -->

[**_My work_** can be viewed right here](https://pwa-lisaoude.netlify.app/)

<br/>

<!-- I have also made a [Wiki](https://github.com/lisaoude/Gifinder/wiki), where I kept a weekly log, explained some things about map, filter & reduce and made some JavaScript related annotations.

<br/>  -->

<!-------------------------- New Paragraph -------------------------->

## :pushpin: Table of Contents

<!-- - [What does this Web App do?](#gem-What-does-this-Web-App-do?) -->
<!-- - [API](#link-API) -->
<!-- - [Diagrams](#chart_with_upwards_trend-Diagrams) -->
<!-- - [Folders & Files](#open_file_folder-Folders-&-files) -->
<!-- - [Install](#inbox_tray-Install) -->

- [License](#closed_lock_with_key-License)
- [Next Steps](#telescope-Next-Steps)
- [Resources](#books-Resources)

<br/>

<!-------------------------- New Paragraph -------------------------->

<!-- ## :gem: What does this Web App do?

- Fetch & show the trending GIFs on load
- Fetch & show the user GIFs based on the value they haved typed into the input field
- Fetch & show the user the details of a GIF they clicked on
- Provide the user with feedback while the content is loading
- Provide the user with feedback when hovering over a GIF

<br/>  -->

<!-------------------------- New Paragraph -------------------------->

<!-- ## :link: API

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
- Let the user search for GIFs, using a word or phrase
- Show the user the gifs they searched for using a word or phrase

<br/>

**Detail page**

- Generate a GIF by ID endpoint

<br/> -->

<!-------------------------- New Paragraph -------------------------->

<!-- ## :chart_with_upwards_trend: Diagrams

### Actor Diagram

![Actor Diagram](https://user-images.githubusercontent.com/57795294/109714885-3b514680-7ba3-11eb-99ba-8e92a7a33fcb.png)

### Interaction Diagram

![Interaction Diagram](https://user-images.githubusercontent.com/57795294/109714880-3ab8b000-7ba3-11eb-85e4-a989ececc287.png)

<br/> -->

<!-------------------------- New Paragraph -------------------------->

<!-- ## :open_file_folder: Folders & files

### Folder structure

During the development of Gifinder, I worked with modules for the first time. In my previous 'projects', as far as we can even call it that, my whopping 3 to 100 lines of JavaScript would just live in the same document. I used such little JavaScript, that it wasn't necessary to split it up at all. Because I'm obviously using MUCH more JavaScript for Gifinder, modules are great to keep everything organized. My folder & files structure for Gifinder looks like this:

![Folder & Files Structure](https://user-images.githubusercontent.com/57795294/109702534-a5aeba80-7b94-11eb-9be8-33a680f1eb2f.png)

<br/>

### Explanation folder structure

#### Assets

- Basically all code, except for my `index.html`, can be find inside this folder

<br/>

#### Scripts

- In here all my JavaScript code can be found

<br/>

#### Components

- In this folder, my folder with separate elements can be found, as well as my larger components, amde with those separate elements. In this folder my `index.js` file can also be found.

<br/>

#### Index.js

- Although this is a file and not a folder, it's definitely worth talking about. In this file I import all the separate elements made inside the `elements` folder. This way I can import these elements with way less code in my other files. An example can be found below.

##### **Example**

```js
// Messy, unnecessarily much code
import { elementOne } from "./file1.js";
import { elementTwo } from "./file2.js";
import { elementThree } from "./file3.js";
import { elementFour } from "./file4.js";
import { elementFive } from "./file5.js";
```

```js
// Clean, easily understandable code
import {
  elementOne
  elementTwo
  elementThree
  elementFour
  elementFive
  } from './index.js'
```

<br/>

#### Config

- In this folder, my `config.js` files can be found. In this file I export variables, such as the url and key I need for my API.

<br/>

#### Modules

- The `getData.js` file inside this folder does just what its name says: get the data. It fetches either the trending gifs on load, or fetches the gifs that the user has searched for using their input in to the input field.
- The `reloadHome.js` file inside this folder reloads the content on the home page after a request has been made. It makes sure to delete the previously loaded content before shaowing the new content.

<br/>

#### Routes

- The routes folder contains my ``router.js` file, where all possible routes are handled by the router. Because I use routie as my router, there's also a `routie.min.js` file. This file is provided for by Routie, and does not contain self-written code.

<br/>

#### Views

- The views folder contains all the pages that are rendered after a request has been made. These two pages use the imports from the `index.js` file in order to build all the HTML from scratch.

<br/>

#### States

- The states folder contains the loading state, which is shown during the loading of the gifs.

<br/>

#### Main.js

- This file is used to trigger the router and get Gifinder started.

<br/> -->

<!-------------------------- New Paragraph -------------------------->

<!-- ## :inbox_tray: Install

### 1. :dancers: Cone this repo

Before we can get started, we'll need to clone this repo.
This can be done by typing the following line of code into your terminal:

`git clone https://github.com/lisaoude/Gifinder`

<br/>

### 2. :computer: Install an http server

Next, we will have to install an http server.
Type the following line of code into your terminal:

`npm install http-server`

<br/>

### 3. :running: Run the app with our http server

This can be done by typing the following line of code into your terminal:

`htpp-server PATH-TO-DIRECTORY/Gifinder`

<br/>

### 4. :globe_with_meridians: Open browser and navigate to localhost

Almost done! We just need to navigate to the localhost in the browser.

`http://127.0.0.1:5500/`

<br/> -->

<!-------------------------- New Paragraph -------------------------->

## :closed_lock_with_key: License

This repository is licensed as [MIT](https://github.com/lisaoude/progressive-web-apps-2021/blob/master/LICENSE) by © Lisa Oude Elferink, 2021

<br/>

<!-------------------------- New Paragraph -------------------------->

## :telescope: Next Steps

We all know creative developing projects are never _truly_ done..  
These are some next steps that I would love to make:

- [ ] :)

<!-- - Make it possible for the user to save gifs, in the following ways:

  - Save the gifs to a favorites list
  - Save the gifs to a special collection, which the user can name themselves (e.g. funny gifs, cat gifs, etc.)
  - Save the gifs to their device (download)

- Give Gifinder a random mode

  - Returns a random GIF o the user after a button press

- Autocomplete user input with a list of valid terms that completes what the user has typed into the input field

- Provide users with a list of GIF categories
- Provide users with a list of the trending search terms
- Suggest searches to users -->

<br/>

<!-------------------------- New Paragraph -------------------------->

## :books: Resources

- Schepenaar, W. (2018, June 12). Server-side vs Client-side Routing. Retrieved March 8, 2021, from [Medium](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f)
- Ian Schoonover. (2020, June 27). How to Install Node JS on Windows 10. Retrieved March 8, 2021, from [YouTube](https://www.youtube.com/watch?v=AuCuHvgOeBY)
- Installing Express. (2021). Retrieved March 8, 2021, from [Expressjs.com](http://expressjs.com/en/starter/installing.html)
- Node.js Crash Course Tutorial. (2020). Retrieved March 8, 2021, from [YouTube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)

<!-- In this course we will convert the client side web application previously made Web App From Scratch into a server side rendered application. We also add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately we are going to implement a series of optimisations to improve the performance of the application.

## Learning goals
- _You understand the difference between client side and server side rendering and you can apply server side rendering
in your application_
- _You understand how a Service Worker works and you can implement it in your application._
- _You understand how the critical render path works and how you can optimize it for a better runtime and / or perceived performance._

[Rubric with learning goals](https://icthva.sharepoint.com/:x:/r/sites/FDMCI_EDU__CMD20_21_Minor_Web_5i7j73jt/_layouts/15/Doc.aspx?sourcedoc=%7B276F53A7-2531-4006-8AD2-08C9A82D3A11%7D&file=PWA%202021%20Rubric.xlsx&action=edit&mobileredirect=true&wdPreviousSession=92686bea-446f-40e3-9303-33fa3f832b82&wdOrigin=TEAMS-ELECTRON.teams.undefined)

## Program

### Week 1 - Server Side Rendering 📡

Goal: Render web pages server side

[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/course/week-1.md)
[Server Side Rendering - slides Declan Rek](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2021-server-side-rendering.pdf)


### Week 2 - Progressive Web App 🚀

Goals: Convert application to a Progressive Web App

[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/course/week-2.md)
[Progressive Web Apps - slides Declan Rek](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2020-progressive-web-apps.pdf)


### Week 3 - Critical Rendering Path 📉

Doel: Optimize the Critical Rendering Path
[Exercises](https://github.com/cmda-minor-web/progressive-web-apps-2021/blob/master/course/week-3.md)
[Critical Rendering Path - slides Declan Rek](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2020-critical-rendering-path.pdf) -->

<!--

Notes Node.js Crash Course

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
- What we use to send a response to the browser

-->
