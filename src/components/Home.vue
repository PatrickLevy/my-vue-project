<template>
  <main-layout>
    <div class="home">

      <!--Here's an example of passing props from a text input to a child-->
      <div class="dynamic-props">
        Dynamic Props
        <div>
          <input v-model="message">
        </div>
        <my-dynamic-props
          v-bind:message="message"
        ></my-dynamic-props>
      </div>

      <!--Here's an example of a loop where simple text is rendered-->
      <div class="loop">
        Here's a basic loop with text...
        <ol>
          <li v-for="(item, index) in items" v-bind:key="index">
            <strong>{{ item.text }}</strong>
          </li>
        </ol>
      </div>

      <!--Here's an example of a loop where a component is rendered with props rendered-->
      <div class="loop">
        Here's a loop with a component in which props are passed
        <ol>
          <li v-for="propItem in propItems" v-bind:key="propItem.text">
            <my-list-item
              v-bind:item="propItem"
            >
            </my-list-item>
          </li>
        </ol>
      </div>

    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import MyListItem from '@/components/MyListItem.vue'
import MyDynamicProps from '@/components/MyDynamicProps.vue'
export default {
  components: {
    MainLayout,
    MyListItem,
    MyDynamicProps
  },
  data () {
    return {
      propItems: [
        { text: 'propItem1' },
        { text: 'propItem2' },
        { text: 'propItem3' }
      ],
      items: [
        { text: 'item 1' },
        { text: 'item 2' },
        { text: 'item 3' }
      ],
      message: 'type some stuff'

    }
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
