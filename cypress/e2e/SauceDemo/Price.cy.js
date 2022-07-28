import LoginPage from "../../pages/Login_page"
import ProductsPage from "../../pages/Products_page";
import ItemCatalogPage from "../../pages/Item_Catalog_page";

var loginPage = new LoginPage();
var productsPage = new ProductsPage();
var itemCatalogPage = new ItemCatalogPage();

describe("Comparação de preços",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/");
        loginPage.realizeLogin("standard_user","secret_sauce");
    });

    it("Verificando os dois valores", ()=>{
        // itemCatalogPage.VerifyingValueItem();
        // productsPage.VerifyingValueProductsItem1();
        expect(itemCatalogPage.VerifyingValueItem()).to.eq( productsPage.VerifyingValueProductsItem1());
    });

});