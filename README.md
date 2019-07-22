# Project

[![Build Status](https://travis-ci.com/snowme34/projects.snowme34.com.svg?branch=master)](https://travis-ci.com/snowme34/projects.snowme34.com)

A project page.

## Changes From Fork

1. use CI/CD, not script, to deploy (resulting in clean project structure and easier deployment)
2. support uppercase tags
3. support longer description and more tags for each project
4. improve responsive project display
5. fix hard-coded directory path
6. add regex escape for search (did not support strings like "c++")
7. display time to details
8. remove loading vendor.bundle.js
9. add favicon
10. add more colors
11. update packages

-----------------------------------

**Below is the forked README (from original author)**:

-----------------------------------

[aviaryan.in/work/](https://aviaryan.in/work/)

My open source projects portfolio. Built with React.


## Features

* A completely dynamic portfolio
* Filter projects by title, tags, time etc
* Responsive
* Detail view to show more information about the project
* Light weight - bundle (JS + CSS) is around 130KB without any compression
* Unmatched Awesomeness


## Dev

```sh
yarn install
yarn start
```

For deploying

```sh
yarn build
./deploy.sh
```

## Customizing

Edit [src/data/projects.js](src/data/projects.js) to customize the projects that are being displayed.
That file contains a simple JavaScript JSON Object so it should be very easy to get started.


## Libraries Used

```sh
React
React-Router
Redux
GeoPattern
```

## Deployment

Run `yarn build` to generate bundle files with all the dependencies.

Then use the `deploy.sh` script to deploy them to `gh-pages` branch.


## Resources

This is my first React project. I was only able to complete it because of these resources.

* `[React]` [Build with React Interactive Tutorial](http://buildwithreact.com/tutorial)
* `[React]` [Official React Docs](https://facebook.github.io/react/docs/hello-world.html)
* `[React]` [List of tutorials for getting started with React](http://andrewhfarmer.com/getting-started-tutorials/)
* `[Setup]` [Minimal React Webpack Babel setup](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
* `[Setup]` [Official React Installation Guides](https://facebook.github.io/react/docs/installation.html)
* `[Setup]` [Getting started with Webpack 2 - CSS](https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783)
* `[Setup]` [CSS Modules Webpack React](https://javascriptplayground.com/blog/2016/07/css-modules-webpack-react/)
* `[Setup]` [CSS with HMR](https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/30)
* `[Routing]` [Router web docs](https://reacttraining.com/react-router/web/guides/quick-start)
* `[Setup]` [Resolve jsx extension in Webpack](https://stackoverflow.com/questions/34678314/)
* `[Setup]` [Using preact](https://preactjs.com/guide/switching-to-preact)
* `[Redux]` [Redux Official Intro](http://redux.js.org/)


## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines. 😉


## Screenshots

#### Home page Filter

![search](https://i.imgur.com/i9tn6ox.png)

#### Project Detail Page

![detail](https://i.imgur.com/8jrgCQk.png)

