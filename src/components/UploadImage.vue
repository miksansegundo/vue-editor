<template>
  <form class="form" @submit:prevent="uploadImage">
    <h3>Upload image</h3>
    <input @change="checkUploadDisabled" ref="upload" name="upload" type="file" class="form-control" placeholder="Upload Your Images" accept=".png, .jpg, .jpeg">
    <button
      :disabled="uploadingImage || uploadDisabled"
      type="submit"
      id="submit"
      class="btn btn-default"
    >{{uploadingImage ? 'Uploading' : 'Upload'}}</button>
    <p v-if="errorUploadingImage" class="error">Oops! We had technical difficulties.</p>
  </form>
</template>

<script>
  export default {
    props: [],
    data() {
      return {
        uploadDisabled: true
      }
    },
    computed: {
      uploadingImage() {
        return this.$store.state.uploadingImage
      },
      errorUploadingImage() {
        return this.$store.state.errorUploadingImage
      }
    },
    methods: {
      uploadImage() {
        this.$store.dispatch('uploadImage', this.$refs.upload.parentNode)
        this.$refs.upload.parentNode.reset()
      },
      checkUploadDisabled() {
        return this.uploadDisabled = !this.$refs.upload.files.length
      }
    }
  }
</script>
