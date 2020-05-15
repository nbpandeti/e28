<template>
    <div id='favorites-list-page'>
        <h1>Your Favorites</h1>

        <div v-if='items.length == 0'>No items</div>
        <ul data-test='favorites-content' class='cleanList' v-if='recipes'>
            <li v-for='item in items' :key='item.slug'>
                {{ getRecipeDetails(item.slug).name }}
                <button data-test='remove-from-favorites-link'
                    @click='removeFromFavoritesList(item.slug)'
                >Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    data: function() {
        return {
            items: [],
            favoritesList: null
        };
    },
    mounted() {
        // Making favoritesList instant a data property so we can use it later in a removeFromFavoritesList method
        this.favoritesList = new app.FavoritesList();
        this.items = this.favoritesList.getItems();
    },
    methods: {
        getRecipeDetails(slug) {
            for (let key of Object.keys(this.recipes)) {
                if (this.recipes[key].slug == slug) {
                    return this.recipes[key];
                }
            }
        },
        removeFromFavoritesList(slug) {
            this.favoritesList.remove(slug);
        }
    },
    computed: {
        recipes: function() {
            return this.$store.state.recipes;
        }
    }
};
</script>