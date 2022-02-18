export class BaseAction {
    openBrowser(url) {
        cy.visit(url);
    }
    openBrowser1() {
        cy.visit('https://www.instagram.com/?hl=en');
    }
}
