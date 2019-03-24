<template>
  <div class="image">
      <h4>Images</h4>
      <ul class="list-unstyled">
        <li v-for="image in images" :key="image"><img :src="image" class="img-rounded" /></li>
      </ul>
      <p v-if="!loadingImages && !images.length">No images uploaded</p>
      <p v-if="loadingImages">Loading images...</p>
      <p v-if="errorLoadingImages" class="error">Oops! We had technical difficulties. Please, refresh the browser.</p>
  </div>
</template>

<script>
  export default {
    props: [],
    created () {
      this.$store.dispatch('getImages')
    },
    computed: {
      images() {
        return this.$store.state.images
      },
      loadingImages() {
        return this.$store.state.loadingImages
      },
      errorLoadingImages() {
        return this.$store.state.errorLoadingImages
      }
    }
  }
</script>
