<template>
  <div class="container">
    <div class="header text-center mt-4">
      <h1>WEATHER APP</h1>
      <div class="search-bar my-3">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="form-control d-inline-block w-auto me-2"
        />
        <button @click="searchByCity" class="btn btn-secondary">
          Search
        </button>
      </div>
    </div>
    <main>
      <div v-if="weatherData" class="text-center mt-4">
        <h2>
          {{ weatherData.name }}, {{ weatherData.sys.country }}
        </h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
      <div v-else class="text-center mt-4">
        <p>Please enter a city and click Search.</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";

const apikey = "ac30d164579550335464c5f771315894"; //  openweathermap API key
const city = ref("");
const weatherData = ref(null);

const temperature = computed(() =>
  weatherData.value ? (weatherData.value.main.temp - 273.15).toFixed(2) : null
);

const iconUrl = computed(() =>
  weatherData.value
    ? `http://openweathermap.org/img/w/${weatherData.value.weather[0].icon}.png`
    : null
);

const searchByCity = async () => {
  if (!city.value) return;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apikey}`;
  try {
    const response = await axios.get(url);
    weatherData.value = response.data;
  } catch (error) {
    weatherData.value = null;
    alert("City not found or API error.");
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-input {
  flex: 1;
  margin-right: 10px;
}

.search-button {
  padding: 10px 20px;
}

main {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
}

img {
  width: 100px;
  height: 100px;
}

span {
  display: block;
  margin-top: 10px;
  font-size: 18px;
}
</style>