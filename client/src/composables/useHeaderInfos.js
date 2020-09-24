import { ref } from '@vue/composition-api'

export default function useHeaderInfo () {
  const infos = ref(
    [{
      title: 'Total Cases',
      value: '200,000',
      class: 'fas fa-virus',
      card: {
        style: {}
      },
      icon: {
        style: {
          backgroundColor: '#BA3131',
        }
      }
    }, {
      title: 'Active',
      value: '10,231',
      class: 'fas fa-exclamation-triangle',
      card: {
        style: {}
      },
      icon: {
        style: {
          backgroundColor: '#F5C87B'
        }
      }  
    }, {
      title: 'Deaths',
      value: '28,711',
      class: 'fas fa-skull-crossbones',
      card: {
        style: {}
      },
      icon: {
        style: {
          backgroundColor: '#4E4D52'
        } 
      }  
    }, {
      title: 'Recovered',
      value: '123,456',
      class: 'fas fa-plus',
      card: {
        style: {}
      },
      icon: {
        style: {
          backgroundColor: '#409EFF'
        }
      }  
    }]
  )

  return {
    infos
  }
}