<template>
  <div>
    <h2>Dashboard</h2>
    <!-- Include various widgets or components here -->
    <div class="dashboard-widgets">
      <router-link to="/dashboard/charts" class="widget">
        <h3>Charts</h3>
        <p>View interactive charts and graphs</p>
      </router-link>
      <router-link to="/dashboard/map" class="widget">
        <h3>Map</h3>
        <p>Explore interactive maps</p>
      </router-link>
      <router-link to="/dashboard/chat" class="widget">
        <h3>Chat</h3>
        <p>Engage in real-time chat</p>
      </router-link>
      <router-link to="/dashboard/machine-learning" class="widget">
        <h3>Machine Learning</h3>
        <p>Try out machine learning models</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Style for the Dashboard widgets */
.dashboard-widgets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.widget {
  background-color: #f7f7f7;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
}

.widget h3 {
  font-size: 1.5rem;
  margin: 0;
}

.widget:hover {
  background-color: #3498db;
  color: #fff;
}
</style>
