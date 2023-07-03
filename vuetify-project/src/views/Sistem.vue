<template>
  <v-main class="content"
    style="background-color: #f0eded; top: 64px; left: 300px; padding: 0; height:1200px; width: 100%;">
    <h2 class="main-text">Пропускная система</h2>
    <v-table style="width: 650px; margin-left:100px ; margin-top: 20px;">
    <thead>
      <tr>
   
        <th class="text-left">
         Время
        </th>
        <th class="text-left">
          Место
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >

    
        <td>{{ item.name }}</td>
        <td>{{ item.text }}</td>
      </tr>
    </tbody>
  </v-table>
  <v-table style="width: 650px; margin-left:100px ; margin-top: 20px; border-radius: none;">
    
    <tbody>
      <tr
        v-for="item in table"
        :key="item.name"
      >


        <td>{{ item.name }}</td>
        <td>{{ item.time }}</td>
      </tr>
    </tbody>
  </v-table>1
    </v-main>
</template>
<script>

 export default {


    data () {
      return {
        desserts: [
          {

            name: '08:47:31',
            text: 'Вход в УИТ Считыватель №1',
          },
          {
            name: '09:56:28',
            text: 'Выход УИТ Считыватель №2',
          },
          {
            name: '10:00:03',
            text: "Вход ИЛК турникет №1 Считыватель №1",
          }
        ],
        table: [
          {

            name: 'Начало рабочего дня',
            time: '08:48',
          },
          {
            name: 'Конец рабочего дня',
            time: '18:03',
          }
        ],

      }
    },
  }
</script> 
