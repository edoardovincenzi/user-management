/// <reference types="cypress" />

describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('passes', () => {
    cy.contains('User management');
  });
});
