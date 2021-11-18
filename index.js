(function (document, code) {
  if (!document.addEventListener) {
    return;
  }

  var iframeId = "bellman-easter-egg";
  var html =
    "https://raw.githubusercontent.com/Thibault2ss/bellman-easter-egg/main/nyan/index.html";
  var l = "";

  const removeEasterEgg = () => {
    const iframe = document.getElementById(iframeId);

    console.log("iframe", iframe);
    if (iframe) {
      iframe.remove();
    }
  };

  const showEasterEgg = () => {
    const iframe = document.getElementById(iframeId);

    if (!iframe) {
      document.body.innerHTML +=
        '<iframe id="' +
        iframeId +
        '" src="' +
        html +
        '" style="border:0;width:100vw;height:100vh;position:fixed;top:0;z-index:1337" allowtransparency="true"></iframe>';

      setTimeout(removeEasterEgg, 3000);
    }
  };

  const onKeyDown = (event) => {
    l += event.key;
    if (l.indexOf(code) !== -1) {
      l = "";
      console.log("triggered");
      showEasterEgg();
    }
  };

  document.addEventListener("keydown", onKeyDown);
})(document, "thib");
