<template>
	<div class="app">
		<!-- Sidebar -->
		<NavBar/>

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>

import NavBar from './components/NavBar.vue'
</script>
