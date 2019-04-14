<template>
  <li>
    <a>
      <slot name="title"></slot>
    </a>
    <ul class="nextulitem">
      <slot></slot>
    </ul>
  </li>
</template>
<style>
.nextulitem {
  display: none;
  position: absolute;
  top: 0px;
  left: 100px;
  z-index: 99;
  width: 200px;
  height: 200px;
  opacity: 1;
}
</style>
<script>
export default {
  name: 'Submenu'
}
</script>