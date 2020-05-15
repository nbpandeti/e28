describe('create-recipe-page', () => {

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

    let ingredient = {
        name: 'olive oil',
        quantity: '2 tablespoons',
        prep_method: ''
    }

    let cook_step = {
        step_details: 'Drink the olive oil',
        step_number: 1
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
        cy.contains('[data-test="recipe-name"]', recipe.name);

        cy.visit('/Recipes/Ingredient/create');
        cy.get('[data-test=recipe-ingredient-slug-input]').type(recipe.slug);
        cy.get('[data-test=recipe-ingredient-name-input]').type(ingredient.name);
        cy.get('[data-test=recipe-ingredient-quantity-input]').type(ingredient.quantity);

        cy.get('[data-test=add-ingredient-button]').click();
        cy.get('[data-test="ingredient-added-confirmation"]').should('exist');
        cy.visit('/recipe/' + recipe.slug);
        cy.contains('[data-test="'+ingredient.name+'"]', ingredient.name);

        cy.visit('/Recipes/CookStep/create');
        cy.get('[data-test=recipe-cook-step-slug-input]').type(recipe.slug);
        cy.get('[data-test=recipe-cook-step-number-input]').type(cook_step.step_number);
        cy.get('[data-test=recipe-cook-step-details-input]').type(cook_step.step_details);

        cy.get('[data-test=add-cook-step-button]').click();
        cy.get('[data-test="cook-step-added-confirmation"]').should('exist');
        cy.visit('/recipe/' + recipe.slug);
        cy.contains('[data-test="'+cook_step.step_number+'"]', cook_step.step_number);

    });
})