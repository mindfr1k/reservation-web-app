<template>
  <div>
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
        <form>
          <p class="col s4 m4" v-for="(category, index) in $store.state.reservationCategories" 
          :key="category.title">
            <input type="checkbox" :id="`${category.title}-small`" @click="filterCheckedPolygons(index)" />
            <label :for="`${category.title}-small`">
              <i class="material-icons center">{{ category.icon }}</i>
              <span>{{ category.title }}</span>
            </label>
          </p>
        </form>
      </div>

      <div class="col s12 m12 l10">
        <RegionsMap 
        @invoke="createInfoModal"/>
      </div>

      <div class="col l2 hide-on-med-and-down">
        <form>
          <p v-for="(category, index) in $store.state.reservationCategories" :key="category.title">
            <input type="checkbox" :id="category.title" @click="filterCheckedPolygons(index)" />
            <label :for="category.title">
              <i class="material-icons left">{{ category.icon }}</i>
              <span>{{ category.title }}</span>
            </label>
          </p>
        </form>
      </div>
    </div>

    <InfoModal v-if="showInfoModal"
    @close="showInfoModal = false" />
  </div>
</template>

<script>
import RegionsMap from '@/components/RegionsMap'
import InfoModal from '@/components/InfoModal'

export default {
  components: {
    RegionsMap,
    InfoModal
  },
  data() {
    return {
      showInfoModal: false
    }
  },
  methods: {
    filterCheckedPolygons(index) {
      this.$store.dispatch('filterCheckboxes', index)
      this.$store.dispatch('filterCheckedPolygons')
      this.$store.dispatch('filterZonePolylines')
    },
    createInfoModal() {
      console.log('works!')
      this.showInfoModal = true
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