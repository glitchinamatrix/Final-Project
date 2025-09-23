class SportsPage {
  visitHomePage() {
    cy.visit('https://www.district.in/');
  }

  searchSports() {
    cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11 > .dds-inline-block')
      .type('sports{enter}');
      // cy.get('[aria-label="All"] > .dds-text-inverse').click();
      cy.get('[aria-label="Events"] > .dds-text-inverse').click();
  }

//   clickViewMoreResults() {
//     cy.contains('View More Results').click({ force: true });
//   }

  getAllEventTitles() {
    return cy.get('h5.dds-tracking-tight.dds-text-lg.dds-font-semibold');
  }
  viewmore(){
   cy.get('.dds-gap-6 > :nth-child(1) > .dds-gap-0').click();
  }
  getFilteredSportsEvents() {
    return cy.get('h5.dds-tracking-tight.dds-text-lg.dds-font-semibold').filter(($el) => {
      const text = $el.text().toLowerCase();
      return text.includes('vs') || text.includes('sports');
    });
  }
} 

export default new SportsPage();
