
    AFRAME.registerComponent('create_model', {
        init: function () 
        {
            var el = this.el;  // Entity.
            //var mythreejsobject = // ... Create three.js object.
            //el.setObject3D('mesh', mythreejsobject);
        }
    });

function runme()
{
    var scene = document.querySelector('a-scene');
    var mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), new THREE.MeshBasicMaterial( {color: 0x800080} ));
    var plane = new THREE.Mesh( new THREE.PlaneGeometry( 5, 5 ), new THREE.MeshBasicMaterial( {color: 0x800080, side: THREE.DoubleSide} ));   
    var position = {x: 1, y: -2.5, z: -1};
    var entity = mesh2entity(plane);
    entity.setAttribute('material', "src: /images/gray.jpg");
    entity.setAttribute('position', position);
    scene.appendChild(entity);
}
