// Cypress.on('uncaught:exception', (err, runnable) => {
//   return false; // prevents Cypress from failing the test
// });

// describe('the sports page is not loading and getting error describe', ()=>{
//   it('Should apply lowest price filter and extract event names', () => {
    
//    cy.visit('https://www.district.in/');
// //to get the search button id
//    cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11')
//    cy.wait(4000)
// //to get the events button
//   // cy.get('a[href="/events/"]').first().click();
//    // using alt and src
//  // cy.get('img[alt="Sports Event V2 [Taxonomy]"]').click();

//    cy.wait(10000)

//   cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11 > .dds-inline-block').type('sports{enter}')
  
//   const eventNames = [];
//   cy.get('h5.dds-tracking-tight.dds-text-lg.dds-font-semibold')
//   .each(($el) => {
//     const text = $el.text().trim();
//     cy.log('Filtered Event Title:', text);
//     //cy.writeFile("cypress/results/sports.json",text);
//   });
    
//     })
//     });
  

   
// describe('Filter movies by area',()=>{
//   it('Extract all the languages for movies and store in a List',()=>{
//      cy.visit('https://www.district.in/')
//      cy.wait(10000)
//      //cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11').type('movies')
//   // Example: click a menu or scroll to reveal the element
//     cy.get('a[href="/movies/"]').first().click();




//    // cy.get('a[href="/movies/"]').should('be.visible') .click({ multiple: true  },{force: true});
//     cy.wait(5000)
//     cy.get('[aria-label="Tamil"]').click();

//      cy.wait(5000)
//       const movies = [];

// cy.get('h5.dds-text-lg.dds-font-semibold').each(($el) => {
//   const name = $el.text().trim();
//   if (name) {
//     movies.push(name);
//   }
// }).then(() => {
//   cy.log('Extracted Movies:', movies);
//   cy.writeFile('cypress/results/movies.json', movies);
// });

    

//   });
//  });
// describe("Google Login Test", () => {
//   it("should show error for invalid email", () => {
//     cy.visit("https://accounts.google.com/signin");

//     cy.get("input[type='email']").should('be.visible').type('none&^%$()');
//     cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
//     cy.wait(10000)
//     cy.contains('Enter a valid email or phone number')
//       .should('be.visible')
//       .screenshot('invalid-login-error');
//   });
// });
import SportsPage from '../support/pageobjectmodel/sports';
import MoviesPage from '../support/pageobjectmodel/movies';
import GoogleLoginPage from '../support/pageobjectmodel/google';

Cypress.on('uncaught:exception', () => false);


// describe('District Sports Page Test', () => {
//   it('Should search sports, click View More Results, and log only sports-related event titles', () => {
//     SportsPage.visitHomePage();
//     cy.wait(4000);
//     SportsPage.searchSports();
//     cy.wait(10000);
//     SportsPage.viewmore();
//     const sportsEvents = [];
//     SportsPage.getAllEventTitles().each(($el) => {
//       const text = $el.text().trim();
//       if (text.toLowerCase().includes('pkl') || text.toLowerCase().includes('sports')) {
//         cy.log('Filtered Sports Event:', text);
//         sportsEvents.push(text);
//         cy.writeFile('cypress/results/sports.json', sportsEvents);
//       }
//     })
//   });
// });


// describe('District Movies Page Test', () => {
//   it('Should filter movies by Tamil and extract movie names', () => {
//     MoviesPage.visitHomePage();
//     cy.wait(10000);
//     MoviesPage.clickMoviesLink();
//     cy.wait(5000);
//     MoviesPage.filterByTamil();
//     cy.wait(5000);

//     const movies = [];
//     MoviesPage.getMovieTitles().each(($el) => {
//       const name = $el.text().trim();
//       if (name) {
//         movies.push(name);
//       }
//     }).then(() => {
//       cy.log('Extracted Movies:', movies);
//       cy.writeFile('cypress/results/movies.json', movies);
//     });
//   });
// });


describe('Google Login Test', () => {
  it('Should show error for invalid email', () => {
    GoogleLoginPage.visitLoginPage();
    GoogleLoginPage.enterInvalidEmail('none$()');
    GoogleLoginPage.clickNextButton();

    GoogleLoginPage.getErrorMessage()
      .should('be.visible')
      .screenshot('invalid-login-error');
  });
});
