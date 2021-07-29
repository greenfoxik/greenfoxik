let homepage = require('../pages/homepage');

describe('go to main page Happy Family Store again', function() {
            browser.manage().window().maximize();

    it('Add package to cart', function() {
            // browser.get('https://s1.ph2016.info/ ');
            
            homepage.get('https://s1.ph2016.info/');
            browser.sleep(500);

    })

    it('Add new product to cart', function(){
        homepage.newProduct();
        homepage.addCart();
        browser.sleep(500);

   })

   it ('Continue shopping', function(){
           homepage.shoppCntn();
        //    homepage.addCart();
           browser.sleep(500);
       })

       it ('Сhoose another product', function(){

        homepage.viagr();
        homepage.addCart();
        browser.sleep(1000);
         });
         
         it('Check Total Order', function(){

            homepage.priceProduct();

         })

        it ('go to checkout', function(){

            homepage.submitBtn();
            browser.sleep(8000);
         
        });

        it('Check bonus pills', function(){

            homepage.bonusPills();

        });

        it ('Billing Address', function(){

            homepage.firstName();
            homepage.lastName();

        })
});