<template>
    <div>
        <div class="navigation">
            <div class="burger" v-on:click="modalOpen = !modalOpen">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <router-link to="/" class="logo"></router-link>
            <ul>
                <li><router-link to="/category/Спасение">Спасение</router-link></li>
                <li><router-link to="/category/Благое дело">Благое дело</router-link></li>
                <li><router-link to="/category/Бизнес для людей">Бизнес для людей</router-link></li>
                <li><router-link to="/category/Благое дело">Благое дело</router-link></li>
                <li><router-link to="/category/Друг природы">Друг природы</router-link></li>
                <li><router-link to="/category/Рейтинг по регионам">Рейтинг по регионам</router-link></li>
            </ul>
            <div class="age">18+</div>
        </div>
        <div class="top-bg"></div>
        <div class="modal" v-if="modalOpen">
            <div class="cross"  v-on:click="modalOpen = !modalOpen">
                <div class="line line1"></div>
                <div class="line line2"></div>
            </div>
            <div class="logo-fan"></div>
        </div>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return {
          modalOpen: false
        }
    },
    watch: {
       modalOpen: function(newVal) {
         var className = 'modal-open';
         if (newVal) {
           document.body.classList.add(className);
         } else {
           document.body.classList.remove(className);
         }
       }
     }
}

</script>
