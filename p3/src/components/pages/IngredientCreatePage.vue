<template>
    <div>
        <h2>Add a Recipe Ingredient</h2>


        <div>URL Identifier:
            <input
              data-test='recipe-ingredient-slug-input'
              type='text'
              :class='{ "form-input-error": $v.recipeIngredient.recipe_slug.$error}'
              v-model='$v.recipeIngredient.recipe_slug.$model' />
            <div v-if='$v.recipeIngredient.recipe_slug.$error'>
                <div class='form-feedback-error' v-if='!$v.recipeIngredient.recipe_slug.required'>
                    URL identifier is required
                </div>
                <div class='form-feedback-error' v-if='!$v.recipeIngredient.recipe_slug.exists'>
                    This URL identifier does not exist. Please enter an existing identifier.
                </div>
            </div>
        </div>

        <div>Ingredient name:
            <input
              data-test='recipe-ingredient-name-input'
              type='text'
              v-model='$v.recipeIngredient.name.$model'
              :class='{ "form-input-error": $v.recipeIngredient.name.$error}'/>
            <div v-if='$v.recipeIngredient.name.$error'>
                <div class='form-feedback-error' v-if='!$v.recipeIngredient.name.required'>
                    Ingredient name is required
                </div>
            </div>
        </div>

        <div>Ingredient quantity:
            <input
              data-test='recipe-ingredient-quantity-input'
              type='text'
              v-model='$v.recipeIngredient.quantity.$model'
              :class='{ "form-input-error": $v.recipeIngredient.quantity.$error}'/>
            <div v-if='$v.recipeIngredient.quantity.$error'>
                <div class='form-feedback-error' v-if='!$v.recipeIngredient.quantity.required'>
                    Ingredient quantity is required
                </div>
            </div>
        </div>

        <div>Ingredient Prep Method:
            <input
              data-test='recipe-ingredient-prep-method-input'
              type='text'
              v-model='recipeIngredient.prep_method' />
        </div>

        <input
          data-test='add-ingredient-button'
          type='submit' value='Add'
          @click.prevent='addIngredient' />

        <transition name='fade'>
            <div
              data-test='ingredient-added-confirmation'
              class='alert'
              v-if='added'>
                Your recipe ingredient was added!
            </div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required } from 'vuelidate/lib/validators';

export default {
    data: function() {
        return {
            added: false,
            recipeIngredient: {
                recipe_slug: '',
                name: '',
                quantity: '',
                prep_method: ''
            }
        };
    },
    validations() {
        return {
            recipeIngredient: {
                recipe_slug: {
                    required,
                    exists(value) {
                        return this.$store.getters.getRecipeBySlugForForm(value) != null &&
                                this.$store.getters.getRecipeBySlugForForm(value);
                    }
                },
                name: {
                    required
                },
                quantity: {
                    required
                }
            }
        }
    },
    methods: {
        addIngredient: function() {
            this.$v.$touch();
            if (this.$v.$anyError == false) {
                app.api.add('receipe_ingredients', this.recipeIngredient).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
                        this.$v.$reset();

                        this.added = true;

                        setTimeout(() => (this.added = false), 3000);

                        this.recipeIngredient = {
                            recipe_slug: '',
                            name: '',
                            quantity: '',
                            prep_method: ''
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