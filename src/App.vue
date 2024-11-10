<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid p-4">
    <header class="mb-4 text-center position-relative">
      <h1 class="display-3">
        <span class="led-title">Kosárlabdázók</span>
      </h1>

      <div class="separator"></div> 

      <ul class="nav justify-content-center mb-4">
        <li>
          <RouterLink
            to="/"
            :class="{ active: $route.path === '/' }"
            class="nav-link led-link"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/table"
            :class="{ active: $route.path === '/table' }"
            class="nav-link led-link"
          >
            Táblázat
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/cards"
            :class="{ active: $route.path === '/cards' }"
            class="nav-link led-link"
          >
            Kártyák
          </RouterLink>
        </li>
      </ul>
    </header>
    <RouterView />
  </div>
</template>

<style>
body {
  background: var(--bg-black-100);
  height: 100%;
  user-select: none;
  color: #a30311; 
}

.separator {
  height: 5px; 
  width: 100%; 
  margin: 20px 0;
  background: linear-gradient(90deg, #ff4d4d, #ff0000, #a30311);
  border-radius: 5px; 
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 0, 0, 0.5); 
}

@keyframes glow {
  0% {
    opacity: 0.5; 
  }
  100% {
    opacity: 1; 
    transform: scale(1.05); 
  }
}

header {
  position: relative;
}

.display-3 {
  font-weight: 400;
  position: relative;
}

.led-title {
  display: inline-block;
  position: relative;
  color: white; 
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
}

.nav {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.nav li {
  margin: 0 15px;
}

.nav-link {
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  background-color: #a30311;
  border-radius: 30px;
  transition: 0.3s;
  box-shadow: 0 0 15px rgba(163, 3, 17, 0.5);
}

.nav-link:hover {
  background-color: #d32f2f;
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(163, 3, 17, 0.7), 0 0 40px rgba(163, 3, 17, 0.3);
}

.nav-link.active {
  background-color: #d32f2f;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 0 20px rgba(211, 47, 47, 0.8), 0 0 30px rgba(211, 47, 47, 0.5);
}

.form-check-input:checked {
  background-color: #a30311; 
  border-color: #a30311; 
}
</style>