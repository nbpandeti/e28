<template>
    <div>
        <h2>Add a Recipe</h2>


        <div >Name
            <input
              data-test='recipe-name-input'
              type='text'
              id='name'
              :class='{ "form-input-error": $v.recipe.name.$error}'
              v-model='$v.recipe.name.$model'/>
            <div v-if='$v.recipe.name.$error'>
                <div class='form-feedback-error' v-if='!$v.recipe.name.required'>
                    Recipe Name is required
                </div>
            </div>
        </div>

        <br/>
        <div>URL Identifier:
            <input
              data-test='recipe-slug-input'
              type='text'
              id='slug'
              :class='{ "form-input-error": $v.recipe.slug.$error}'
              v-model='$v.recipe.slug.$model' />
            <small class='form-help'>Min: 5</small>
            <div v-if='$v.recipe.slug.$error'>
                <div class='form-feedback-error' v-if='!$v.recipe.slug.required'>
                    URL identifier is required
                </div>
                <div class='form-feedback-error' v-if='$v.recipe.slug.minLength'>
                    URL identifier must be at least 5 characters long.
                </div>
                <div class='form-feedback-error' v-if='!$v.recipe.slug.doesNotExist'>
                    This URL identifier has also been associated with another recipe. Please enter something different.
                </div>
            </div>
        </div>


        <div>
            <p>Nutritional Value:</p>
            <div>Servings per Recipe:
                <input data-test='recipe-serv-input'
                  type='text'
                  v-model='$v.nutriInfo.servings_per_recipe.$model'
                  :class='{ "form-input-error": $v.nutriInfo.servings_per_recipe.$error}'/>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.servings_per_recipe.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.servings_per_recipe.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>

            <div>Calories:
                <input
                  data-test='recipe-cal-input'
                  type='text'
                  v-model='$v.nutriInfo.calories.$model'
                  :class='{ "form-input-error": $v.nutriInfo.calories.$error}'/>kcal
                <div class='form-feedback-error' v-if='!$v.nutriInfo.calories.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.calories.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Total Fat:
                <input
                  data-test='recipe-fat-input'
                  type='text'
                  v-model='$v.nutriInfo.fat_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.fat_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.fat_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.fat_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Saturated Fat:
                <input
                  data-test='recipe-sat-fat-input'
                  type='text'
                  v-model='$v.nutriInfo.sat_fat_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.sat_fat_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.sat_fat_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.sat_fat_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Trans Fat:
                <input
                  data-test='recipe-trans-fat-input'
                  type='text'
                  v-model='$v.nutriInfo.trans_fat_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.trans_fat_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.trans_fat_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.trans_fat_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Cholesterol:
                <input
                  data-test='recipe-chol-input'
                  type='text'
                  v-model='$v.nutriInfo.cholesterol_mg.$model'
                  :class='{ "form-input-error": $v.nutriInfo.cholesterol_mg.$error}'/>mg
                <div class='form-feedback-error' v-if='!$v.nutriInfo.cholesterol_mg.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.cholesterol_mg.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Sodium:
                <input
                  data-test='recipe-sodium-input'
                  type='text'
                  v-model='$v.nutriInfo.sodium_mg.$model'
                  :class='{ "form-input-error": $v.nutriInfo.sodium_mg.$error}'/>mg
                <div class='form-feedback-error' v-if='!$v.nutriInfo.sodium_mg.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.sodium_mg.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Total Carbohydrate:
                <input
                  data-test='recipe-carb-input'
                  type='text'
                  v-model='$v.nutriInfo.carbs_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.carbs_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.carbs_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.carbs_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Dietary Fiber:
                <input
                  data-test='recipe-fiber-input'
                  type='text'
                  v-model='$v.nutriInfo.fiber_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.fiber_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.fiber_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.fiber_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Sugars:
                <input
                  data-test='recipe-sugar-input'
                  type='text'
                  v-model='$v.nutriInfo.sugar_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.sugar_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.sugar_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.sugar_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
            <div>Protein:
                <input
                  data-test='recipe-protein-input'
                  type='text'
                  v-model='$v.nutriInfo.protein_grams.$model'
                  :class='{ "form-input-error": $v.nutriInfo.protein_grams.$error}'/>g
                <div class='form-feedback-error' v-if='!$v.nutriInfo.protein_grams.decimal'>
                    Servings per Recipe must be a number
                </div>
                <div class='form-feedback-error' v-if='!$v.nutriInfo.protein_grams.minValue'>
                    Servings per Recipe must be greater than or equal to 0.
                </div>
            </div>
        </div>

        <input
          data-test='add-recipe-button'
          type='submit' value='Add'
          @click.prevent='addRecipe' />

        <transition name='fade'>
            <div
              data-test='recipe-added-confirmation'
              class='alert'
              v-if='added'>
                Your recipe was added!
            </div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, minLength, decimal, minValue } from 'vuelidate/lib/validators';

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
    validations() {
        return {
            recipe: {
                name: {
                    required
                },
                slug: {
                    required,
                    minLength: minLength(5),
                    doesNotExist(value) {
                        return !this.$store.getters.getRecipeBySlugForForm(value) ||
                                this.$store.getters.getRecipeBySlugForForm(value) == null;
                    }
                }
            },
            nutriInfo: {
                calories: {
                    decimal,
                    minValue: minValue(0)
                },
                carbs_grams: {
                    decimal,
                    minValue: minValue(0)
                },
                cholesterol_mg: {
                    decimal,
                    minValue: minValue(0)
                },
                fat_grams: {
                    decimal,
                    minValue: minValue(0)
                },
                fiber_grams: {
                    decimal,
                    minValue: minValue(0)
                },
                protein_grams: {
                    decimal,
                    minValue: minValue(0)
                },
                sat_fat_grams: {
                    decimal,
                    minValue: minValue(0)
                },
                servings_per_recipe: {
                    decimal,
                    minValue: minValue(0)
                },
                sodium_mg: {
                    decimal,
                    minValue: minValue(0)
                },
                sugar_grams: {
                    decimal,
                    minValue: minValue(0)
                },
                trans_fat_grams: {
                    decimal,
                    minValue: minValue(0)
                }
            }
        }
    },
    methods: {
        addRecipe: function() {
            this.nutriInfo.recipe_slug = this.recipe.slug;
            this.$v.$touch();

            if (this.$v.$anyError == false) {
                app.api.add('nutritional_Info', this.nutriInfo).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
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
                    }
                });

                app.api.add('recipes', this.recipe).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
                        this.$v.$reset();

                        this.added = true;

                        setTimeout(() => (this.added = false), 3000);

                        this.recipe = {
                            name: '',
                            slug: ''
                        };
                    }
                });
            }
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