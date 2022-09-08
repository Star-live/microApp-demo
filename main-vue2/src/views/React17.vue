/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import jsxCustomEvent from '@micro-zoe/micro-app/polyfill/jsx-custom-event'

<template>
  <div>
    <micro-app name="react17-micro-app" :url="react17Url" baseroute="/react17" keep-alive></micro-app>
  </div>
</template>

<script>
export default {
  name: 'React17',
  data () {
    return {
      react17Url: 'http://local.gf.com.cn:7400/'
    }
  }
}
</script>

<style scoped></style>
