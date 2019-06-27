<template>
  <div class="app-container">
    <aside v-show="show" id="inner-step-1">
      The guide page is useful for some people who entered the project for the first time. You can briefly introduce the
      features of the project. Demo is based on
      <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
    </aside>
    <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
      Show Guide
    </el-button>
    <Octagon :size="50" :url="url" />
    <Octagon :size="50" />
    <Octagon :size="50" />
  </div>
</template>

<script>
import Octagon from '@/components/Octagon'
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import getSteps from './steps'
let vm = null
export default {
  name: 'Guide',
  components: {
    Octagon
  },
  data() {
    return {
      show: false,
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561632953997&di=3eab27d54ef209d8d417def66cbc7519&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20151231%2Ftooopen_sy_153310261897.jpg',
      driver: null
    }
  },
  mounted() {
    vm = this
    vm.driver = new Driver({
      opacity: 0.5
    })
  },
  methods: {
    guide() {
      this.driver.defineSteps(getSteps(vm))
      this.driver.start()
    }
  }
}
</script>
