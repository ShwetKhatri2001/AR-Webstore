import React from "react";
const Help = () => {
  return (
    <div
      className={
        document.fullscreenElement ? "help-component fz" : "help-component"
      }
    >
      <div className="single">
        <h4> ORBIT NAVIGATION </h4>
        <p>
          <b>Move camera : </b> 1-finger drag or Left Mouse Button
        </p>
        <p>
          <b>Pan :</b> 2-finger drag or Right Mouse Button or SHIFT+ Left Mouse
          Button
        </p>
        <p>
          <b>Zoom on object : </b> Double-tap or Double-click on object
        </p>
        <p>
          <b>Zoom out : </b> Double-tap or Double-click on background
        </p>
        <p>
          <b>Zoom : </b> Pinch in/out or Mousewheel or CTRL + Left Mouse Button
        </p>
      </div>
    </div>
  );
};

export default Help;
