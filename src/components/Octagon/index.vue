<template>
  <a class="octagon" :style="{width: `${size}px`, height: `${size}px`}">
    <span class="inner" :style="{'line-height': `${size}px`, backgroundImage:`url(${url})`}">
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.octagon{
  display: inline-block;
  height: 200px;
  width: 200px;
  overflow: hidden;
  position: relative;
}
.inner{
  display: inline-block;
  width: inherit;
  height: inherit;
  text-align: center;
  line-height: 200px;
  overflow: hidden;
  transform: rotate(45deg);
  background-size: cover;
  background-position: center center;
  background-color:red;
  transform-origin: center center;
}

</style>
