/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

<template>
  <div>
    <micro-app name="react16-micro-app" :url="react16Url" baseroute="/react16" v-on:unmount="unmount" keep-alive></micro-app>
  </div>
</template>

<script>
export default {
  name: 'React16',
  data () {
    return {
      react16Url: 'http://local.gf.com.cn:7300'
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
