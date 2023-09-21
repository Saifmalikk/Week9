<template>
  <div>
    <h2>Welcome to My Learning Journey</h2>
    <p>{{ welcomeMessage }}</p>
    <div class="cta-buttons">
      <router-link to="/courses" class="cta-button">View Courses</router-link>
      <router-link to="/projects" class="cta-button">View Projects</router-link>
      <router-link to="/skills" class="cta-button">View Skills</router-link>
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
h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
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
