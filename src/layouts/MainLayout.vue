<template>
  <div class="container">
    <!--We're using vue-router-->
    <div>
      <router-link v-bind:to="'/'">Home</router-link>
      <router-link v-bind:to="'/comp1'">Component1</router-link>
      <router-link v-bind:to="'/comp2'">Component2</router-link>
    </div>

    <!--This is where the content will get stuck in-->
    <slot></slot>
  </div>
</template>
<script>

export default {
  data () {
    return {
      layoutMsg: 'the router is weird'
    }
  }

}
</script>
