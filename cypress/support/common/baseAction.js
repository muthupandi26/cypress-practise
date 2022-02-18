export class BaseAction {
    openBrowser(url) {
        cy.visit(url);
    }
}