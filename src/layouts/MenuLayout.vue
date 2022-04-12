<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title align="center" class="font-bold text-3xl">
          Нотариальная компания
        </q-toolbar-title>
      </q-toolbar>
<!--
      <q-tabs>
        <q-route-tab
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer class="px-3">
      <q-tabs switch-indicator class="tabs-botton">
        <q-route-tab
          v-for ="(menuItems,index) in menuItems"
          :key="index"
          :icon="menuItems.icon"
          :to="menuItems.link"
          replace
          :label="menuItems.displayName"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { menuItems } from 'src/data/menu-items'

export default {
    data: () => ({
      menuItems
    })
}

</script>

<style lang="scss">
.tabs-botton{
  .q-tabs__content{
    .q-tab__label{
      font-size: 11px;
    }
  }
}
</style>
