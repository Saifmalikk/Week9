<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Welcome to My Learning Journey</h1>
      <p>{{ welcomeMessage }}</p>
    </div>
    <div class="cta-section">
      <router-link to="/dashboard" class="cta-button">Explore Dashboard</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      welcomeMessage: 'This website tracks my progress as I learn new skills and complete projects.',
    };
  },
};
</script>

<style scoped>
/* Home container styles */
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

/* Hero section styles */
.hero-section {
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

/* CTA (Call to Action) button styles */
.cta-section {
  text-align: center;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #2980b9;
}
</style>
