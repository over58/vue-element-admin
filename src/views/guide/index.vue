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
  </div>
</template>

<script>
import Driver from 'driver.js' // import driver.js
import 'driver.js/dist/driver.min.css' // import driver.js css
import getSteps from './steps'
let vm = null
export default {
  name: 'Guide',
  data() {
    return {
      show: false,
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
