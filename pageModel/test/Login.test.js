import LoginPage from '../pages/LoginPage'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import { CREDENTIALS } from '../data/Constants'
import CheckoutOverview from '../pages/CheckoutOverview'
import ConfirmationPage from '../pages/ConfirmationPage'
import { ERRORS } from '../data/ConstantsError'

const dataSet = require('../data/Datadriven.json')

fixture('Login feature testing').page `https://www.saucedemo.com/`
//1
dataSet.forEach(data=>{
test('Login with a valid user', async t =>{
    await LoginPage.login(data.USERNAME, data.PASSWORD)
    await t.expect(Products.ProductsTitle.exists).ok()
 })
})

//2  
test('Login with a invalid user', async t =>{ 
    await LoginPage.login(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).eql(ERRORS.INVALIDUSER)
})    


//3
test('Logout from products page', async t =>{
    await LoginPage.login(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await Products.logout()      
    await t.expect(LoginPage.IMGBot.exists).ok()
})


