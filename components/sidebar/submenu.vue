<template>
  <li>
    <a>
      <slot name="title"></slot>
    </a>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'Submenu'
}
</script>