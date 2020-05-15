<template>
    <div>
        <h2>Add a Cook Step</h2>


        <div>URL Identifier:
            <input
              data-test='recipe-cook-step-slug-input'
              type='text'
              :class='{ "form-input-error": $v.recipeCookingStep.recipe_slug.$error}'
              v-model='$v.recipeCookingStep.recipe_slug.$model' />
            <div v-if='$v.recipeCookingStep.recipe_slug.$error'>
                <div class='form-feedback-error' v-if='!$v.recipeCookingStep.recipe_slug.required'>
                    URL identifier is required
                </div>
                <div class='form-feedback-error' v-if='!$v.recipeCookingStep.recipe_slug.exists'>
                    This URL identifier does not exist. Please enter an existing identifier.
                </div>
            </div>
        </div>

        <div>Cook Step Number:
            <input
              data-test='recipe-cook-step-number-input'
              type='text'
              v-model='$v.recipeCookingStep.step_number.$model'
              :class='{ "form-input-error": $v.recipeCookingStep.step_number.$error}'/>
            <div v-if='$v.recipeCookingStep.step_number.$error'>
                <div class='form-feedback-error' v-if='!$v.recipeCookingStep.step_number.required'>
                    Cook Step number is required
                </div>
                <div class='form-feedback-error' v-if='!$v.recipeCookingStep.step_number.integer'>
                    Cook Step number must be an whole number
                </div>
                <div class='form-feedback-error' v-if='!$v.recipeCookingStep.step_number.isNextStep'>
                    Cook Step number must be {{ this.nextStep }} for recipe slug '{{ this.recipeCookingStep.recipe_slug }}'.
                </div>
            </div>
        </div>

        <div>Cook Step Details:
            <input
              data-test='recipe-cook-step-details-input'
              type='text'
              :class='{ "form-input-error": $v.recipeCookingStep.step_details.$error}'
              v-model='$v.recipeCookingStep.step_details.$model' />
            <div v-if='$v.recipeCookingStep.step_details.$error'>
                <div class='form-feedback-error' v-if='!$v.recipeCookingStep.step_details.required'>
                    Cook Step Details are required
                </div>
            </div>
        </div>

        <input
          data-test='add-cook-step-button'
          type='submit' value='Add'
          @click.prevent='addCookStep' />

        <transition name='fade'>
            <div
              data-test='cook-step-added-confirmation'
              class='alert'
              v-if='added'>
                Your recipe cook step was added!
            </div>
        </transition>
    </div>
</template>

<script>
import * as app from '@/common/app.js';
import { required, integer } from 'vuelidate/lib/validators';

export default {
    data: function() {
        return {
            added: false,
            recipeCookingStep: {
                recipe_slug: '',
                step_details: '',
                step_number: ''
            },
            nextStep: 0
        };
    },
    validations() {
        return {
            recipeCookingStep: {
                recipe_slug: {
                    required,
                    exists(value) {
                        return this.$store.getters.getRecipeBySlugForForm(value) != null &&
                                this.$store.getters.getRecipeBySlugForForm(value);
                    }
                },
                step_number: {
                    required,
                    integer,
                    isNextStep(value) {
                        this.nextStep = parseInt(this.$store.getters.getNextRecipeCookingStepNumberBySlug(this.recipeCookingStep.recipe_slug), 10) + 1;
                        return value == (this.nextStep);
                    }
                },
                step_details: {
                    required
                }
            }
        }
    },
    methods: {
        addCookStep: function() {
            this.$v.$touch();
            if (this.$v.$anyError == false) {
                app.api.add('recipe_cooking_steps', this.recipeCookingStep).then(response => {
                    if (response.includes('Error')) {
                        alert(response);
                    } else {
                        this.$v.$reset();

                        this.added = true;

                        setTimeout(() => (this.added = false), 3000);

                        this.recipeCookingStep = {
                            recipe_slug: '',
                            step_details: ' ',
                            step_number: 0
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