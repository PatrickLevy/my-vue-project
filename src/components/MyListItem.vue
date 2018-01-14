<template>
  <div class="myListItem">
    <strong>
      {{ item.text }}
    </strong>

  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>
