describe('Online Store', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/'); // Adjust this URL to your local development server
  });

  it('loads the home page', () => {
    cy.contains('Dessert').should('be.visible');
  });

  it('displays the product list', () => {
    cy.get('.productmapping').should('have.length.at.least',2); // Adjust the selector based on your product class
  });

  it('adds a product to the cart', () => {
    cy.get('.add').first().find('button').contains('Add to Cart').click(); // Adjust selectors as necessary
    cy.get('.cart-item').contains('1 item').should('be.visible');
  });

  it('increments and decrements product quantity in the cart', () => {
    cy.get('.add').first().find('button').contains('Add to Cart').click();
    cy.get('.cart-item').contains('1 item').should('be.visible');
    
    cy.get('.cart-item').first().find('.increment-btn').click(); // Adjust selectors as necessary
    cy.get('.cart-item').first().find('.quantity').should('contain', '2');

    cy.get('.cart-item').first().find('.decrement-btn').click();
    cy.get('.cart-item').first().find('.quantity').should('contain', '1');
  });

  it('confirms the order', () => {
    cy.get('.orderconfirmation').first().find('button').contains('Confirm Order').click();
    cy.get('.modal').contains('1 item').should('be.visible');
    
    cy.get('.startorder').find('button').contains('Start Order').click(); // Adjust selectors as necessary
    cy.contains('Order Placement sucessfull!').should('be.visible');
  });
});
