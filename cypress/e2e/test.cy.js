describe('Test my site is working', () =>{
    it('Visits the localhost of my site and test if up end the elements are ther and works', () => {
        cy.visit('http://localhost:5500')
        cy.get("#text")
        cy.get("#link").click()
    })
})