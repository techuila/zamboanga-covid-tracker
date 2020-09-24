<template>
  <b-sheet id="bottom-sheet" :style="{ zIndex: 9999 }" :barColor="'#FEFEFE'" :defaultState="'half'">
    <!-- Info header -->
    <div class="header">
      <div class="info">
        <helper-card v-for="(info, key) in infos" :info="info" :key="key" />
      </div>
    </div>

    <!-- Main Content -->
    <content-main />
  </b-sheet>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import useHeaderInfo from '@/composables/useHeaderInfos'

export default {
  setup () {
    const { infos } = useHeaderInfo();

    onMounted(() => {
      infos.value = infos.value.map(e => ({
        ...e,
        icon: { style: {} },
        card: {
          style: {
            backgroundColor: e.icon.style.backgroundColor,
            borderRadius: '5px',
            height: '70px'
          }
        }
      }))
      console.log(infos.value)
    })

    return { 
      infos 
    }
  }  
}
</script>

<style lang="scss" scoped>
.c-card {
  width: 48%;
  color: #FFFFFF;
  padding-left: 8px;
  align-items: center;
}
</style>