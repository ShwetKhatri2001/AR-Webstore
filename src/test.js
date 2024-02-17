import { Entity, Scene } from "aframe-react";
import "aframe";
export default function Test() {
  return (
    <a-scene
      xrextras-gesture-detector
      landing-page
      xrextras-loading
      xrextras-runtime-error
      renderer="colorManagement:true; webgl2: true;"
      xrweb="disableWorldTracking: true"
    >
      <a-assets>
        <a-asset-item
          id="jelly-glb"
          src="assets/jellyfish-model.glb"
        ></a-asset-item>
        <img id="jelly-thumb" src="assets/video-thumbnail.jpg" />
        <video
          id="jelly-video"
          autoplay
          muted
          crossorigin="anonymous"
          loop="true"
          src="assets/jellyfish-video.mp4"
        ></video>
      </a-assets>

      <a-camera
        position="0 4 10"
        raycaster="objects: .cantap"
        cursor="fuse: false; rayOrigin: mouse;"
      ></a-camera>

      <a-light type="directional" intensity="0.5" position="1 1 1"></a-light>

      <a-light type="ambient" intensity="0.7"></a-light>

      <xrextras-named-image-target name="video-target">
        <a-entity
          xrextras-play-video="video: #jelly-video; thumb: #jelly-thumb; canstop: true"
          geometry="primitive: plane; height: 1; width: 0.79;"
        ></a-entity>
      </xrextras-named-image-target>

      <xrextras-named-image-target name="model-target">
        <a-entity xrextras-one-finger-rotate gltf-model="#jelly-glb"></a-entity>
      </xrextras-named-image-target>
    </a-scene>
  );
}
