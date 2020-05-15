describe('home-page', () => {
    it('visits the homepage', () => {

        cy.visit('/')
        cy.contains('p', 'This is an online recipe book!!!!')
        cy.contains('p', 'Enjoy to your heart')

    })
})