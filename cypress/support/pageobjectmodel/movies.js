class MoviesPage {
  visitHomePage() {
    cy.visit('https://www.district.in/');
  }

  clickMoviesLink() {
    cy.get('a[href="/movies/"]').first().click();
  }

  filterByTamil() {
    cy.get('[aria-label="Tamil"]').click();
  }

  getMovieTitles() {
    return cy.get('h5.dds-text-lg.dds-font-semibold');
  }
}

export default new MoviesPage();
 