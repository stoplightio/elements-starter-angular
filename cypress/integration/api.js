describe('API component', () => {
   beforeEach(() => {
       cy.visit("http://localhost:4200/reference");
   });

   it('Loads correctly', () => {
       cy.get("h1:contains('Zoom')").should('exist');
   })
});