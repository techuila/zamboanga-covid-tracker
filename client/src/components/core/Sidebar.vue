<template>
  <div id="sidebar" :class="`${active && 'active'}`">
    <div class="burger-container">
      <helper-burger v-model="active"></helper-burger>
    </div>
    
    <content-main />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup () { 
    const active = ref(false)

    return { active }
  }  
}
</script>

<style lang="scss" scoped>
#sidebar {
  width: 25%;
  min-width: 355px;
  display: inline-block;
  position: relative;
  background-color: #131318;
}
</style>