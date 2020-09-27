<template>
  <div id="dashboard-container">
    <div id="dashboard">
      <div class="content">
        <core-header />

        <core-map />
      </div>

      <core-sidebar />
    </div>

    <!-- <div class="swipper" @click="setBottomState"></div>  -->
    <core-bottom-sheet />
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup(_, { root }) {

    onMounted(() => {
      root.$message({
        duration: 0,
        showClose: true,
        message: "This is just a personal project, I only used dummy data since I couldn't find a specific data that I need for this project.",
        customClass: 'dashboard-info'
      });

    })

    return {}
  }  
}
</script>

<style lang="scss">
#dashboard-container {
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  #twitter-widget-1 {
    z-index: 9999;
  }
  
  .el-radio-button__inner {
      width: 100%;
    }

  #dashboard {
    flex-grow: 1;
    display: flex;
    color: #FEFEFE;
    background-color: #262626; 

    #sidebar .sidebar-btn {
      display: none;
    }

    .header {  
      padding: 30px 50px;
    }

    .subtitle {
      color: #d1d1d1;
    }
    
    .row {
      height: inherit;
      display: flex;
    }

    .content { 
      width: 75%;
      height: 100%;
      display: flex;
      position: relative;
      flex-direction: column;
    }
  }

  #bottom-sheet {
    display: none;
  }
}

h1, h2, h3, h4, h5 {
  margin-bottom: 8px;
}


// Phones
@media only screen and (max-width: 680px) {
    .el-message.el-message--info.is-closable.dashboard-info {
      top: 0 !important;
      height: 15px;
      min-width: 100%
    }

    #dashboard-container {
    
    #dashboard .header {
      padding: 34px 24px;
    }

    #dashboard #map-leaflet {
      .leaflet-top.leaflet-right {
        left: 22px;
        top: 100px !important;
        right: initial !important;
      }

      .leaflet-top.leaflet-left {
        left: 20px !important;
      }
    }

    #dashboard .main.header .info {
      display: none;
    }

    #sidebar button.sidebar-btn{
      display: none !important;
    }

    .swipper {
      left: 0;
      right: 0;
      bottom: 16px;
      width: 60%;
      height: 12px;
      margin: 0 auto;
      position: absolute;
      border-radius: 100px;
      background-color: #000;
    }

    #bottom-sheet {
      display: initial;
      
      .card {
        z-index: 99999;
        background-color: #131318 !important;
      }

      .contents {
        color: #FFFFFF;
        padding: 24px 18px;

        .tab-container {
          margin-bottom: 100px;

          .tab-header {
            padding: 30px 0;    
          }

          .tab-pane {
            padding: 0 0 24px 0;
          }

          #chart {
            margin-top: 40px;
          }
        }

        .info {
          flex-wrap: wrap;
        }
      }
    }
  }

}

// Small resolutiuon screens / tablets
@media only screen and (max-width: 975px) and (min-width: 679px) {
  button.sidebar-btn {
    width: 30px;
    height: 40px;
    border: none;
    cursor: pointer;
    padding-top: 3px;
    display: block !important;
    background-color: transparent;
  }

  button.sidebar-btn span {
    position: relative;
    top: 0;
    display: block;
    width: 100%;
    height: 2px;
    margin-bottom: 5px;
    transition: all 0.2s ease;
    border-radius: 15px;
    background-color: #FFF;
  }

  button.sidebar-btn span:nth-child(2) {
    width: 80%;
    right: 0;
    opacity: 1;
  }

  button.sidebar-btn span:nth-child(2) {
    width: 60%;
  }

  button.sidebar-btn.active span:nth-child(1) {
    top: 8px;
    left: -4px;
    -ms-transform: rotate(38deg);
    transform: rotateZ(38deg);
  }


  button.sidebar-btn.active span:nth-child(2) {
    right: -100%;
    opacity: 0;
  }

  button.sidebar-btn.active span:nth-child(3) {
    top: -6px;
    left: -4px;
    -ms-transform: rotate(-38deg);
    transform: rotate(-38deg);
  }
}

@media only screen and (max-width: 975px) {
  #dashboard-container {
    display: block;
    overflow-x: hidden;

    #dashboard .content {
      width: 100%;
    }

    #sidebar.active {
      right: 0;
    }

    #sidebar {
      top: 0;
      width: 500px;
      bottom: 0;
      right: -500px;
      z-index: 9999;
      position: absolute;
      transition: all 250ms ease-in-out;

      .burger-container {
        width: 55px;
        position: absolute;
        padding-left: 13px;
        top: 24px; right: 500px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        background-color: #4C4D52;
        box-shadow: -3px 0 8px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
