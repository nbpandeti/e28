<template>
    <div>
        <h2>Add a Recipe</h2>


        <div >Name
        <input type='text' v-model='recipe.name'/></div>
        <br/>
        <div>URL Identifier:
        <input type='text' v-model='recipe.slug' /></div>

        <div>
            <p>Nutritional Value:</p>
            <div>Servings per Recipe: <input type='text' v-model='nutriInfo.servings_per_recipe' /></div>
            <div>Calories: <input type='text' v-model='nutriInfo.calories' />kcal</div>
            <div>Total Fat: <input type='text' v-model='nutriInfo.fat_grams' />g</div>
            <div>Saturated Fat: <input type='text' v-model='nutriInfo.sat_fat_grams' />g</div>
            <div>Trans Fat: <input type='text' v-model='nutriInfo.trans_fat_grams' />g</div>
            <div>Cholesterol: <input type='text' v-model='nutriInfo.cholesterol_mg' />mg</div>
            <div>Sodium: <input type='text' v-model='nutriInfo.sodium_mg' />mg</div>
            <div>Total Carbohydrate: <input type='text' v-model='nutriInfo.carbs_grams' />g</div>
            <div>Dietary Fiber: <input type='text' v-model='nutriInfo.fiber_grams' />g</div>
            <div>Sugars: <input type='text' v-model='nutriInfo.sugar_grams' />g</div>
            <div>Protein: <input type='text' v-model='nutriInfo.protein_grams' />g</div>
        </div>

        <div v-for="(ingredient, index) in ingredients" :key="index" class="row">
            <div class="col-lg-5">
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

        <div v-for="(cookStep, index) in cookSteps" :key="index" class="row">
            <div class="col-lg-4">
                <div class="row">
                    <div class="col-10">
                        <q-input
                          v-model="cookStep.step_number"
                          label="Step Number"
                        />
                    </div>
                    <div class="col-5">
                        <q-input
                          v-model="cookStep.step_details"
                          label="Step Details"
                        />
                    </div>
                    <div class="col-lg-2">
                        <div class="block float-right">
                            <q-btn round @click="removeCookStepLine(index)" icon="delete" />
                            <q-btn round v-if="index + 1 === cookSteps.length" @click="addCookStepLine" icon="playlist-plus" />
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
            },
            ingredients: [],
            ingredientsBlockRemoval: true,
            cookSteps: [],
            cookStepsBlockRemoval: true
        };
    },
    watch: {
        ingredients () {
            this.ingredientsBlockRemoval = this.ingredients().length <= 1
        },
        cookSteps () {
            this.cookStepsBlockRemoval = this.cookSteps().length <= 1
        }
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
        addIngredientLine () {
            let checkEmptyLines = this.ingredients.filter(ingredient => ingredient.number === null)
            if (checkEmptyLines.length >= 1 && this.ingredients.length > 0) {
                this.ingredients.forEach(ingredient => ingredient.recipe_slug = this.recipe.slug);
                return
            }
            this.ingredients.push({
                name: null,
                quantity: null,
                prep_method: null,
                recipe_slug: this.recipe.slug
            })
        },
        removeIngredientLine (lineId) {
            if (!this.ingredientsBlockRemoval) {
                this.ingredients.splice(lineId, 1)
            }
        },
        addCookStepLine () {
            let checkEmptyLines = this.cookSteps.filter(cookStep => cookStep.number === null)
            if (checkEmptyLines.length >= 1 && this.cookSteps.length > 0) {
                this.cookSteps.forEach(cookStep => cookStep.recipe_slug = this.recipe.slug);
                return
            }
            this.cookSteps.push({
                recipe_slug: this.recipe.slug,
                step_details: null,
                step_number: null
            })
        },
        removeCookStepLine (lineId) {
            if (!this.ingredientsBlockRemoval) {
                this.ingredients.splice(lineId, 1)
            }
        }
    },
    mounted() {
        this.addIngredientLine();
        this.addCookStepLine();
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