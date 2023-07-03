<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer v-model="drawer" style="border:none; width: 20%;     ">
      <div class="title">
        <h2><b>IT.</b>kali</h2>
      </div>
      <v-list v-model:opened="open">
        <v-list-group value="Admin">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" class="item" prepend-icon="mdi-account" title="Личный кабинет"></v-list-item>
          </template>
          <router-link to="/" style="text-decoration: none; color:black">
            <v-list-item class="item" title="Главная" ></v-list-item>
          </router-link>
          <router-link to="/AboutMe" style="text-decoration: none;color:black">
            <v-list-item class="item" title="Обо мне"></v-list-item>
          </router-link>
          <router-link to="/List" style="text-decoration: none;color:black">
            <v-list-item class="item" title="Расчетный лист"></v-list-item>
          </router-link>
          <router-link to="/Cart" style="text-decoration: none;color:black">
            <v-list-item class="item" title="Личная карточка"></v-list-item>
          </router-link>
          <router-link to="/Sistem" style="text-decoration: none;color:black">
            <v-list-item class="item" title="Пропускная система"></v-list-item>
          </router-link>
    
        </v-list-group>
        <v-list-item class="item" prepend-icon="mdi-bank" title="Социальные услуги"></v-list-item>
        <v-list-item class="item" prepend-icon="mdi-clipboard" title="Мое рабочее место"></v-list-item>
        <v-list-item class="item" prepend-icon="mdi-note-text" title="Заявки"></v-list-item>
        <v-list-item class="item" prepend-icon="mdi-car" title="Транспорт"></v-list-item>
        <v-list-item class="item" prepend-icon="mdi-google-circles-communities" title="Охрана труда"></v-list-item>
        <v-list-item class="item" prepend-icon="mdi-format-align-justify" title="Администрирование"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="white" style=" display: flex;
         align-items: center;
         justify-content: space-between; overflow: hidden; left: 300px; box-shadow: none; width: 100%; ">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-combobox class="input" style="margin-left: 50px; margin-top: 30px; font-size: 14px;  padding: 0;"
        label="Поиск по личному кабинету"
        :items="['Личный кабинет', 'Социальные услуги', 'Мое рабочее место', 'Заявки', 'Транспорт', 'Охрана труда', 'Администрирование']"
        variant="solo-filled"></v-combobox>
      <v-div style="margin-left: 10px;">
        <v-btn size="small" color="surface-variant" variant="text" icon="mdi mdi-arrow-top-left"></v-btn>
        <v-span style="font-size: 14px; color: #f0eded;">Главная</v-span>
      </v-div>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
  }),


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;600&display=swap');

.v-navigation-drawer__content {
  overflow-x: hidden;
  overflow-y: hidden;
}

.title {
  height: 64px;
}

h2 {
  margin-left: 25px;
  margin-top: 15px;
  font-family: 'Kanit', sans-serif;
  font-size: 36px;
  font-weight: 600;
}

b {
  color: blue;
  font-family: 'Kanit', sans-serif;
  font-size: 36px;
  font-weight: 600;
}
</style>