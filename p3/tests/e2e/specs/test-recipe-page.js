describe('recipe-page', () => {

    let recipe = {
        name: 'Crunchy Cranberry Waldorf Salad',
        slug: 'crunchy-cranberry-waldorf-salad'
    }

    it('shows recipes', () => {

        cy.visit('/recipe/' + recipe.slug)
        cy.contains('[data-test="recipe-name"]', recipe.name)
    })

    it('adds to favorites list', () => {

        cy.visit('/recipe/' + recipe.slug)
        cy.get('[data-test="add-to-favorites-link"]').click()
        cy.get('[data-test="add-to-favorites-confirmation"]').should('exist')
    })
})