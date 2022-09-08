<template>
  <div>
    <micro-app name="app1" :url="vue2Url" baseroute="/vue2" keep-alive></micro-app>
  </div>
</template>

<script>
export default {
  name: 'Vue2',
  data () {
    return {
      vue2Url: 'http://local.gf.com.cn:7100/'
    }
  }
}
</script>

<style scoped></style>
