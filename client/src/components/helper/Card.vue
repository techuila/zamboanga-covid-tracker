<template>
  <div class="c-card" :style="{ ...info.card.style, boxShadow: `0 1px 10px ${info.card.style.backgroundColor}`  }">
      <div class="icon" :style="{ ...info.icon.style, boxShadow: `0 1px 10px ${info.icon.style.backgroundColor}` }">
        <i :class="info.class"></i>
      </div>

      <div class="card-content">
        <p class="card-title">{{ info.title }}</p>
        <h3 class="card-subtitle">{{ info.value }}</h3>
      </div>
  </div>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="scss" scoped>
.c-card {
  display: flex;
  margin-bottom: 24px;

  .icon {
    width: 50px;
    height: 50px;
    display: flex;
    color: #FFFFFF;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;

    i {
      margin: 0 auto;
      font-size: 1.75em;
    }
  }

  .card-content {
    display: flex;
    margin-left: 12px;
    flex-direction: column;
    justify-content: center;
    margin-left: 12px;

    .card-title {
      color: #eeeeee;
      margin-bottom: 2px;
    }

    .card-subtitle {
      font-size: 1.25em;
    }
  }
}
</style>