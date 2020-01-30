import Indicators from './components/Indicators.vue'

const appInfo = {
  name: 'StatusIndicators',
  id: 'status-indicators',
  icon: 'info',
  isFileEditor: false,
  extensions: [],
  filesListIndicators: [{
    name: 'indicators',
    component: Indicators
  }]
}

export default {
  appInfo
}