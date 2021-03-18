import { Selector } from 'testcafe'
import { t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField = Selector('input[data-test="username"]')
        this.passwordField = Selector('input[data-test="password"]')
        this.loginButton = Selector('input[class="btn_action"]')
        this.errorMessage = Selector('h3[data-test="error"]')
        this.IMGBot = Selector('.bot_column')
    }

    login = async(USERNAME,PASSWORD) => {
        await t
        .typeText(this.usernameField, USERNAME)
        .typeText(this.passwordField, PASSWORD)
        .click(this.loginButton)
    }


} export default new LoginPage();