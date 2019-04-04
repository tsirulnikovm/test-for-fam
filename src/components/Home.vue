<template>
    <div>
      <h1>Просто герой</h1>
      <p class="slogan">
          Главные новости о событиях в России: комментарии, мнения, интервью, аналитические материалы. Последние актуальные новости Российской Федерации.
      </p>

          <router-link :to="'/news/'+one.id" class="news-wrap"  v-for="(one, index) in news">
              <div class="date-wrap">
                  <span class="time">{{ one.contentUpdated.date | moment }}</span>
                  <span class="date">{{ one.dateTpl }}</span>
              </div>
              <div class="thumb" :style="{ 'background-image': 'url(' + one.mainImageLink.thumbnail + ')' }"></div>
              <div class="news">
                  <h4>{{ one.mainCatTitle }}</h4>
                  <h3 v-if="one.clearTitle.length<130">{{ one.clearTitle }}</h3>
                  <h3 v-if="one.clearTitle.length>=130">{{ one.clearTitle.substring(0,13)+"..." }}</h3>
              </div>
          </router-link>

    </div>
</template>

<script>
export default {
    name: 'Home',
    mounted(){
        if (this.news.length) {
            return;
        }
        this.$store.dispatch('getNews')
    },
    filters: {
      moment: function (date) {
        return moment(date).format('hh:mm:ss');
      }
    },
    computed: {
        news() {
            return this.$store.getters.news;
        }
    }
}
</script>
<style scoped>

</style>
