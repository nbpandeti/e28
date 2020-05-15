describe('create-product-page', () => {

    // Test recipe
    let recipe = {
        name: 'My New recipe',
        slug: 'my-new-recipe-' + Date.now(),
        calories: 500,
        carbs_grams: 3,
        cholesterol_mg: 0,
        fat_grams: 0,
        fiber_grams: 0,
        protein_grams: 4,
        sat_fat_grams: 0,
        servings_per_recipe: 0,
        sodium_mg: 0,
        sugar_grams: 0,
        trans_fat_grams: 0
    }

    it('adds a new recipe', () => {

        cy.visit('/recipes/create');
        cy.get('[data-test=recipe-name-input]').type(recipe.name);
        cy.get('[data-test=recipe-slug-input]').type(recipe.slug);
        cy.get('[data-test=recipe-serv-input]').type(recipe.servings_per_recipe);
        cy.get('[data-test=recipe-cal-input]').type(recipe.calories);
        cy.get('[data-test=recipe-fat-input]').type(recipe.fat_grams);
        cy.get('[data-test=recipe-sat-fat-input]').type(recipe.sat_fat_grams);
        cy.get('[data-test=recipe-trans-fat-input]').type(recipe.trans_fat_grams);
        cy.get('[data-test=recipe-chol-input]').type(recipe.cholesterol_mg);
        cy.get('[data-test=recipe-sodium-input]').type(recipe.sodium_mg);
        cy.get('[data-test=recipe-carb-input]').type(recipe.carbs_grams);
        cy.get('[data-test=recipe-fiber-input]').type(recipe.fiber_grams);
        cy.get('[data-test=recipe-sugar-input]').type(recipe.sugar_grams);
        cy.get('[data-test=recipe-protein-input]').type(recipe.protein_grams);

        cy.get('[data-test=add-recipe-button]').click();
        cy.get('[data-test="recipe-added-confirmation"]').should('exist');
        cy.visit('/recipe/' + recipe.slug);
        cy.contains('[data-test="recipe-name"]', recipe.name)
    });
})