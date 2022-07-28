class ItemCatalogPage{
   
    lblItemName = '.inventory_details_name';
    lblItemDetails = '.inventory_details_desc';
    lblItemPrice = '.inventory_details_price';
    lblItemAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
    btnBack = '[data-test="back-to-products"]';
    btnCart = '.shopping_cart_link';
    lblPriceItem = '.inventory_details_desc_container';
    lblValueItem29 = '.inventory_details_price';
    lblItemSelect = '#item_4_img_link > .inventory_item_img';
    
    verifyValueItem(){
        cy.get(this.lblPriceItem).find(this.lblValueItem29).invoke("text").then((element)=>{
            cy.log(element);
        })
    }
    clickProductItem(){
        cy.get(this.lblItemSelect).click();
    }
    verifyItemName(should){
        cy.get(this.lblItemName).should(should);
    }
    verifyItemDetails(should){
        cy.get(this.lblItemDetails).should(should);
    }
    verifyItemPrice(should){
        cy.get(this.lblItemPrice).should(should);
    }
    clickItemAdd(){
        cy.get(this.lblItemAdd).click();
    }
    clickItemBack(){
        cy.get(this.btnBack).click();
    }
    verifyIfExistName(){
        this.verifyItemName("be.exist");
    }
    verifyIfExistDetails(){
        this.verifyItemDetails("be.exist");
    }
    verifyIfExistPrice(){
        this.verifyItemPrice("be.exist");
    }
    verifyIfExistValueItem(){
        this.verifyValueItem("be.exist");
    }

    addItemToCart(){
        this.verifyIfExistName(),
        this.verifyIfExistDetails(),
        this.verifyIfExistPrice(),
        this.clickItemAdd();
    }        
    
    VerifyingValueItem(){
        this.clickProductItem(),
        this.verifyValueItem();
        this.clickItemBack();
    }
}
     
export default ItemCatalogPage;
