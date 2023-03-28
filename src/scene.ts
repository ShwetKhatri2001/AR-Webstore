import * as THREE from "three";
import { createPlaneMarker } from "./objects/PlaneMarker";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { handleXRHitTest } from "./utils/hitTest";

import {
  AmbientLight,
  Mesh,
  Object3D,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  XRFrame,
} from "three";

export function createScene(renderer: WebGLRenderer,assetpath: string | null ) {
  const scene = new Scene();

  const camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.02,
    20
  );

  /**
   * Adding some simple ambient lights to illuminate the model.
   */
  const ambientLight = new AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);

  /**
   * Loading the gLTF model and assigning result to variable.
   */
  const gltfLoader = new GLTFLoader();

  let chairModel: Object3D;
  /** To show Chair */
  if(assetpath === null){
    assetpath = "../assets/models/SheenChair.glb"
  }
  gltfLoader.load(assetpath, (gltf: GLTF) => {
    chairModel = gltf.scene;
  });

  /**
   * Creating the plane marker to show on tracked surfaces.
   */
  const planeMarker: Mesh = createPlaneMarker();
  scene.add(planeMarker);

  /**
   * Setup the controller to get input from the XR space.
   */
  const controller = renderer.xr.getController(0);
  scene.add(controller);

  controller.addEventListener("select", onSelect);

  /**
   * Here the onSelect function is called whenever we tap the screen
   * in XR mode.
   */
  function onSelect() {
    if (planeMarker.visible) {
      const model = chairModel.clone();

      // Placing the model on the spot where the marker is showing.
      model.position.setFromMatrixPosition(planeMarker.matrix);

      // To rotate the model randomly with a bit of variation.
      // model.rotation.y = Math.random() * (Math.PI * 2);
      model.visible = true;

      scene.add(model);
    }
  }

  /**
   * This function will be called whenever a new hit test result is ready.
   */
  function onHitTestResultReady(hitPoseTransformed: Float32Array) {
    if (hitPoseTransformed) {
      planeMarker.visible = true;
      planeMarker.matrix.fromArray(hitPoseTransformed);
    }
  }

  /**
   * This function will be called whenever the hit test is empty/unsuccesful.
   */
  function onHitTestResultEmpty() {
    planeMarker.visible = false;
  }

  /**
   * The main render loop.
   *
   * This is where we perform hit-tests and update the scene
   * whenever anything changes.
   */
  const renderLoop = (timestamp: any, frame?: XRFrame) => {
    if (renderer.xr.isPresenting) {
      if (frame) {
        handleXRHitTest(
          renderer,
          frame,
          onHitTestResultReady,
          onHitTestResultEmpty
        );
      }

      renderer.render(scene, camera);
    }
  };

  renderer.setAnimationLoop(renderLoop);
}
