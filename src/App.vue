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
}

.nav li {
  margin: 0 10px;
}

.nav-link {
  font-size: 16px;
  font-weight: 600;
  display: block;
  color: white; 
  padding: 5px 15px;
  text-decoration: none;
  transition: 0.5s;
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
}

.nav-link:hover {
  color: white; 
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
}

.nav-link.active {
  color: white; 
  font-weight: 700;
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
}

.form-check-input:checked {
  background-color: #a30311; 
  border-color: #a30311; 
}
</style>
