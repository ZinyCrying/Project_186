AFRAME.registerComponent('targets', {
    init: function(){
        for (var i = 1; i <= 10; i++) {
            //id
            var id = `target${i}`;
      
            //position variables
            /* These lines of code are generating random positions for the 
            targets in a 3D space. */
            var posX = Math.random() * 30 + -10;
            var posY =  3;
            var posZ = -10;
      
            var position = { x: posX, y: posY, z: posZ };
      
            //call the function
            this.createTargets(id, position);
          }
    },
    createTargets: function (id, position) {
    var scene = document.querySelector("#scene");
    var targetEl = document.createElement("a-entity");

    targetEl.setAttribute("id", id);
    targetEl.setAttribute("material", "color", "#ff9100");
    targetEl.setAttribute("position", position);
    targetEl.setAttribute("geometry", { primitive: "sphere", radius: 0.2 });

    //set the static body attribute of physics system
    targetEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });

    targetEl.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    scene.appendChild(targetEl);
  },
})