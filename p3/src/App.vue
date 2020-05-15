<template>
    <div id='app'>
        <img alt='Recipes logo' id='logo' src='@/assets/images/recipebook-logo.jpg' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link :to='{ name: link }' exact>
                        {{ link }}
                    </router-link>
                </li>
            </ul>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data: function() {
        return {
            links: ['home', 'recipes', 'add a recipe', 'add an ingredient', 'add a cook step', 'favorites']
        };
    },
    mounted: function() {
        console.log("App setDatabase");
        this.$store.dispatch('setDatabase');
    }
};
</script>

<style lang='scss'>
@import '@/assets/scss/recipebook.scss';
</style>
