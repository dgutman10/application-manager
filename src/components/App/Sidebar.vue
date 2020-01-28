<template>
  <ul class="uk-nav uk-nav-default">
    <li class="uk-nav-header">Colppy Application Manager</li>
    <li
      v-for="(item, index) in menuItems"
      v-bind:key="index"
      v-bind:name="item.name"
      v-on:click="fireEvents"
      :class="{ 'uk-active': item.link === currentPath }">
      <router-link :to="item.link" exact>
        <span class="uk-margin-small-right" :uk-icon="item.icon" />
        {{ item.text }}
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['isCanvas'],
  name: 'sidebar',
  data () {
    return {
      menuItems: [
        {
          text: 'Dasboard',
          link: '/',
          name: 'dashboard',
          icon: 'icon: desktop'
        },
        {
          text: 'Applications',
          link: '/applications',
          name: 'applications',
          icon: 'icon: server'
        },
        {
          text: 'Settings',
          link: '/settings',
          name: 'settings',
          icon: 'icon: settings'
        }

      ]
    }
  },
  methods: {
    fireEvents (evt) {
      if (this.isCanvas) {
        document.getElementById('offcanvas-nav-toggle').click()
      }
    }
  },
  computed: {
    currentPath () {
      return this.$route.path
    }
  }
}
</script>
