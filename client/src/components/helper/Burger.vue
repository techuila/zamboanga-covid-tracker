<template>
  <button :class="`sidebar-btn ${value && 'active'}`" @click="$emit('input', !value)">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>

</style>