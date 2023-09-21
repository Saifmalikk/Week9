<template>
  <div class="map-container">
    <h2>Map View</h2>
    <div ref="map" class="map"></div>
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
      // Replace with your Google Maps API key
      const apiKey = 'YOUR_API_KEY';

      // Load the Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.defer = true;
      script.async = true;

      // Handle script onload event
      script.onload = () => {
        this.map = new google.maps.Map(this.$refs.map, {
          center: { lat: 40.7128, lng: -74.0060 }, // Initial map center (New York City)
          zoom: 12, // Initial zoom level
        });
      };

      // Append the script to the document
      document.head.appendChild(script);
    },
  },
};
</script>

<style scoped>
/* Map container styles */
.map-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Map styles */
.map {
  width: 100%;
  height: 400px;
  margin-top: 20px;
}
</style>
