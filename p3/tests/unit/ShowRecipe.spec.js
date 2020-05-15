import { expect } from 'chai'

import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import ShowRecipe from '@/components/ShowRecipe.vue'


describe('ShowRecipe.vue', () => {
    it('Shows a recipe on the Recipes Page', () => {

        let recipe = {
            name: 'Crunchy Cranberry Waldorf Salad',
            slug: 'crunchy-cranberry-waldorf-salad',
            calories: 180,
            carbs_grams: 39,
            cholesterol_mg: 10,
            fat_grams: 3,
            fiber_grams: 5,
            protein_grams: 3,
            sat_fat_grams: 2,
            servings_per_recipe: 6,
            sodium_mg: 40,
            sugar_grams: 31,
            trans_fat_grams: 0
        }

        const wrapper = shallowMount(ShowRecipe, {
            propsData: { recipe },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.text()).to.include(recipe.name)
        let foundRecipeLink = wrapper.find('[data-test="recipe-link"]').exists();
        expect(foundRecipeLink).to.equal(true);
    })
})
