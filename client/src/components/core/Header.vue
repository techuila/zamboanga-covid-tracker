<template>
  <div class="main header">
    <h2>Coronavirus COVID-19</h2>
    <p class="subtitle">Zamboanga City</p> <br>

    <div class="info">
      <helper-card v-for="(info, key) in infos" :info="info" :key="key" />
    </div>
  </div>
</template>

<script>
import useHeaderInfo from '@/composables/useHeaderInfos'

export default {
  setup() {
    const { infos } = useHeaderInfo() 

    return { infos }
  }
}
</script>

<style lang="scss">
.header {
  z-index: 999;

  h2  {
    margin-bottom: 6px;
  }

  .subtitle {
    color: #d1d1d1;
  }

  .info {
    display: flex;
    margin-top: 12px;
    justify-content: space-between;
  }
}
</style>