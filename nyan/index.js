var NyanCat = function () {
  return {
    init: function () {
      this.cat = $("#nyan-cat");
      this.framesAmount = 6;
      this.currentFrame = 1;
    },

    cycleFrames: function () {
      var myself = this;
      this.cat
        .removeClass("frame" + myself.currentFrame)
        .addClass("frame" + myself.cycleIds(myself.currentFrame));
      this.currentFrame = this.cycleIds(this.currentFrame);
    },

    cycleIds: function (_currId) {
      if (_currId >= this.framesAmount) {
        _currId = 1;
      } else {
        _currId += 1;
      }

      return _currId;
    },
  };
};

var Sparks = function () {
  return {
    init: function (_combo) {
      var yCombosAmount = Math.ceil($(document).height() / _combo.height()),
        comboTags = $(document.createElement("div")),
        newCombo = null;

      for (var a = 0; a < yCombosAmount - 1; a += 1) {
        newCombo = _combo.clone();
        comboTags.append(newCombo); // <- still have to improve this crap
      }

      $("body").prepend(comboTags.html());
    },
  };
};

$(function () {
  var nyancat = new NyanCat(),
    sparks = new Sparks();

  nyancat.init();
  sparks.init($(".sparks-combo"));

  setTimeout(() => {
    var audioElm = document.getElementById("song");
    console.log("audioElm", audioElm);
    console.log("audioElm.muted", audioElm.muted);
    audioElm.play();
    audioElm.muted = !audioElm.muted;
    console.log("audioElm.muted", audioElm.muted);
  }, 1000);

  // console.log("audio");
  // console.log("audio");

  // var audio = new Audio(
  //   "https://raw.githubusercontent.com/Thibault2ss/bellman-easter-egg/main/nyan/audio/nyan-cat.ogg"
  // );
  // console.log("audio");
  // audio.play();

  var timer = setInterval(function () {
    nyancat.cycleFrames();
  }, 70);
});
