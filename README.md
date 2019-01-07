# Whee Shape Store Task
## A Task set by [Solita](http://www.solita.fi/) in application.

<a name="top"></a>
## Contents

1. [Understanding of task](#und)
2. [Provided Solution Overview](#sol)
    - [Functionality](#fn)
    - [Look & Feel](#lf)
    - [Responsiveness](#rs)
    - [Targeted devices & Browsers](#db)
    - [Documentation](#dc)
    - [Testing](#ts)
3. [Architecture](#arc)
4. [Tooling & Libraries](#tol)
5. [Data Management](#dtm)
6. [Usage](#usg)
7. [Running](#rng)
8. [Observations & General Comments](#obs)

<a name="und"></a>
### Understanding of task

* The task given was to complete a shopping cart edit page / app based on basic specs given.
* The specs outlined general view and flow of main (products) page, and required to add cart funtionality
* General specs were given on UI items, data was simple based on the [products.ts](src/app/services/products.js) file, no back end was needed to be created
* As understood, these were basic requirements, and could be changed (and were), though changes should be justified in follow-up.
* Sections of the task, could loosley be provided as follows for prioritization:

  - [ ] Functionality for shoppping cart (adding / removing items)
  - [ ] Look and Feel of app.
  - [ ] Responsive layout based on one selected device (though it may not be so specific)
  - [ ] Targeted site at a specific browser / browsers
  - [ ] Documentation of the app
  - [ ] Testing

[top](#top)
<a name="sol"></a>
### Provided Solution Overview

The solution provided in this repository aims to prioritize and meet the above sections. Each approach is provided:
  <a name="fn"></a>
  - [x] __Functionality for shoppping cart (adding / removing items)__

    A intergrated service was created for web and general responsive devices, that attempted to manifest a basic solution
    to the task given. The app provides a view of products, which one can add to a shopping list. The user may also view the items on the shopping list and remove them. For the products and shopping list items, there is also the ability to view a specific item on the list in isolation. Navigation allows for moving between the product and shopping cart view, as well as stat counts representing item amounts, and price in total. There is also feedback to help a user know when an item is added or removed from the cart, without having to be in the cart.
  
  [top](#top)
  <a name="lf"></a>
  - [x] __Look and Feel of app__

    Whilst a basic look and feel for the app was given in the provided files, it was felt that it was not useful for providing a smooth use, look and feel. Particularly in mobile, the fonts and graphics could have been problematic, causing the app to be too unintuative. In this solution, the basic layout was provided, but the UI look was heavily customized in this solution.
  
  [top](#top)
  <a name="rs"></a>
  - [x] __Responsive layout based on one selected device (though it may not be so specific)__

    The site was approached, with a predominanly, 'mobile first' approach in order to ensure that it provided a good basic degree of responsiveness in the ui. Whilst no native device functionality was used, the responsiveness was loosley focused on clear ui on the iPhone X, but smaller devices such as iPhone SE, were checked (via tooling), and it should work on most devices. Scaled up, the app renders well on a usual computer sceen. There look and feel tries to be consistent between both where possible though obviously smaller screens differ in some aspects to provide for usability.
  
  [top](#top)
  <a name="db"></a>
  - [x] __Targeted site at a specific browser / browsers__

    The main development was undertaken in the Google Chrome Browser, using the latest supported CSS and HTML. The responsive sizes were emulated on the latest Firefox and Safari. Visually they appeared sufficient, however, due to Firefox rendering differences, some of the colors appear faded and visually different, plus some pixel adjustments in Firefox and Safari cause a few minor irritations in view. Safari causes the notification library to fail, so there are no popup notifications available. This is not particularly a marked bug of the library itself, but more of the browser. This is particulary eviddent in Safari's 'responsive mode'; Thus Chrome browser was targeted in full screen. More time would be required to fully design for all browsers on all devices.
  
  [top](#top)
  <a name="dc"></a>
  - [x] __Documentation of the app__

    This ``README.md``file provides the documentation for this task. As there is no specific back end or no fully implementated RESTful api, no documentation for such was provided. Focus for this task was on the front-end. However, further discussion of REST and similar is certainly warranted.
  
  [top](#top)
  <a name="ts"></a>
  - [x] __Testing__

    Whilst the tooling used to build the app includes automatic basic test creation, it does not nescessarily provide a fully integrated and wide coverage test framework. IN fact the bundled KArma / Jasmine default specs are incredibly cryptic, and its not advised to accept them if writing new tests. Front end testing isnt always so facile to set up and can be time consuming (though nescessary). However, in this case, I gave testing the lowest priority in the alloted timeframe. As I felt, the task had more crucial areas to illustrate my skillset, whlst not reducing the importancce of good tests. So the tests run but fail (with some very strange errors). For this task, assume testing is not implmented, or run them at your own risk!

[top](#top)
<a name="arc"></a>
### Architecture

The App is fundamentally front end. In its current form, it is an ui based web app, running on data provided from a hard file, not a Database. The task spec provided that it was not nescessary to provide a back end, therefore the data is served from a filebase and the dynamic data is managed by local web storage ``window.LocalStorage()``.

The app was written for the browser (Chrome) and responsiveness of layout was provided using the excellent Chrome Developer Tools. Due to time constraints and lack of fully implemented back end, Caching, Throttling, and preloading were ignored in this current task.

The current app can be cloned and run as it is in Chrome, with layout responsiveness tested with the tools as described. Innstructions for running follow below.

[top](#top)
<a name="tol"></a>
### Tooling & Libraries - 

The app was created from scracth with [Angular 7](http://angular.io/), using the [Angular CLI](https://cli.angular.io/). The app was thus constructed to spec via the Angular methodology (which also allows auto generation of some basic tests). Routing is provided by Angular's latest router. Look and Feel was largley custom, though layout and some elements and icons plus functionality were provided by [Bootstrap 3.4](https://getbootstrap.com/docs/3.4/) which also allowed an easier approach to responsiveness. This was an timeframe optimization decsion. Some additional libraries were included via [npm](https://www.npmjs.com/) in particular, the [Angular Notifier](https://github.com/dominique-mueller/angular-notifier), which allows for semi native feelng notifications (except on Safari it seems). Styles were managed via SCSS preprocessing, and the App was written in [Typescript](https://www.typescriptlang.org/) The app was written with the worlds best editor, of course! [Visual Studio Code](https://code.visualstudio.com/). For fonts, [Google Fonts](https://fonts.google.com/) are used via thier own CDN. The shapes are simply basic custom ``<svg></svg>`` elements for ease of use and responsivenes.

[top](#top)
<a name="dtm"></a>
### Data Management

The original files provided for a mini express proxy in the app which utilized a file for the products. However, it was a little tricky to tie in a nw Angular app to this without a bit of Webpack configuration, thus, due to this, the current app, the data is simply provided as a file which is imported to the data service. This means, instead of using RESTful architecture or similar (such as GraphQL, which would be awesome to try), data is queried via general JavaScript functions and Angular Services. However, some degree of asyncronicity is included as data and event services, are provided by observables, which gives a degree of back end realism (to a point!). AS mentioned, the daya is synchronzed with the browsers localStorage for persistence. (It is assumed the latest browser is used, as to not be concerned if such is supported!). Thus the flowfor requests is from client to storage, but synched from the hard coded ``products.js`` file. The raw data was left as it was.

[top](#top)
<a name="usg"></a>
### Usage

The app is fairly simple and intuative. Upon loading the user is provided with a very small list of shapes. They can select one for an individual view, however, as this is a framework app, there is no additional information shown on this individual view, but its just a placeholder to show how a bigger app could function. The user can see the price of the app and add it to the shopping cart, the shopping cart total items are visible from all views. An item can be removed from the shopping cart, also individually viewed. The total price and count are updated as provided. There is basic navigation available, which compacts to a hamburger menu when on a small device. On Firefoc and Chrome, there are notifications given when an item is added or removed from the shopping list. There are also emedded alerts when the list is empty, or an item isnt found, as well as a general **404** page. To allow for responsive view, I reccomend, Chrome, and the Developertools, which provide responsive mode.

[top](#top)
<a name="rng"></a>
### Running

The App is currently a __*Developer mode Angular Application*__ (*unbuilt and undeployed*). Thus the server is simply Angular CLI's own built in  Webpack Development Server. This is sufficient to run the app as is, (and provide access to the uncompiled Typescript). Of course a build could be run, but then a server would be needed (e.g. Node & express or Python) to host the static files. This, as understood was not required. To get up and running (hopefully) please do the following.

  1. Ensure you have the latest node and npm installed, and an internet connection (for font loading)
  2. Clone the [repo](https://github.com/stevematdavies/wheecart.git) to your computer
  3. Move into the cloned directory, and run ``npm install`` which should get everyting you need.
  4. Run ``npm start`` to run the app.
  5. Navigate to ``http:localhost:4200`` and you should see the app in all its glory.
  6. In Chrome, open the dev tools and try responsive mode, have fun!
  7. For tests (With Karma), you can run ``npm test``sit back and watch the terminal explode! I havent quite got to testing this time!
 
All source code is available for scrutiny here! Feel free to poke about in your cloned version. Feel free to comment in github if needed!

[top](#top)
<a name="obs"></a>
### Observations & General Comments

This was a good task, it was quite a bit to do, and prioritizing things was a good exercise, even if not everything was accomplished. Im very happy to discuss things further
at the alloted time. Hence the tests, well you will see. I hope my overall abilities come through here. Im no UX expert, so do excuse the colors, I tried to keep it as simple as possible. As its ony a basic functionality overall (not an complete app), I tried to apply my knowledge (Particularly Angular) to provide a sufficent result. Notably, with more time I would implement a fully functional backEnd, at least for REST activity, then async handling could be used, alng with error checking etc, a Database would also be great, but this wasnt the scope of the task. Im not 100% satisfied with using the datafile inside the javascript but it seems to allow me to provide a functioning approach for the task. Getting a sub proxy inside the dev server prooved to tricky for the time. There is no true error checking as there is no true async, except via the observables so there is no response codes to act on as so to speak, this is a limitation of this app. Responseiveness wise, with additional time, I would love to make the app fully responsive, not only on layout, but device specific and native, for now its only layout responsive. I would love to elaborate on my decsions and choices further if allowed.

[top](#top)

[Steve Davies](https://www.linkedin.com/in/stevemdavies/)
