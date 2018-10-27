
    AFRAME.registerComponent('do-something', {
        init: function () 
        {
        //   var sceneEl = this.el;
        //   var entityEl = document.createElement('a-sphere');
        //   entityEl.setAttribute("position", {x: 1, y: 2, z: 3});
        //   entityEl.object3D.position ={x: 1, y: 2, z: 3} ;
        //   entityEl.setAttribute("radius", 500);
        //   entityEl.setAttribute("color", "#EF2D5E");
        //   console.log(entityEl.object3D.position);
        //   sceneEl.appendChild(entityEl);
        }
    });

function runme() {
        // var scn = $('#AScene')[0];
        // console.log($('#AScene'));
        var sceneEl = document.querySelector('a-scene');
        var sphere = document.querySelector('a-sphere');
        sphere.setAttribute("color", "#FFC65D");
        sphere.object3D.translateZ ( 3 ); 
        // var entityEl = document.createElement('a-entity');
        // entityEl.setAttribute("position", "1, 1, -5");
        // position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"
        // entityEl.setAttribute("obj-model", "obj: #tree-obj;");
        // entityEl.setAttribute("rotation", "0 45 0");
        // entityEl.setAttribute("rotation", "#4CC3D9");
        console.log("make it");
        // console.log(sceneEl);
}