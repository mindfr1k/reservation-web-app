<template>
  <div>
    <div class="row">
      <div class="col s12 m12 hide-on-large-only">
        <form>
          <p class="col s4 m4" v-for="(category, index) in $store.state.reservationCategories" 
          :key="category.title">
            <input type="radio"
            v-model="picked"
            :id="`${category.title}-small`" 
            :value="`${category.title}-small`"
            @click="filterCheckedPolygons(index)" />
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
            <input type="radio" 
            v-model="picked"
            :id="category.title" 
            :value="category.title"
            @click="filterCheckedPolygons(index)" />
            <label :for="category.title">
              <i class="material-icons left">{{ category.icon }}</i>
              <span>{{ category.title }}</span>
            </label>
          </p>
        </form>
      </div>
    </div>

    <InfoModal v-if="showInfoModal"
    :type="$store.state.checkedPolygons[0].type"
    :content="content"
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
      showInfoModal: false,
      content: [],
      picked: [],
      isChecked: false
    }
  },
  methods: {
    filterCheckedPolygons(index) {
      this.$store.dispatch('filterCheckedPolygons', index)
      //this.$store.dispatch('showZonePolylines')
    },
    createInfoModal(event) {
      this.content = event
      this.showInfoModal = true
    }
  }
}
</script>

<style scoped>
  [type="radio"]:checked+label:after, [type="radio"].with-gap:checked+label:after {
    background-color: #ffab40;
    border: 2px solid #ffab40;
  }
  label {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }
</style>