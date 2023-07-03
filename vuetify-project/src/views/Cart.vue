<template>
    <v-main class="content"
        style="background-color: #f0eded; top: 64px; left: 300px; padding: 0; height:1200px; width: 100%;">
        <h2 class="main-text">Личная карточка</h2>
        <v-card color="basil" style="width: 1120px; margin-left: 50px; margin-top: 20px; border-radius: 10px;">


            <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
                <v-tab v-for="item in items" :key="item" :value="item" style="width: 70px;">
                    {{ item }}
                </v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item v-for="item in items" :key="item" :value="item">
                    <v-card color="basil" flat>
                        <v-table>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Наименование материала
                                    </th>
                                    <th class="text-left">
                                        Кол-во/Ед.
                                    </th>
                                    <th class="text-left">
                                        Дата получения
                                    </th>
                                    <th class="text-left">
                                        Код материала
                                    </th>
                                    <th class="text-left">
                                        Код кладовой
                                    </th>
                                    <th class="text-left">
                                        Примечания
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in desserts" :key="item.name" style="text-transform: uppercase; ">
                                    <td >{{ item.name }}</td>
                                    <td>{{ item.number }}</td>
                                    <td>{{ item.data }}</td>
                                    <td>{{ item.first_kod }}</td>
                                    <td>{{ item.second_kod }}</td>
                                    <td>{{ item.text }}</td>
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
            tab: 'Appetizers',
            items: [
                'Инструмент/Инвентарь', 'Материалы', 'Спецодежда', 'Оборудование', 'Корпоративный номер'
            ],
            desserts: [
                {
                    name: 'Монитор philips 243v7qdsb',
                    number: '1 шт',
                    data: '19.08.2022',
                    first_kod: '000000',
                    second_kod:'111111',
                    text: ''
                },
                {
                    name: 'Фильтр сетевой пилот',
                    number: '1 шт',
                    data: '10.08.2022',
                    first_kod: '000000',
                    second_kod:'111111',
                    text: ''
                },
                {
                    name: 'Аппарат телеф фаэтон-221/х аон',
                    number: '1 шт',
                    data: '10.08.2022',
                    first_kod: '000000',
                    second_kod:'111111',
                    text: ''
                },
                {
                    name: 'Тумба выкатная',
                    number: '1 шт',
                    data: '31.08.2022',
                    first_kod: '000000',
                    second_kod:'111111',
                    text: ''
                },
                {
                    name: 'Кресло офисное менеджер',
                    number: '1 шт',
                    data: '04.08.2022',
                    first_kod: '000000',
                    second_kod:'111111',
                    text: ''
                }
            ],
        }
    },
}
</script>