// components/MachineLearning.vue
<template>
  <div>
    <h2>Machine Learning</h2>
    <div>
      <label for="inputValue">Input Value:</label>
      <input type="number" id="inputValue" v-model="inputValue" />
      <button @click="predictOutput">Predict</button>
    </div>
    <div v-if="predictedOutput !== null">
      <p>Predicted Output: {{ predictedOutput }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 0,
      predictedOutput: null,
    };
  },
  methods: {
    predictOutput() {
      // Basic "machine learning" model (linear function)
      const predictedValue = this.inputValue * 2;

      this.predictedOutput = predictedValue;
    },
  },
};
</script>

<style scoped>
/* Add your machine learning component styles here */
label {
  font-weight: bold;
  margin-right: 10px;
}

input {
  width: 80px;
  padding: 5px;
}

button {
  padding: 5px 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
