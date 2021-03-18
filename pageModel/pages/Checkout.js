import { Selector } from 'testcafe'
import { t } from 'testcafe'

class Checkout{
    constructor(){
        this.Title = Selector('.subheader')
        this.FirstName = Selector('input[data-test=firstName]')
        this.LastName = Selector('input[data-test=lastName]')
        this.PostalCode = Selector('input[data-test=postalCode]')
        this.CancelButton = Selector('.cart_cancel_link')
        this.ContinueButton = Selector('.btn_primary')
        this.ErrorMessage = Selector('[data-test="error"]')
    }

    FillPersonalInformation = async(First, Last, PC) => {
        if(First != ''){await t.typeText(this.FirstName, First)}   
        if(Last != ''){await t.typeText(this.LastName, Last)}
        if(PC != ''){await t.typeText(this.PostalCode, PC)}
        await t.click(this.ContinueButton)
    }
}

export default new Checkout();
