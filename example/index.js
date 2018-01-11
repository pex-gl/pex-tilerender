var renderTiles = require('tile-renderer')

var camera = require('pex-cam/perspective')()

var config = {
  width: 12000,
  height: 9000,
  fov: camera.fov,
  near: camera.aspect,
  far: camera.aspect,
}


// sync?
var img = renderTiles(config, (proj) => {
  // render n-th slice of the view frustum
})


// old api

var tileRenderer = new TileRenderer()

ctx.frame(() => {
  if (tileRenderer) {
    var tile = tileRenderer.nextTile()
    if (tile) {
      var cam = tileRenderer.getCamera()
      // draw something
      //
      tileRenderer.capture()
    } else {
      tileRenderer.save()
      tileRenderer = null
    }
  }
})


