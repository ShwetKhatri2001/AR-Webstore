# 💺 AR-Chairs

- Hi 👋 Shwet here, Welcome to AR-Chairs !
- Its a web application to visualize photorealistic 3D chairs by placing them in AR ( Augmented Reality ).

## 👀 Preview

### [Live Link](https://ar-chairs.netlify.app/)

<div style="display:flex;">
  <img src="https://user-images.githubusercontent.com/56475750/220354002-de05a051-8cf1-41ea-9a40-fe84d37fae5b.jpeg" 
            alt="before" width="300"/>
  <img src="https://user-images.githubusercontent.com/56475750/220354044-a4730f02-52df-41d5-b54c-077043f56456.jpeg" 
            alt="after" width="300"/>
</div>

## 🧰 Technologies Used

- Three.js
- Typescript
- Webpack
- HTML and CSS

## 🔥 Running the app

To get up and running, clone the repo and run the following commands to install dependencies and start the app using [localtunnel](https://github.com/localtunnel/localtunnel).

    npm install
    npm start:live

This will install the app dependencies, start an instance of webpack-dev-server and expose the local web server to the internet using. The localtunnel URL will be printed to your terminal.

## 🧰 Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

```
npm run build
```

## 📝 A note on debugging

As the app is running on a mobile device, you won't be able to easily access the devtools directly in the mobile browser. For development and debugging, attach the device to your machine using a cable and access the url `chrome://inspect/#devices` in your desktop version of Chrome. Allow debug access when prompted on your device. You should then be able to see your device appear in the inspection window you opened earlier, where you can use the `inspect` functionality to get access to the running app instance for debugging.

## 🎇 Contributing

If you find bugs with this project, pull requests are always welcome. You can [create an issue here](https://github.com/ShwetKhatri2001/AR-Chairs/issues/new).
Your :star: is also greatly appreciated.
