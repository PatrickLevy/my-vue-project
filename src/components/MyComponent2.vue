<template>
  <main-layout>
    <div class="hello">
      Holy crap this is the second component!
      {{ msg }}
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'

export default {
  data () {
    return {
      msg: 'This is a message'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
