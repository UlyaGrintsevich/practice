<template>
  <v-main class="content"
    style="background-color: #f0eded; top: 64px; left: 300px; padding: 0; height:1200px; width: 100%;">
    <h2 class="main-text">Обо мне</h2>
    <v-div class="about-container" style="display: flex; flex-direction: row; ">

      <v-card class="about">
        <div class="container" style="  display: flex;
       justify-content: space-between; height: 200px;">
          <figure style="display: flex; flex-direction: row; margin-left: 20px; margin-top: 20px;">
            <img src="../image/user.png" style="width: 150px;
          height: 150px;" />
            <figcaption style="height: 150px; padding-top: 20px;">
              <v-title style="font-size: 18px;">Иванов Иван Иванович</v-title>
              <br>
              <v-subtitle style="font-size: 14px;">@000000</v-subtitle>
              <br>
              <br>
              <v-span>Инженер-программист <br> ОРИТСУП</v-span>
            </figcaption>
          </figure>
          <div style="margin-top: 20px; margin-left: 100px;">
            <v-btn class="ma-2" color="blue" icon="mdi-border-color" style="width: 35px;
        height: 35px;"></v-btn>
          </div>
        </div>
        <div class="info">
          <div class="contacts" style="margin-left: 50px;">
            <h5 style="font-weight: 400; font-size: 21px; margin-bottom:20px ;">Контактная информация</h5>
            <div class="work-phone" style="display: grid;
             grid-template-columns: repeat(2, 220px);
             grid-template-rows: repeat(2, 50px); grid-column-gap: 120px; grid-row-gap: 20px;">
              <div>
                <p style="font-size: 12px;">Рабочий телефон</p>
                <div style="display: flex; flex-direction: row; align-items: center;">
                  <br>
                  <v-icon icon="mdi-phone" size="small"></v-icon>

                  <p>+375(29)1111111</p>
                </div>
              </div>
              <div>
                <p style="font-size: 12px;">Мобильный телефон</p>
                <div style="display: flex; flex-direction: row; align-items: center;">
                  <br>
                  <v-icon icon="mdi-phone" size="small"></v-icon>

                  <p>+375(29)1111111</p>
                </div>
              </div>
              <div>
                <p style="font-size: 12px;">Местоположение (кабинет)</p>
                <div style="display: flex; flex-direction: row; align-items: center;">
                  <br>
                  <v-icon icon="mdi-map-marker" size="small"></v-icon>

                  <p>УИТ 222</p>
                </div>


              </div>


            </div>

          </div>

        </div>

      </v-card>
      <div>

        <v-form style="width: 550px; background-color: #ffffff; border-radius: 10px;">
          <v-container fluid>
            <v-row>
              <v-col sm="7">
                <p>Индентификационный номер</p>
                <v-text-field v-model="passport" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1"
                  hint="At least 12 characters" counter @click:append="show1 = !show1" autocomplete="off" variant="solo" style="height: 50px;"></v-text-field>
              </v-col>
              <v-col sm="5">
                <p>Серия</p>
                <v-text-field v-model="seria" :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]" :type="show3 ? 'text' : 'password'" name="input-10-1"
                  hint="At least 12 characters" counter @click:append="show3 = !show3" variant="solo"></v-text-field>
              </v-col>
            </v-row>
            <v-col sm="13">
              <p>Кем выдан</p>
              <v-text-field v-model="location" variant="solo"></v-text-field>
            </v-col>
            <v-col sm="13">
              <p>Дата выдачи</p>
              <v-text-field v-model="data" variant="solo"></v-text-field>
            </v-col>
            <v-row>
              <v-col sm="7">
                <p>Семейное положение</p>
                <v-text-field v-model="status" variant="solo"></v-text-field>
              </v-col>
              <v-col sm="5">
                <p>Дети</p>
                <v-text-field v-model="children" variant="solo"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
    </v-div>
    <v-card color="basil" style="width: 1120px; margin-left: 50px; margin-top: 20px; border-radius: 10px;">
 

    <v-tabs
      v-model="tab"
      bg-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :value="item"
      
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item
        v-for="item in items"
        :key="item"
        :value="item"
        
      >
        <v-card
          color="basil"
          flat
        >
        <v-table height="300px">
    <thead>
      <tr>
        <th class="text-left">
          Дата
        </th>
        <th class="text-left">
         Тип документа
        </th>
        <th class="text-left">
         Номер
        </th>
        <th class="text-left">
        Уровень
        </th>
        <th class="text-left">
        Квалификация
        </th>
        <th class="text-left">
       Специальность
        </th>
        <th class="text-left">
        Разряд
        </th>
        <th class="text-left">
        Форма обучения
        </th>
        <th class="text-left">
       Учебное заведение
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.data}}</td>
        <td>{{ item.document }}</td>
        <td>{{ item.number }}</td>
        <td>{{ item.level }}</td>
        <td>{{ item.kvalification }}</td>
        <td>{{ item.speciality }}</td>
        <td>{{ item.discharge }}</td>
        <td>{{ item.formEducation }}</td>
        <td>{{ item.institution }}</td>
      </tr>
    </tbody>
  </v-table>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>

  </v-main>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show3: false,
      show2: true,
      passport: 12345678910,
      seria: 123456,
      location: "Солигорский РОВД Минской области",
      data: '01.01.2021',
      status: 'Не женат',
      children: 'Нет',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
      tab: 'Appetizers',
        items: [
          'Образование', 'Замещение', 'Перемещение', 'Поощерения' , "Нарушения" , "Профсоюз",
        ],

        desserts: [
          {
            data: '01.01.2021',
            document: 'Диплом',
            number: "И№2565987",
            level: "высшее",
            kvalification: "инженер-программист", 
            discharge:" ",
            speciality: "программное обеспечение информационных технологий",
            formEducation:"Заочное",
            institution: "БЕЛОРУССКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИНФОРМАТИКИ И РАДИОЭЛЕКТРОНИКИ"
          },
          
        ],
    }
  },
}
</script>

<style lang="css" >
.content {
  position: relative;
  border-radius: 50px;

}

.about {
  width: 550px;
  height: 400px;
  border-radius: 10px;
  margin-left: 50px;
  display: flex;
  margin-right: 20px;
  flex-direction: column;
}

.main-text {
  margin-left: 50px;

  padding-top: 50px;
  font-family: 'Kanit', sans-serif;
  font-size: 36px;
  font-weight: 600;
}

v-title {
  font-weight: 800;
  letter-spacing: 1.5px;
  font-size: 24px;
}


v-input{
  height: 30px;
  align-items: center;
}
</style>