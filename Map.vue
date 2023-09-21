<template>
  <div>
    <h2>Location Map</h2>
    <div ref="map" style="width: 100%; height: 400px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      // Create a new Google Map instance and set its options
      this.map = new window.google.maps.Map(this.$refs.map, {
        center: { lat: 40.7128, lng: -74.0060 }, // Set the initial map center (New York City)
        zoom: 12, // Set the initial zoom level
      });
    },
  },
};
</script>

<style scoped>
/* Add your map component styles here */
</style>
