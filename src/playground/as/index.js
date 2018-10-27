
    AFRAME.registerComponent('do-something', {
        init: function () 
        {
        }
    });

function runme() {
        var scene = document.querySelector('a-scene');
        var newBox = document.createElement('a-box');
        newBox.setAttribute('color', 'red');
        var position = {x: 0, y: 0.5, z: -1};
        newBox.setAttribute('position', position);
        scene.appendChild(newBox);
}