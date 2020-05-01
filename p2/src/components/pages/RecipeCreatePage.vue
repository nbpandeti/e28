<template>
    <div>
        <h2>Add a Recipe</h2>

        <label for='name'>Name</label>
        <input type='text' v-model='recipe.name' id='name' />

        <label for='slug'>URL Identifier:</label>
        <input type='text' v-model='recipe.slug' id='slug' />

        <div v-for="(ingredient, index) in ingredients" :key="index" class="row">
            <div class="col-lg-4">
                <div class="row">
                    <div class="col-10">
                        <q-input
                            v-model="ingredient.name"
                            label="Name"
                            />
                    </div>
                    <div class="col-5">
                        <q-input
                            v-model="ingredient.quantity"
                            label="Quantity"
                            />
                    </div>
                    <div class="col-7">
                        <q-input
                            v-model="ingredient.prep_method"
                            label="Prepping Method"
                            />
                    </div>
                    <div class="col-lg-2">
                        <div class="block float-right">
                            <q-btn round @click="removeIngredientLine(index)" icon="delete" />
                            <q-btn round v-if="index + 1 === ingredients.length" @click="addIngredientLine" icon="playlist-plus" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <input type='submit' value='Add' @click.prevent='addRecipe' />

        <transition name='fade'>
            <div class='alert' v-if='added'>Your recipe was added!</div>
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
                slug: '',
                nutriInfo: {
                    calories: 0,
                    carbs_gram: 0,
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
            },
            ingredients: [],
            ingredientsBlockRemoval: true
        };
    },
    watch: {
        ingredients () {
            this.ingredientsBlockRemoval = this.ingredients().length <= 1
        }
    },
    methods: {
        addRecipe: function() {
            app.api.add('recipes', this.recipe).then(() => {
                this.added = true;

                setTimeout(() => (this.added = false), 3000);

                this.recipe = {
                    name: '',
                    slug: '',
                    price: '',
                    available: '',
                    weight: '',
                    perishable: false,
                    description: ''
                };
            });
        },
        addIngredientLine () {
            let checkEmptyLines = this.ingredients.filter(ingredient => ingredient.number === null)
            if (checkEmptyLines.length >= 1 && this.ingredients.length > 0) {
                return
            }
            this.ingredients.push({
                name: null,
                quantity: null,
                prep_method: null
            })
        },
        removeIngredientLine (lineId) {
            if (!this.ingredientsBlockRemoval) {
                this.ingredients.splice(lineId, 1)
            }
        }
    },
    mounted() {
        this.addIngredientLine()
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