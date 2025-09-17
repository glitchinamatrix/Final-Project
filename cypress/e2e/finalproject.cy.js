// describe('Filter Sports Events by Lowest Price', () => {
//   it('Should apply lowest price filter and extract event names', () => {
    
//    cy.visit('https://www.district.in/');
//    cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11')
//    cy.wait(6000)
//   cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11 > .dds-inline-block').type('sports{enter}')
  
//   const eventNames = [];
//   cy.get('a').then($links => {
//     $links.each((index, link) => {
//       const name = link.textContent.trim();
//       // const href = link.href; // This variable was not used.
//       if (name) { // It's good practice to avoid adding empty strings.
//         eventNames.push(name);
//       }
//     });

//     // By placing cy.log here, it executes once after the loop is complete,
//     // logging the full array of names.
//     cy.log('Collected Event Names:', eventNames);
//     cy.writeFile('cypress/results/events.json', eventNames);
//   });
//   });
// });
describe('Filter movies by area',()=>{
  it('Extract all the languages for movies and store in a List',()=>{
     cy.visit('https://www.district.in/')
     cy.wait(10000)
     //cy.get('#master-header > .dds-px-3 > .dds-mt-3 > .dds-w-full > .dds-h-11').type('movies')
  // Example: click a menu or scroll to reveal the element
    cy.get('a[href="/movies/"]').first().click();




   // cy.get('a[href="/movies/"]').should('be.visible') .click({ multiple: true  },{force: true});
    cy.wait(5000)
    cy.get('[aria-label="Tamil"]').click();

     cy.wait(5000)
      const movies = [];

cy.get('h5.dds-text-lg.dds-font-semibold').each(($el) => {
  const name = $el.text().trim();
  if (name) {
    movies.push(name);
  }
}).then(() => {
  cy.log('Extracted Movies:', movies);
  cy.writeFile('cypress/results/movies.json', movies);
});

    

  });
 });
// describe("",()=>{
//   it("",()=>{
//     cy.visit("https://www.google.com")
//     cy.get("[aria-label='Sign in']").click()
//     cy.get("input[aria-label='Email or phone'").type('none&^%$()@gmailcom')
//     cy.get("").click();
//     cy.contains('button', 'Next').click();
    
//     cy.get('div.Ekjuhf.Jj6Lae')
//       .should('be.visible')
//       .and('contain', 'Enter a valid email or phone number')
//       .screenshot('invalid-login-error');






//   })
// }   
  
//   )