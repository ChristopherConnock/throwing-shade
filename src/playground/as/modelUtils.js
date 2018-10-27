
function mesh2entity(mesh)
{
    var entity = document.createElement('a-entity');
    entity.setObject3D('mesh', mesh);
    return entity;
}
