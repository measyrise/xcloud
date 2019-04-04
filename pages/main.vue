<template>
  <div class="main">
    <xlgrid border="1px">
      <xlrow h="100%" border="1px">
        <xlcol w="200px" border="1px"></xlcol>
        <xlcol w="100%" border="1px"></xlcol>
      </xlrow>
    </xlgrid>
  </div>
</template>

<script>
import { xlgrid, xlrow, xlcol } from '../components/layouts/xgrid/xgrid.js'

export default {
  components: { xlgrid, xlrow, xlcol }
}
</script>

<style lang="scss" scoped>
</style>
