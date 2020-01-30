<template>
  <div class="settings">
    <form v-on:submit.prevent class="uk-form-stacked">
      <fieldset class="uk-fieldset">
        <legend class="uk-legend">Settings</legend>
        <div class="uk-margin" v-on:click="updateComposePath">
          <label class="uk-form-label" for="form-stacked-text">Docker compose and certificates path</label>
          <div class="uk-form-controls">
              <input class="uk-input" v-model="composePath" type="text" placeholder="Input">
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>
<script>
import { localGet, localSave } from '@/lib/database.js'
import { remote } from 'electron'
const dialog = remote.dialog

export default {
  name: 'settings',
  created () {
    localGet('composePath').then((composePath) => {
      this.composePath = composePath
    }).catch((err) => console.log(err))
  },
  methods: {
    updateComposePath () {
      dialog.showOpenDialog({
        properties: ['openDirectory']
      }).then((result) => {
        if (!result.canceled) {
          this.composePath = result.filePaths[0]
        }
      }).catch(err => console.log(err))
    }
  },
  computed: {
    composePath: {
      get () {
        return this.$store.state.composePath
      },
      set (newValue) {
        localSave('composePath', newValue)
        this.$store.commit('updateComposePath', newValue)
      }
    }
  }
}
</script>
