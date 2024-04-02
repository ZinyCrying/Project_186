AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet()
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'q') {
        console.log("bullet is created and fired");
        var bullet = document.createElement('a-entity');

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.09,
        });
        bullet.setAttribute("material", "color", "black");
        
        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-50));
        //set the bullet as the dynamic entity
        bullet.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "1",
        });

        var scene = document.querySelector('#scene');
        
        scene.appendChild(bullet);
      }
    })
  },
})