AFRAME.registerComponent("game-play", {
    update: function () {
        this.isCollided(this.data.elementId);
    },
    isCollided: function (elementId) {
        var scene = document.querySelector("#scene")
        var element = document.querySelector(elementId);
        var counter = 0
        element.addEventListener("collide", (e) => {
            if (elementId.includes("#target")) {
                scene.removeChild(element)
                // element.setAttribute("visible", false);
                counter = counter + 1;
                if(counter == 10){
                    this.gameOver();
                }
            }
        })
    },
    gameOver: function () {
        var scene = document.querySelector("#scene")
        var text = document.querySelector("game_over_text")
        text.setAttribute("visible", true)
        console.log("hey")
    }
})