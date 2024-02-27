describe('Pesquisa Empréstimo', () => {
	beforeEach(function () {
		cy.visit('/')
	})
	it("Valida exibição da lupa, imagem de pesquisa", () => {

		cy.get('.ast-icon.icon-search')
			.eq(1)
			.should('be.visible')

	})

	it("Valida exibição do campo de pesquisa, após clicar na imagem da lupa", () => {

		cy.get('#search-field')
			.should('not.be.visible')

		cy.get('.ast-icon.icon-search')
			.eq(1).should('be.visible')
			.click()

		cy.get('#search-field')
			.should('be.visible')

	})

	it("Valida quantidade de post retornado para consulta por Empréstimo (com uso do acento na palavra)", () => {
		
		cy.get('.ast-icon.icon-search')
			.eq(1)
			.should('be.visible')
			.click()
		cy.get('#search-field')
			.should('be.visible')
			.type('empréstimo' + ' {enter}')
		
		cy.get('.ast-row')
		  .find('article')
		  .should('have.length', 10);

	})

	it("Valida quantidade de post retornado para consulta por Emprestimo (sem uso do acento na palavra)", () => {
		
		cy.get('.ast-icon.icon-search')
			.eq(1)
			.should('be.visible')
			.click()
		cy.get('#search-field')
			.should('be.visible')
			.type('emprestimo' + ' {enter}')
		
		cy.get('.ast-row')
		  .find('article')
		  .should('have.length', 10);

	})

})
