<template>
  <v-main class="content"
    style="background-color: #f0eded; top: 64px; left: 300px; padding: 0; height:1200px; width: 100%;">
    <h2 class="main-text">Расчетный лист</h2>
    <div class="container" style="display: grid; grid-template-columns: repeat(5, 200px); grid-column-gap: 20px;">
      <div style="width: 200px; position: relative; margin-left:100px ; margin-top: 50px;">

        <div style="width: 50px; height: 50px; border-radius: 50%; background-color: #00FF00; display: flex; justify-content: center; align-items: center; position: absolute;
      bottom:80px; z-index: 5; left: 10px;">
          <v-icon color="white" icon="mdi-plus" size="large"></v-icon>
        </div>
        <v-card text="Начислено:"
          style="width: 200px; height: 100px; border-radius: 10px; padding-top: 15px;color:#696969; font-weight: 600;">
          <v-text style="margin-left: 15px; color: black; font-weight: 800;">1632,42 руб</v-text>
        </v-card>
      </div>

      <div style="width: 200px; position: relative; margin-left:100px ; margin-top: 50px;">

        <div style="width: 50px;
        height: 50px; border-radius: 50%; background-color: #EA565C; display: flex; justify-content: center; align-items: center; position: absolute;
      bottom:80px; z-index: 5; left: 10px;">
          <v-icon color="white" icon="mdi-minus" size="large"></v-icon>
        </div>
        <v-card text="Удержано:"
          style="width: 200px; height: 100px; border-radius: 10px; padding-top: 15px;color:#696969; font-weight: 600;">
          <v-text style="margin-left: 15px; color: black; font-weight: 800;">1632,42 руб</v-text>
        </v-card>
      </div>
      <div style="width: 200px; position: relative; margin-left:100px ; margin-top: 50px;">
        <div style="width: 50px;
        height: 50px; border-radius: 50%; background-color: #2B48C9; display: flex; justify-content: center; align-items: center; position: absolute;
      bottom:80px; z-index: 5; left: 10px;">
          <v-icon color="white" icon="mdi-check" size="large"></v-icon>
        </div>
        <v-card text="Итого:"
          style="width: 200px; height: 100px; border-radius: 10px; padding-top: 15px; color:#696969; font-weight: 600;">
          <v-text style="margin-left: 15px; color: black; font-weight: 800;">1632,42 руб</v-text>
        </v-card>
      </div>
      <div style="width: 200px; position: relative; margin-left:100px ; margin-top: 50px;">
        <div style="width: 50px;
        height: 50px; border-radius: 50%; background-color: #63A1FF; display: flex; justify-content: center; align-items: center; position: absolute;
      bottom:80px; z-index: 5; left: 10px;">
          <v-icon color="white" icon="mdi-arrow-right" size="large"></v-icon>
        </div>
        <v-card text="Аванс:"
          style="width: 200px; height: 100px; border-radius: 10px; padding-top: 15px; color:#696969; font-weight: 600;">
          <v-text style="margin-left: 15px; color: black; font-weight: 800;">1632,42 руб</v-text>
        </v-card>
      </div>
      <div style="width: 200px; position: relative; margin-left:100px ; margin-top: 50px;">
        <div style="width: 50px;
        height: 50px; border-radius: 50%; background-color: #2D5DEE; display: flex; justify-content: center; align-items: center; position: absolute;
      bottom:80px; z-index: 5; left: 10px;">
          <v-icon color="white" icon="mdi-arrow-down" size="large"></v-icon>
        </div>
        <v-card text="Выплата:"
          style="width: 200px; height: 100px; border-radius: 10px; padding-top: 15px; color:#696969; font-weight: 600;">

          <v-text style="margin-left: 15px; color: black; font-weight: 800;">1632,42 руб</v-text>

        </v-card>
      </div>
    </div>
    <div
      style="margin-right: 250px ; margin-top: 50px; display: flex; justify-content: center; align-items: center; flex-direction: row;">
      <v-card class="mx-auto" style="width: 1080px; border-radius: 10px;">
        <v-card-actions>
          <v-btn color="black" variant="text">
            Подробнее
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn :icon="show4 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show4 = !show4"></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show4">
            <v-divider></v-divider>
            <v-card-text>
              <div class="top-block"
                style="display: flex; justify-content: space-between; align-items: center; width: 1050px; margin-bottom: 20px;">
                <div class="total"
                  style="display: flex; justify-content: space-between; align-items: center; width: 500px;">
                  <p>Итого начислено с начала года:</p>
                  <span><b style="color: black; font-size: 14px;">0000.00 руб</b></span>
                </div>
                <v-btn style="text-transform:inherit; color: blue;">Скачать расчетный лист ⤓</v-btn>
              </div>
              <div class="down-block"
                style="display: flex;  justify-content: space-around; width: 1050px; margin-bottom: 30px;">
                <div class="left-block"
                  style="display: flex; justify-content: space-between; align-items: center; width: 200px;">
                  <div class="left-content">
                    <p>Устан. оклад:</p>
                    <p>Оклад по ШР:</p>
                    <p>Оклад по ТС:</p>
                  </div>
                  <div class="right-content">
                    <p><b style="color: black; font-size: 14px;">0000,00 руб</b></p>
                    <p><b style="color: black; font-size: 14px;">0000,00 руб</b></p>
                    <p><b style="color: black; font-size: 14px;">0000,00 руб</b></p>
                  </div>
                </div>
                <div class="center-block"
                  style="display: flex; justify-content: space-between; align-items: center; width: 300px;">
                  <div class="left-content">
                    <p>ТС:</p>
                    <p>По контракту:</p>
                  </div>
                  <div class="right-content">
                    <p><b style="color: black; font-size: 14px;">30%</b></p>
                    <p><b style="color: black; font-size: 14px;">45%</b></p>
                  </div>
                </div>
                <div class="second-center-block"
                  style="display: flex; justify-content: space-between; align-items: center; width: 250px;">
                  <div class="left-content">
                    <p>План дни (часы):</p>
                    <p>Рабочие дни (часы):</p>
                  </div>
                  <div class="right-content">
                    <p><b style="color: black; font-size: 14px;">19 (150.75)</b></p>
                    <p><b style="color: black; font-size: 14px;">19 (150.75)</b></p>
                  </div>
                </div>
                <div class="right-block"
                  style="display: flex; justify-content: space-between; align-items: center; width: 200px;">
                  <div class="left-content">
                    <p>Льготы:</p>
                    <p>Иждевенцы:</p>
                  </div>
                  <div class="right-content">
                    <p><b style="color: black; font-size: 14px;">Нет</b></p>
                    <p><b style="color: black; font-size: 14px;">Нет</b></p>
                  </div>
                </div>
              </div>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
    <div
      style="margin-right: 250px ; margin-top: 50px; display: flex; justify-content: center; align-items: center; flex-direction: row;">
      <v-card class="mx-auto" style="width: 1080px; border-radius: 10px;">
        <v-card-actions>
          <v-btn color="black" variant="text">
            Начисления
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn :icon="show5 ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show5 = !show5"></v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show5">
            <v-divider></v-divider>
            <v-card-text>
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="text-left">
                      Код
                    </th>
                    <th class="text-left">
                      Дата кода
                    </th>
                    <th class="text-left">

                    </th>
                    <th class="text-left">
                      Сумма
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in table" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.date }}</td>
                    <td>{{ item.text }}</td>
                    <td>{{ item.sum }}</td>
                  </tr>
                </tbody>
              </v-table>
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>






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

      tab: 'Appetizers',
      items: [
        'Образование', 'Замещение', 'Перемещение', 'Поощерения', "Нарушения", "Профсоюз",
      ],

      desserts: [
        {
          data: '01.01.2021',
          document: 'Диплом',
          number: "И№2565987",
          level: "высшее",
          kvalification: "инженер-программист",
          discharge: " ",
          speciality: "программное обеспечение информационных технологий",
          formEducation: "Заочное",
          institution: "БЕЛОРУССКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ ИНФОРМАТИКИ И РАДИОЭЛЕКТРОНИКИ"
        },

      ],

      show4: false,
      show5: false,
      table: [
          {
            name: '14',
            date: "01.04.2023",
            text: 'Оплата по окладам',
            sum: '0000,00 руб'
          },
          {
            name: '14',
            date: "01.04.2023",
            text: 'Дополн. мера мат. стимулированияв виде повышения тариф. ставки (оклада) по контракту',
            sum: '0000,00 руб'
          },
        ]

    }
  },
}
</script>
<style>
menu {
  color: darkblue;
}
</style>

