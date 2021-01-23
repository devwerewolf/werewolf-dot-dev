window._updateSceneObject = () => {
  const { x, y, id, _is_dead } = window.LUA_SCENE_OBJECT;
  const index = id - 1;
  const sceneObject = SCENE[index];
  
  if (_is_dead) {
    const lastSceneObject = SCENE.pop();
    const doesNotMatchLastObject = lastSceneObject.id !== sceneObject.id;
    
    if (SCENE.length > 0 && doesNotMatchLastObject) {
      lastSceneObject.id = id;
      SCENE[index] = lastSceneObject;
    }
    
    sceneObject.obj.destroy();
  }
  else if (sceneObject && sceneObject.obj) {
    sceneObject.obj.x = x;
    sceneObject.obj.y = y;
  }
}