
import constants from "../constants.cy.js"


describe("PPL CHECK TEST", () => {

  const { visitPage, rootPage, clickOnAcceptCookie, verifyDocumentGdpr, verifyDocumentSeznamZpracovatelu, verifyDocumentPrehledCookies, verifyDocumentDataPrivacy  } = constants;
    // text

  const {headlinePageText} = constants;


  it("Check PPL documents on page", function () {
    //Load Page
    visitPage(rootPage);
    clickOnAcceptCookie();
    cy.contains(headlinePageText);

    //Check Documents
    verifyDocumentGdpr();
    verifyDocumentSeznamZpracovatelu();
    verifyDocumentPrehledCookies();
    verifyDocumentDataPrivacy();

  });
});







