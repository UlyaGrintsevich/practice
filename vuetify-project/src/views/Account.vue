<template>
    <v-main class="content" style="background-color: #f0eded; top: 64px; left: 300px; padding: 0; height:100vh; width: 100%;">
        <h2 class="main-text">Главная</h2>
        <v-div class="carts" style="display: grid; grid-template-columns: repeat(2, 300px);
grid-template-rows: repeat(2, 132px); grid-column-gap: 30px; grid-row-gap: 20px; margin-left: 100px;">
            <v-card title="Заявки" subtitle="Перейти в раздел заявок" text="" style=" margin-top: 10px; width: 300px;">
                <v-card-actions>
                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-microsoft"></v-btn>
                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-printer"></v-btn>
                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-wrench"></v-btn>
                    <v-btn size="small" color="surface-variant" variant="text" icon=" mdi mdi-arrow-right"
                        style="margin-left: 100px;"></v-btn>
                </v-card-actions>
            </v-card>
            <v-card title="История" subtitle="Сводка по заявкам" text="" style=" margin-top: 10px; width: 300px;">
                <v-card-actions>
                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-history"></v-btn>
                    <v-btn size="small" color="surface-variant" variant="text" icon=" mdi mdi-arrow-right"
                        style="margin-left: 200px;"></v-btn>
                </v-card-actions>
            </v-card>
            <v-card title="Тех. поддержка IT.kali" subtitle="Вопросы по сайту" text=""
                style=" margin-top: 10px; width: 300px;">
                <v-card-actions>
                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-comment-multiple-outline"></v-btn>
                    <v-btn size="small" color="surface-variant" variant="text" icon=" mdi mdi-arrow-right"
                        style="margin-left: 200px;"></v-btn>
                </v-card-actions>
            </v-card>
            <v-card title="Контакты" subtitle="Список избранного" text="" style=" margin-top: 10px; width: 300px;">
                <v-card-actions>
                    <v-btn size="small" color="surface-variant" variant="text" icon="mdi-account-multiple"></v-btn>
                    <v-btn size="small" color="surface-variant" variant="text" icon=" mdi mdi-arrow-right"
                        style="margin-left: 200px;"></v-btn>
                </v-card-actions>
            </v-card>
        </v-div>
        <v-container>
      <v-row justify="space-around">
        <v-date-picker elevation="24"></v-date-picker>
      </v-row>
    </v-container>
    </v-main>
</template>

<script>
export default  {

}
</script>
<style>


.content {
  position: relative;
  border-radius: 50px;

}
.main-text{
  margin-left: 100px;
padding-top: 50px;
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