import * as THREE from "three";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import { ARButton } from "three/examples/jsm/webxr/ARButton";
import { createScene } from "./scene";
import {
  browserHasImmersiveArCompatibility,
  displayIntroductionMessage,
  displayUnsupportedBrowserMessage,
  getCurrentURL,getCurrentURLVarAstpth
} from "./utils/domUtils";

import "./styles.css";

function initializeXRApp() {
  const { devicePixelRatio, innerHeight, innerWidth } = window;

  // Creating a new WebGL renderer and setting the size + pixel ratio.
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio);

  // Adding for chair
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;

  // Enabling XR functionality on the renderer.
  renderer.xr.enabled = true;

  // Adding it to the DOM.
  document.body.appendChild(renderer.domElement);

  // Creating the AR button element, configuring our XR session, and appending it to the DOM.
  document.body.appendChild(
    ARButton.createButton(renderer, { requiredFeatures: ["hit-test"] })
  );

  // Passing the renderer to the createScene-funtion.
  let astpth=getCurrentURLVarAstpth();
  createScene(renderer,astpth);

  // Displaying a welcome message to the user.
  displayIntroductionMessage();
}

async function start() {
  // First, Checking if browser supports WebXR with "immersive-ar".
  const immersiveArSupported = await browserHasImmersiveArCompatibility();

  // Then Initializing app if supported.
  immersiveArSupported ? initializeXRApp() : displayUnsupportedBrowserMessage();
}
console.log(getCurrentURLVarAstpth())
console.log(getCurrentURL())
start();
