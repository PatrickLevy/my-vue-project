<template>
  <div class="myDynamicProps">
    This is a new component that is receiving the text as a prop
    <div>
      <strong>
        {{ message }}
      </strong>
    </div>

  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>
