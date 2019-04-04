<template>
    <div>
      <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'News',
    data (){
        return {
          title: 'title1'
        }
    },
    mounted(){
        if (this.news.length) {
                let data = this.news.find((one) => one.id == this.$route.params.id);
                this.title = data.clearTitle
            return;
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
