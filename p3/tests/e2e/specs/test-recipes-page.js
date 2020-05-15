describe('recipes-page', () => {

    let recipe = {
        name: 'Crunchy Cranberry Waldorf Salad',
        slug: 'crunchy-cranberry-waldorf-salad'
    }

    it('shows all recipes', () => {

        cy.visit('/recipes')
        cy.contains('h2', 'Recipes')

        cy.get('[data-test="recipe-name"]').its('length').should('be.gte', 4);

        cy.contains('[data-test="recipe-name"]', recipe.name)

        cy.get('[data-test="recipe-name"]').contains(recipe.name).click();

        cy.contains('[data-test="recipe-name"]', recipe.name)
        cy.url().should('include', recipe.slug)

    })

    it('shows the correct product images', () => {

        cy.visit('/recipes')

        cy.get('[data-test=recipe-image-' + recipe.slug + ']').should('have.attr', 'src').should('include', recipe.slug)
    })

})