import LoginPage from '../pages/LoginPage'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import { CREDENTIALS } from '../data/Constants'
import CheckoutOverview from '../pages/CheckoutOverview'
import ConfirmationPage from '../pages/ConfirmationPage'
import { ERRORS } from '../data/ConstantsError'

const dataSet = require('../data/Datadriven.json')

fixture('Shopping cart feature testing').page `https://www.saucedemo.com/`
//1
test('Navigate to the shopping cart', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.goToShoppingtCart()

    await t.expect(Cart.Title.exists).ok()
})

//5
test('Add a single item to the shopping cart', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.addProducts('Sauce Labs Fleece Jacket')
    await Products.goToShoppingtCart()

    await t.expect(Cart.Product.withText('Sauce Labs Fleece Jacket').exists).ok()
})

//6
test('Add multiple items to the shopping cart', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.addProducts('Sauce Labs Fleece Jacket')
    await Products.addProducts('Sauce Labs Backpack')
    await Products.addProducts('Sauce Labs Bike Light')
    await Products.goToShoppingtCart()

    await t.expect(Cart.Product.withText('Sauce Labs Fleece Jacket').exists).ok()
    await t.expect(Cart.Product.withText('Sauce Labs Backpack').exists).ok()
    await t.expect(Cart.Product.withText('Sauce Labs Bike Light').exists).ok()
})

//7             
test('Error in checkout information', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.goToShoppingtCart()
    await Cart.goToCheckout()
    await Checkout.FillPersonalInformation('',CREDENTIALS.CHECKOUT_FORM.LastName, CREDENTIALS.CHECKOUT_FORM.PostalCode)

    await t.expect(Checkout.ErrorMessage.exists).ok()
    await t.expect(Checkout.ErrorMessage.innerText).eql(ERRORS.CHECKOUT.FIRSTNAME)

    
})

//8
test('Fill users information', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.goToShoppingtCart()
    await Cart.goToCheckout()
    await Checkout.FillPersonalInformation(CREDENTIALS.CHECKOUT_FORM.FirstName,CREDENTIALS.CHECKOUT_FORM.LastName, CREDENTIALS.CHECKOUT_FORM.PostalCode)

    await t.expect(CheckoutOverview.PayInfo.exists).ok()
})

//9
test('Final order items', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.addProducts('Sauce Labs Fleece Jacket')
    await Products.addProducts('Sauce Labs Backpack')
    await Products.goToShoppingtCart()
    await Cart.goToCheckout()
    await Checkout.FillPersonalInformation(CREDENTIALS.CHECKOUT_FORM.FirstName,CREDENTIALS.CHECKOUT_FORM.LastName, CREDENTIALS.CHECKOUT_FORM.PostalCode)

    await t.expect(CheckoutOverview.ProductName.withText('Sauce Labs Fleece Jacket').exists).ok()
    await t.expect(CheckoutOverview.ProductName.withText('Sauce Labs Backpack').exists).ok()
})

//10
test('Complete a purchase', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.addProducts('Sauce Labs Fleece Jacket')
    await Products.addProducts('Sauce Labs Backpack')
    await Products.goToShoppingtCart()
    await Cart.goToCheckout()
    await Checkout.FillPersonalInformation(CREDENTIALS.CHECKOUT_FORM.FirstName,CREDENTIALS.CHECKOUT_FORM.LastName, CREDENTIALS.CHECKOUT_FORM.PostalCode)
    await CheckoutOverview.FinishPurchase()

    await t.expect(ConfirmationPage.MessageBody.exists).ok()
})

