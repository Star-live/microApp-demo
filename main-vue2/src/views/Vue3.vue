<template>
  <div>
    <micro-app name="vue3-micro-app" :url="vue3Url" baseroute="/vue3" @unmount="unmount" keep-alive></micro-app>
  </div>
</template>

<script>
export default {
  name: 'Vue3',
  data () {
    return {
      vue3Url: 'http://local.gf.com.cn:7200/'
    }
  },
  methods: {
    unmount () {
      console.log('====子应用卸载====')
    }
  }
}
</script>

<style scoped></style>
