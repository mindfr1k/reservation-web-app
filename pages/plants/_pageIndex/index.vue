<template>
  <div>
    <div class="row">
      <div class="col s12 m10 l10">
        ТЕСТ РАСТЕНИЙ
      </div>
      <div class="col s12 m2 l2 hide-on-small-only">
        <SideCategories />
      </div>
    </div>
  </div>
</template>

<script>
import SideCategories from '@/components/SideCategories';

export default {
  components: {
    SideCategories
  }
}
</script>