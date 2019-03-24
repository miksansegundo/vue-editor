import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    images: [],
    loadingImages: false,
    errorLoadingImages: false
  },
  mutations: {
    errorUploadingImage(state, value) {
      state.errorUploadingImage = value
    },
    uploadingImage(state, value) {
      state.uploadingImage = value
    },
    setNewImage(state, image) {
      state.images.push(image)
    },
    errorLoadingImages(state, value) {
      state.errorLoadingImages = value
    },
    loadingImages(state, value) {
      state.loadingImages = value
    },
    addImage(state, image) {
      state.images.push(image)
    },
    setImages(state, images) {
      state.images = images
    }
  },
  actions: {
    uploadImage: ({ commit }, form) => {
      commit('uploadingImage', true)

      fetch('/uploads', {
        method: 'POST',
        body: form
      })
        .then((response) => response.json())
        .then(({ file: image }) => {
          commit('uploadingImage', false)
          commit('setNewImage', image)
        })
        .catch(() => {
          commit('errorUploadingImage', true)
          commit('uploadingImage', false)
        })

    },
    getImages: ({ commit }) => {
      commit('loadingImages', true)
      fetch('/images')
        .then((response) => response.json())
        .then((images) => {
          commit('loadingImages', false)
          commit('setImages', images)
        })
        .catch(() => {
          commit('errorLoadingImages', true)
          commit('loadingImages', false)
        })
    }
  }
})
