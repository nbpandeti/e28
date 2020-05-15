<template>
    <div>
        <h2>Add a Recipe</h2>


        <div >Name
        <input data-test='recipe-name-input' type='text' v-model='recipe.name'/></div>
        <br/>
        <div>URL Identifier:
        <input data-test='recipe-slug-input' type='text' v-model='recipe.slug' /></div>

        <div>
            <p>Nutritional Value:</p>
            <div>Servings per Recipe: <input data-test='recipe-serv-input' type='text' v-model='nutriInfo.servings_per_recipe' /></div>
            <div>Calories: <input data-test='recipe-cal-input' type='text' v-model='nutriInfo.calories' />kcal</div>
            <div>Total Fat: <input data-test='recipe-fat-input' type='text' v-model='nutriInfo.fat_grams' />g</div>
            <div>Saturated Fat: <input data-test='recipe-sat-fat-input' type='text' v-model='nutriInfo.sat_fat_grams' />g</div>
            <div>Trans Fat: <input data-test='recipe-trans-fat-input' type='text' v-model='nutriInfo.trans_fat_grams' />g</div>
            <div>Cholesterol: <input data-test='recipe-chol-input' type='text' v-model='nutriInfo.cholesterol_mg' />mg</div>
            <div>Sodium: <input data-test='recipe-sodium-input' type='text' v-model='nutriInfo.sodium_mg' />mg</div>
            <div>Total Carbohydrate: <input data-test='recipe-carb-input' type='text' v-model='nutriInfo.carbs_grams' />g</div>
            <div>Dietary Fiber: <input data-test='recipe-fiber-input' type='text' v-model='nutriInfo.fiber_grams' />g</div>
            <div>Sugars: <input data-test='recipe-sugar-input' type='text' v-model='nutriInfo.sugar_grams' />g</div>
            <div>Protein: <input data-test='recipe-protein-input' type='text' v-model='nutriInfo.protein_grams' />g</div>
        </div>

        <input data-test='add-recipe-button' type='submit' value='Add' @click.prevent='addRecipe' />

        <transition name='fade'>
            <div data-test='recipe-added-confirmation' class='alert' v-if='added'>Your recipe was added!</div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';

export default {
    data: function() {
        return {
            added: false,
            recipe: {
                name: '',
                slug: ''
            },
            nutriInfo: {
                calories: 0,
                carbs_grams: 0,
                cholesterol_mg: 0,
                fat_grams: 0,
                fiber_grams: 0,
                protein_grams: 0,
                recipe_slug: '',
                sat_fat_grams: 0,
                servings_per_recipe: 0,
                sodium_mg: 0,
                sugar_grams: 0,
                trans_fat_grams: 0
            }
        };
    },
    methods: {
        addRecipe: function() {

            this.nutriInfo.recipe_slug = this.recipe.slug;

            app.api.add('nutritional_Info', this.nutriInfo).then(() => {
                this.nutriInfo = {
                    calories: 0,
                    carbs_grams: 0,
                    cholesterol_mg: 0,
                    fat_grams: 0,
                    fiber_grams: 0,
                    protein_grams: 0,
                    recipe_slug: '',
                    sat_fat_grams: 0,
                    servings_per_recipe: 0,
                    sodium_mg: 0,
                    sugar_grams: 0,
                    trans_fat_grams: 0
                };
            });

            app.api.add('recipes', this.recipe).then(() => {
                this.added = true;

                setTimeout(() => (this.added = false), 3000);

                this.recipe = {
                    name: '',
                    slug: ''
                };
            });
        },
    }
};
</script>

<style scoped>
input {
    font-size: 15pt;
}

textarea,
input[type='text'] {
    width: 50%;
}

textarea {
    height: 75px;
    display: block;
    margin: auto;
}

label {
    margin-top: 20px;
    display: block;
    font-weight: bold;
}

input[type='submit'] {
    display: inline-block;
    margin-top: 10px;
}
</style>