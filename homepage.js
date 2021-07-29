   
   let homepage = function() {

     let cialisLnk = element(by.css('.product-card__photo'));
     let addCart = element(by.linkText('ADD TO CART'));
     let sumPrice = element(by.css('.shopping-cart__sum_price'));
     let cartPlus = element(by.linkText('+'));
     let insurance  = element(by.css('.state'));
     let orderRemove = element(by.css('.table__remove'));
     let emptyCart = element(by.css('.empty-cart'));
     let priceProduct = element(by.css('.shopping-cart__sum_price'));
     let newProduct = element(by.css('[href="/catalog/view?slug=Cialis_Soft_Tabs"]'));
     let shoppCntn = element(by.css('.shopping-cart__btn-continue'));
     let viagr = element(by.css('[href="/catalog/view?slug=Viagra"]')); 
     let submitBtn = element(by.id('checkoutBtn'));
     // let totalPrice = element(by.css('.box'));
     let bonusPills = element(by.css('.sup'));

     let firstName = element(by.id('billing_address_first_name'));
     let lastName = element(by.id('billing_address_last_name'))

   this.get = function (){
        browser.get('https://s1.ph2016.info/');
   }

   this.cialisLnk = function() {
        cialisLnk.click();  
   };

   this.addCart = function() {
        addCart.click();
   };

   this.sumPrice = function() {
    browser.actions().sendKeys(protractor.Key.END).perform();
        sumPrice.click();
        browser.sleep(500);

   }

   this.cartPlus = function(){
    cartPlus.click();
    browser.sleep(200);
}

    this.insurance = function () {
        insurance.click();
        browser.sleep(200);
    }

   this.orderRemove = function() {
        orderRemove.click();
        browser.sleep(800)
      }
 
   this.emptyCart = function() {
     expect(emptyCart.getText()).toBe('Your Cart is currently empty. You can selelect a product from Bestsellers!');
     browser.sleep(800)
   }

   this.newProduct = function() {
     newProduct.click();
     browser.sleep(5000);
   }

   this.addCart = function() {
     addCart.click();
     browser.sleep(5000);
};
     this.shoppCntn = function(){
          shoppCntn.click();
          browser.sleep(5000);
     }

     this.viagr = function(){
          viagr.click();
          browser.sleep(1000)
     }

     this.addCart = function() {
          addCart.click();
          browser.sleep(5000);
     };

     this.priceProduct = function() {
          expect(priceProduct.getText()).toBe('$92.70');
     }

     this.submitBtn = function() {
          submitBtn.click();
          browser.sleep(5000);

     };

     this.bonusPills = function(){
          bonusPills.click();
          expect(bonusPills.getText()).toBe('Cialis Soft Tabs 10 Tabs x 20mg');


     };

     this.firstName = function(){

          firstName.click();
          firstName.sendKeys('Test');
          browser.sleep(5000);
     }

     this.lastName = function(){

          lastName.click();
          lastName.sendKeys('QAC');
          browser.sleep(5000);
     }


     

     };

module.exports = new homepage();