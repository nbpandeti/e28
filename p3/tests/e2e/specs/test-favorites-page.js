describe('favorites-list-page', () => {

    let recipe = {
        name: 'Crunchy Cranberry Waldorf Salad',
        slug: 'crunchy-cranberry-waldorf-salad'
    }

    it('add and remove from favorites pages', () => {

        cy.visit('/recipes')
        cy.contains('h2', 'Recipes')

        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();

        cy.get('[data-test="add-to-favorites-link"]').click();

        cy.visit('/recipe/' + recipe.slug);
        cy.contains('[data-test="recipe-name"]', recipe.name)

        cy.visit('/favorites');
        cy.contains('[data-test="favorites-content"]', recipe.name);

        cy.get('[data-test="remove-from-favorites-link"]').click();
        cy.contains('No items');
    })
})