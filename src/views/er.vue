<template>
	<div>
		<button onclick="runme()">click me</button>
		<a-scene v-pre embedded id="AScene" do-something>
				<!-- <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box> -->
				<a-sphere v-pre position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
				<a-cylinder v-pre position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
				<a-plane v-pre position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
				<a-sky v-pre color="#ECECEC"></a-sky>
		</a-scene>
	</div>
</template>
<script>

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

function runme()
{
    // var scn = $('#AScene')[0];
    // console.log($('#AScene'));
    var sceneEl = document.querySelector('a-scene');
    var sphere = document.querySelector('a-box');
    sphere.setAttribute("color", "#FFC65D");
    // var entityEl = document.createElement('a-entity');
    // entityEl.setAttribute("position", "1, 1, -5");
    // position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"
    // entityEl.setAttribute("obj-model", "obj: #tree-obj;");
    // entityEl.setAttribute("rotation", "0 45 0");
    // entityEl.setAttribute("rotation", "#4CC3D9");
    console.log("make it");
    // console.log(sceneEl);

    console.log(entityEl);
}

</script>
