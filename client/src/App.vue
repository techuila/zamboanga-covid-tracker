<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
html, body, #app, #dashboard {
  font-size: 1em;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  height: 100%;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.dashboard-info {
  border-color: transparent !important;
  background-color: rgba(64, 158, 255, 1) !important;

  i, p {
    color: #FFF !important;
  }
}

#dashboard-container {
  #date-picker { 
    height: 0;
    border: none;
  }

  .el-input__prefix {
    display: none;
  }

  #chart svg {
    background: transparent !important;
  }
  
  #dashboard {
    #sidebar {

      .el-radio-group {
        label {
          width: 100%;
          
          .el-radio-button__inner {
            border: 1px solid transparent;
          }

          span {
            width: 100%;
            color: #d1d1d1;
            background-color: #4C4D52;

          }

          &.is-active {
            span {
              color: #FFF;
              background-color: #409EFF;
            }
          }
        }
      }
    }
  }
}

.barangay-card {

  .el-card__body {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .stroke {
    stroke-width: 2;
  }
  .fill {
    opacity: 0.2;
  }
  .active-line {
    stroke: rgba(0, 0, 0, 0.2);
  }
  .point {
    display: none;
  }
  .point.is-active {
    display: block;
  }
  .vtc {
    width: 160px;
    height: 50px;
    margin-right: -5px;
  }
  
  .curve-total-cases {
    .stroke {
      stroke: #FF385F;
    }
    .fill {
      fill: #FF385F;
    }
    .point {
      fill: #FF385F;
      stroke: #FF385F;
    }
  }
  .curve-deaths {
    .stroke {
      stroke: #4D4D52;
    }
    .fill {
      fill: #4D4D52;
    }
    .point {
      fill: #4D4D52;
      stroke: #4D4D52;
    }
  }
  .curve-recovered {
    .stroke {
      stroke: #409EFF;
    }
    .fill {
      fill: #409EFF;
    }
    .point {
      fill: #409EFF;
      stroke: #409EFF;
    }
  }
}

// Scrollbar Dark Mode
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: transparent;
  border: solid 3px transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #6e6e6e;
  border: solid 3px transparent;

  &:hover {
    background-color: #5e5e5e;
  }
}

* {
  margin: 0;
	padding: 0;
	outline: 0 !important;
	box-sizing: border-box;
	text-decoration: none !important;
	list-style-type: none !important;
}


// Leaflet CSS
.leaflet-top.leaflet-right {
  top: 200px !important;
  right: 10px !important;
}

.leaflet-top.leaflet-left {
  left: 40px !important;
  top: initial !important;
  bottom: 50px;

  .leaflet-control { 
    bottom: 0;
    width: 100px;
    display: flex;
    justify-content: space-between;
    box-shadow: none;
    border-radius: none;

    a[class^="leaflet-control-zoom"] {
      width: 35px;
      height: 35px;
      padding-top: 3px;
      color: #FEFEFE;
      border-radius: 4px;
      border-bottom: none;
      background-color: #131317;
      box-shadow: 0 1px 5px rgba(0,0,0,0.65);
    }
  }
}

.leaflet-bottom.leaflet-right {
  display: none;
}
</style>
