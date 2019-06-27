<template>
  <a class="octagon" :style="{width: `${size}px`, height: `${size}px`}">
    <span class="wrapper">
      <span class="inner" :style="{'line-height': `${size}px`, backgroundImage:`url(${url})`}" />
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
  background: yellow;
  overflow: hidden;
}
.wrapper{
  display: inline-block;
  width: 100%;
  height: 100%;
  /* background-size: cover;
  background-position: center center;
  background-color: #000; */
  /* transform-origin: 50% 50%; */
  transform: rotate(45deg);
  text-align: center;
  line-height: 200px;
  overflow: hidden;
  background-color: #000;
}
.inner{
  display: inline-block;
  width: 100%;
  height: 100%;
  transform-origin: -50% -50%;
  background-size: cover;
  background-position: center center;
  background-color:red;
  transform: rotate(-45deg);
}
</style>
