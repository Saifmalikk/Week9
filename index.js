import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import Chat from '../components/Chat.vue';
import MachineLearning from '../components/MachineLearning.vue';
import Map from '../components/Map.vue';

const routes = [
  { path: '/', component: Home },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      { path: '', redirect: 'charts' }, // Redirect to the charts sub-route
      { path: 'charts', component: Visualization }, // Replace Visualization with your chart component
      { path: 'map', component: Map }, // Add the Map route
      { path: 'chat', component: Chat }, // Add the Chat route
      { path: 'machine-learning', component: MachineLearning }, // Add the Machine Learning route
    ],
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
