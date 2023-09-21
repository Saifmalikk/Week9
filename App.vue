<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
    </header>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/dashboard">Dashboard</router-link></li>
        <li><router-link to="/dashboard/charts">Charts</router-link></li>
        <li><router-link to="/dashboard/map">Map</router-link></li>
        <li><router-link to="/dashboard/chat">Chat</router-link></li>
        <li><router-link to="/dashboard/machine-learning">Machine Learning</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'My Learning Journey as a Full-Stack Developer',
      message: 'This website tracks my progress as I learn new skills and complete projects.',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  text-align: center;
  padding: 20px;
}

header {
  background-color: #3498db;
  color: #fff;
  padding: 20px;
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
}

header p {
  font-size: 1.2rem;
  margin: 0;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #3498db;
}
</style>
