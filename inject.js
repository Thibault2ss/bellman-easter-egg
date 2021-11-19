(function (document, code) {
  if (!document.addEventListener) {
    return;
  }

  var iframeId = "bellman-easter-egg";
  var html = "https://thibault2ss.github.io/bellman-easter-egg/";
  var audio = new Audio(
    "https://raw.githubusercontent.com/Thibault2ss/bellman-easter-egg/main/nyan/audio/nyan-cat.ogg"
  );
  var removeEasterEggTimeout = "";
  var l = "";

  const removeEasterEgg = () => {
    const iframe = document.getElementById(iframeId);
    audio.pause();
    audio.currentTime = 0;

    if (iframe) {
      iframe.remove();
    }

    clearTimeout(removeEasterEggTimeout);
  };

  const showEasterEgg = () => {
    const iframe = document.getElementById(iframeId);

    if (!iframe) {
      document.body.innerHTML +=
        '<iframe id="' +
        iframeId +
        '" src="' +
        html +
        '" style="border:0;width:100vw;height:100vh;position:fixed;top:0;z-index:1337;pointer-events:none;" allowtransparency="true"></iframe>';
      audio.play();

      removeEasterEggTimeout = setTimeout(removeEasterEgg, 60000);
    }
  };

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      removeEasterEgg();
      l = "";
      return;
    }

    l += event.key;

    if (l.indexOf(code) !== -1) {
      l = "";
      showEasterEgg();
    }
  };

  document.addEventListener("keydown", onKeyDown);
})(document, "thib");
