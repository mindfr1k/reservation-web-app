<template>
  <div>
    <div class="row">
      <div class="col s12 m10 l10">
        <RegionsMap />
      </div>
      <div class="col m2 l2 hide-on-small-only">
        <form>
          <p v-for="(category, index) in $store.state.reservationCategories" :key="category.title">
            <input type="checkbox" :id="category.title" @change="filterCheckedPolygons(index)" />
            <label :for="category.title">
              <i class="material-icons left">{{ category.icon }}</i>
              <span>{{ category.title }}</span>
            </label>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import RegionsMap from '@/components/RegionsMap';

export default {
  components: {
    RegionsMap
  },
  methods: {
    filterCheckedPolygons(index) {
      this.$store.dispatch('filterCheckboxes', index)
      this.$store.dispatch('filterCheckedPolygons')
      console.log(this.$store.state.checkedPolygons)
    }
  }
}
</script>

<style scoped>
  [type="checkbox"]:checked+label:before {
    border-right: 2px solid #ffab40;
    border-bottom: 2px solid #ffab40; 
  }
  label {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
</style>