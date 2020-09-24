<template>
  <div class="tab-container">
    <div class="tab-header">
      <div 
        v-for="(e, i) in data" 
        :class="`tab ${value == i && 'tab-active'}`" 
        @click="$emit('input', i)"
        :key="i"
      >
        <i :class="e.class"></i>
        {{ e.label }}
      </div>
    </div>

    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['data', 'value'],
}
</script>

<style lang="scss" scoped>
.tab-container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .tab-header {
    width: 100%;
    display: flex;
    padding: 30px 20px;
    justify-content: space-around;

    .tab {
      flex-grow: 1;
      margin: 0 10px;
      padding: 10px 22px;
      border-radius: 5px;
      text-align: center;
      color: #d1d1d1;
      transition: all ease-in 150ms;

      &:not(.tab-active):hover {
        transform: scale(1.05);
        background-color: #4D4D52;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }

      &.tab.tab-active {
        color: #FFF;
        transform: scale(1.05);
        background-color: #409EFF;
        box-shadow: 0 1px 15px rgba(64, 158, 255, 0.4);
      }
    }
  }
}
</style>