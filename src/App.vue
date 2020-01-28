<template>
  <div id="app" class="uk-height-viewport" uk-grid>
    <div class="uk-width-1-4 uk-visible@m">
      <div class="uk-padding-small uk-height-viewport uk-background-secondary uk-light" uk-sticky>
        <sidebar />
      </div>
    </div>
    <div class="uk-hidden@m uk-width-1-5">
      <a id="offcanvas-nav-toggle" class="uk-icon-button uk-position-small uk-position-top-left uk-dark" uk-icon='menu' uk-toggle="target: #offcanvas-nav"></a>
      <div id="offcanvas-nav" uk-offcanvas="overlay: true" collapsible="true">
          <div class="uk-offcanvas-bar">
            <sidebar is-canvas=true />
          </div>
      </div>
    </div>
    <div class="uk-padding uk-width-3-4">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/App/Sidebar'
export default {
  name: 'App',
  components: { Sidebar }
}
</script>
<style lang="scss">
@import '../node_modules/uikit/dist/css/uikit.min.css';
</style>
