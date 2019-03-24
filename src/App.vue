<template>
  <div id="canvas-app">
    <!-- side pane -->
    <div class="sidepane col-sm-2 col-md-2 col-lg-2">
      <UploadImage />
      <hr />
      <div class="assets">
        <h3>Assets</h3>
        <AddText />
        <AddImage />
      </div>
    </div>
    <!-- canvas -->
    <Canvas />
  </div>
</template>

<script>
import Canvas from './components/Canvas.vue'
import UploadImage from './components/UploadImage.vue'
import AddText from './components/AddText.vue'
import AddImage from './components/AddImage.vue'
export default {
  components: {
    Canvas,
    UploadImage,
    AddText,
    AddImage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body, #canvas-app {
  width: 100%;
  height: 100%;
}

.sidepane {
  height: 100%;
  background: #E8E8EA;
}

.sidepane .form {
  height: 80px;
  margin: 10px 0;
}

.sidepane .assets {
  width: 100%;
}

#assetText {
  font-size: 24px;
}

.assets .text, .assets .image {
  margin: 10px 0;
}
.assets .image ul li {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  float: left;
  overflow: hidden;
}
.assets .image ul li img {
  width: 100%;
  height: 100%;
}

.canvas .block {
  position: relative;
  width: 600px; height: 600px;
  margin: 10px;
  border: 1px solid;
  box-shadow: 0px 0px 5px black;
}

.item {
  border: 1px solid transparent;
  position: absolute;
}

.item.selected {
  border-color: blue;
}

.error {
  color: #e0a025;
}

</style>
