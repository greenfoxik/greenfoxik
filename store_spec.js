let homepage = require('../pages/homepage');

describe('go to main page Happy Family Store', function() {
            browser.manage().window().maximize();

    it('Add package to cart', function() {
            // browser.get('https://s1.ph2016.info/ ');
            
            homepage.get('https://s1.ph2016.info/');
            browser.sleep(500);
            homepage.cialisLnk();
            browser.sleep(500);
            
            homepage.addCart();
            browser.sleep(500);

        })

        it('Plus capt', function() { 

                homepage.cartPlus();
                browser.sleep(500);
                homepage.insurance();
                browser.sleep(500);
                           
            })
           
        // it('Checking the order price ', function() { 

        //     browser.actions().sendKeys(protractor.Key.END).perform();
        //     homepage.sumPrice();
                        
        //     homepage.priceProduct();
        //  })

        it('Delete order', function() { 

            homepage.orderRemove();
            browser.sleep(1000);
       })

        it('Сart is empty', function() { 

            homepage.emptyCart();
            browser.sleep(1000);
       })

    //    it('Add new product to cart', function(){
    //         homepage.newProduct();
    //         homepage.addCart();
    //         browser.sleep(500);

    //    })

    //    it ('Continue shopping', function(){
    //        homepage.shoppCntn();
    //     //    homepage.addCart();
    //        browser.sleep(500);
    //    })

    //    it ('Сhoose another product', function(){

    //     homepage.viagr();
    //     homepage.addCart();
    //     browser.sleep(1000);
    //      });
         
    //      it('Check Total Order', function(){

    //         homepage.priceProduct();

    //      })

    //     it ('go to checkout', function(){

    //         homepage.submitBtn();
    //         browser.sleep(8000);
         
    //     });

        // it ('Check Total Order Amount: ', function(){

        //     homepage.totalPrice();
        //     browser.sleep(1000);
        // });

        // it('Check bonus pills', function(){

        //     homepage.bonusPills();

        // });
    });

    // Your Cart is currently empty. You can selelect a product from Bestsellers!