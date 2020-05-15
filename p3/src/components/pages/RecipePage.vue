<template>
    <div id='recipe-page' v-if='recipe.slug'>
        <h1 data-test='recipe-name'>{{ recipe.name }}</h1>
        <a href="javascript:void(0)" @click='addToFavoritesList(slug)' data-test='add-to-favorites-link'>Add to Favorites</a>
        <div><img class='recipe-thumb' :alt='"recipe image of  " + recipe.name' :src='imageSrc' /></div>


        <transition name='fade'>
            <div data-test='add-to-favorites-confirmation' class='alert' v-if='addAlert'>This recipe has been add to Your Favorites</div>
        </transition>

        <div style="display: inline-block; width: 100%;">
            <div style="align: left; text-align: left; float: left;">
                <p style="font-weight: bold; margin-top: 5px; margin-bottom: 5px; font-size: 2.5rem; letter-spacing: -1px;">Ingredients:</p>
                <div v-for='ingredient in ingredients' :key='ingredient.name' style="list-style-type: none;">
                    <span :data-test='ingredient.name'>{{ ingredient.quantity }} {{ ingredient.name }}<span v-if="ingredient.prep_method">:  {{ ingredient.prep_method}}</span></span>
                </div>
            </div>

            <div style="float: right; align: right; font: none; width: 250px; border: 1px solid #000; padding: 6px; boxing-sizing: border-box; font-size: 12px; line-height: 14px; text-align: left; color: #333; margin: 0; margin-botton: 5px;">
                <p style="font-weight: bold; margin-top: 5px; margin-bottom: 5px; font-size: 3rem; letter-spacing: -1px;">Nutritional Facts</p>
                <span style="">Servings per Recipe about {{ nutriInfo.servings_per_recipe }}</span>
                <div style="background-color: black; height: 10px; width: 100%;"></div>
                <span><b>Amount Per Serving</b></span>
                <hr style="margin: 1px;">
                <span>Calories {{ nutriInfo.calories }}</span>
                <div style="background-color: black; height: 10px; width: 100%;"></div>
                <span><b>Total</b> Fat {{ nutriInfo.fat_grams}}g</span>
                <hr style="margin: 1px;">
                <span style="margin-left: 15px;">Saturated Fat {{ nutriInfo.sat_fat_grams}}g</span>
                <hr style="margin: 1px;">
                <span style="margin-left: 15px;"><i>Trans</i> Fat {{ nutriInfo.trans_fat_grams}}g</span>
                <hr style="margin: 1px;">
                <span><b>Cholesterol</b> {{ nutriInfo.cholesterol_mg }}mg</span>
                <hr style="margin: 1px;">
                <span><b>Sodium</b> {{ nutriInfo.sodium_mg }}mg</span>
                <hr style="margin: 1px;">
                <span><b>Total Carbohydrate</b> {{ nutriInfo.carbs_grams }}g</span>
                <hr style="margin: 1px;">
                <span style="margin-left: 15px;">Dietary Fiber {{ nutriInfo.fiber_grams }}g</span>
                <hr style="margin: 1px;">
                <span style="margin-left: 15px;">Sugars {{ nutriInfo.sugar_grams }}g</span>
                <hr style="margin: 1px;">
                <span><b>Protein</b> {{ nutriInfo.protein_grams }}g</span>
            </div>
        </div>

        <div style="align: left; text-align: left;">
            <p style="font-weight: bold; margin-top: 5px; margin-bottom: 5px; font-size: 2.5rem; letter-spacing: -1px;">Steps:</p>
            <table>
                <tr>
                    <div v-for='cookStep in cookSteps' :key='cookStep.step_number'>
                        <td :data-test='cookStep.step_number'>{{ cookStep.step_number }}.</td>
                        <td>{{ cookStep.step_details }}</td>
                    </div>
                </tr>
            </table>
        </div>

        <router-link :to='{ name: "recipes" }'>&larr; Return to recipes list</router-link>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    name: '',
    props: ['slug'],
    data: function() {
        return {
            addAlert: false
        };
    },
    computed: {
        recipe() {
            return this.$store.getters.getRecipeBySlug(this.slug);
        },
        cookSteps() {
            return this.$store.getters.getRecipeCookingStepsBySlug(this.slug);
        },
        ingredients() {
            return this.$store.getters.getRecipeIngredientsBySlug(this.slug);
        },
        nutriInfo() {
            return this.$store.getters.getRecipeNutriInfoBySlug(this.slug);
        },
        imageSrc: function() {
            try {
                return require('@/assets/images/recipes/' +
                    this.recipe.slug +
                    '.jpg');
            } catch (e) {
                return require('@/assets/images/recipes/image-not-available.jpg');
            }
        }
    },
    methods: {
        addToFavoritesList: function(slug) {
            let favoritesList = new app.FavoritesList();
            favoritesList.add(slug);

            this.addAlert = true;
            setTimeout(() => (this.addAlert = false), 3000);
        }
    }
};
</script>

<style scoped>
</style>