import Vue from 'vue'
import Vuex from 'vuex'

import * as app from '@/common/app.js'
var _ = require('lodash')

Vue.use(Vuex)

export default new Vuex.Store({
    // State - Single source of truth; object where all data is stored.
    state: {
        recipes: [],
        ingredients: [],
        cookSteps: [],
        nutriInfo: []

    },
    // Mutations - Methods used to update data in the store.
    mutations: {
        updateRecipes(state, payload) {
            state.recipes = payload;
        },
        updateIngredients(state, payload) {
            state.ingredients = payload;
        },
        updateCookSteps(state, payload) {
            state.cookSteps = payload;
        },
        updateNutriInfo(state, payload) {
            state.nutriInfo = payload;
        }
    },
    // Actions - Methods used to asynchronously change the store, committing the changes via mutations.
    actions: {
        setDatabase(context) {
            app.api.all('recipes').then(response => {
                context.commit('updateRecipes', response);
            });
            app.api.all('receipe_ingredients').then(response => {
                context.commit('updateIngredients', response);
            });
            app.api.all('recipe_cooking_steps').then(response => {
                context.commit('updateCookSteps', response);
            });
            app.api.all('nutritional_Info').then(response => {
                context.commit('updateNutriInfo', response);
            });
        }
    },
    // Getters - Methods used to retrieve and perform some operation on data in the store.
    getters: {
        getRecipeBySlug(state) {
            return function (slug) {
                console.log("Store getRecipeBySlug :" + slug);
                for (let key of Object.keys(state.recipes)) {
                    console.log(slug + ": " + state.recipes[key].slug);
                    if (state.recipes[key].slug == slug) {
                        console.log(slug + "= " + state.recipes[key].slug);
                        return state.recipes[key];
                    }
                }
            }
        },
        getRecipeIngredientsBySlug(state) {

            return function (slug) {
                let ingredientsList = [];
                console.log("Store getRecipeIngredientsBySlug");
                for (let key of Object.keys(state.ingredients)) {
                    if (state.ingredients[key].recipe_slug == slug) {
                        ingredientsList.push(state.ingredients[key]);
                    }
                }
                return ingredientsList;
            }
        },
        getRecipeCookingStepsBySlug(state) {
            return function (slug) {
                let coolStepsList = [];
                console.log("Store getRecipeCookingStepsBySlug");
                for (let key of Object.keys(state.cookSteps)) {
                    if (state.cookSteps[key].recipe_slug == slug) {
                        coolStepsList.push(state.cookSteps[key]);
                    }
                }
                return _.sortBy(coolStepsList, ['step_number']);
            }
        },
        getRecipeNutriInfoBySlug(state) {
            return function (slug) {
                console.log("Store getRecipeNutriInfoBySlug");
                for (let key of Object.keys(state.nutriInfo)) {
                    if (state.nutriInfo[key].recipe_slug == slug) {
                        return state.nutriInfo[key];
                    }
                }
            }
        }
    }
})