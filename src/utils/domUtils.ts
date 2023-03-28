const qr = require("qrcode");
let base64="";
let imgpth="";
const url = getCurrentURL();
const urlvar = getCurrentURLVarAstpth();

    let stJson =JSON.stringify(url);
    let stJson2 =JSON.stringify(urlvar);

    qr.toDataURL(stJson,{type:'terminal'},function(err: { message: any; },code: string){
      if(err) return console.log(err.message);
      base64 = code;
      // console.log(base64);
    });

    /*
 * Returns true if navigator has xr with 'immersive-ar' capabilities
 * Returns false otherwise.
 */
export function getCurrentURL () {
  return window.location.href
}
export function getCurrentURLVarAstpth () {
  const urlParams = new URLSearchParams(window.location.search);
  let imgpth = urlParams.get('assetpath');
  return imgpth
}
export async function browserHasImmersiveArCompatibility(): Promise<boolean> {
  if (window.navigator.xr) {
    const isSupported: boolean = await navigator.xr.isSessionSupported(
      "immersive-ar"
    );
    console.info(
      `[DEBUG] ${
        isSupported
          ? "Browser supports immersive-ar"
          : "Browser does not support immersive-ar"
      }`
    );
    return isSupported;
  }
  return false;
}

/*
 * Create and display message when no XR capabilities are found.
 */
export function displayUnsupportedBrowserMessage(): void {
  const appRoot: HTMLElement | null = document.getElementById("app-root");
  const bigMessage: HTMLParagraphElement = document.createElement("p");
  const imgqrdisp: HTMLImageElement | null  = document.createElement("img");
  bigMessage.innerText = "😢 Oh no!";
  if (appRoot) {
    appRoot.appendChild(bigMessage);
  }

  const middleMessage: HTMLParagraphElement = document.createElement("p");
  middleMessage.innerText =
    "Your browser does not seem to support augmented reality with WebXR.";
   
  if (appRoot) {
    appRoot.appendChild(middleMessage);
  }

  const helpMessage: HTMLParagraphElement = document.createElement("p");

    
  helpMessage.innerText =
    `Try opening the page using a recent version of Chrome on Android.${url} asset is from ${urlvar} = ${stJson2}`;
    
  if (appRoot) {
    appRoot.appendChild(helpMessage);
  }
  imgqrdisp.src=base64;
  if(appRoot){
    appRoot.appendChild(imgqrdisp);
  }
}

/**
 * Create and show a simple introduction message if the device supports
 * WebXR with immersive-ar mode.
 */
export function displayIntroductionMessage() {
  const appRoot: HTMLElement | null = document.getElementById("app-root");

  const bigMessage: HTMLParagraphElement = document.createElement("h2");
  bigMessage.innerText = "Welcome 👋 Have a seat buddy";

  const descMessage: HTMLParagraphElement = document.createElement("h4");
  descMessage.innerText = "Enjoy the AR experience";

  const middleMessage: HTMLParagraphElement = document.createElement("p");
  middleMessage.innerText =
    "Press the button below to enter the AR experience.";

  const helpMessage: HTMLParagraphElement = document.createElement("p");
  helpMessage.innerText =
    "Note: The app works best in a well lit environment, with enough space to move around.";

  helpMessage.style.fontSize = "16px";
  helpMessage.style.fontWeight = "bold";
  helpMessage.style.padding = "64px 64px 0px 64px";
  helpMessage.style.opacity = "0.8";

  if (appRoot) {
    appRoot.appendChild(bigMessage);
    appRoot.appendChild(descMessage);
    appRoot.appendChild(middleMessage);
    appRoot.appendChild(helpMessage);
  }

  return () => {
    if (appRoot) {
      if (appRoot.contains(middleMessage)) {
        appRoot.removeChild(middleMessage);
      }
      if (appRoot.contains(bigMessage)) {
        appRoot.removeChild(bigMessage);
      }
      if (appRoot.contains(descMessage)) {
        appRoot.removeChild(descMessage);
      }
      if (appRoot.contains(helpMessage)) {
        appRoot.removeChild(helpMessage);
      }
    }
  };
}

export default {
  browserHasImmersiveArCompatibility,
  displayIntroductionMessage,
  displayUnsupportedBrowserMessage,
  getCurrentURL,getCurrentURLVarAstpth
};
