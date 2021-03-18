import { Selector } from 'testcafe'
import { t } from 'testcafe'

class Cart{
    constructor(){
        this.Title = Selector('.subheader')
        this.TitleQTY = Selector('')
        this.TitleDescription = Selector('')
        this.Quantity = Selector('')
        this.ContinueShopButton = Selector('.btn_secondary')
        this.CheckoutButton = Selector('.checkout_button')
        this.Menu = Selector('')
        this.Product = Selector('.inventory_item_name')
    }

    goToCheckout = async() =>{
        await t
        .click(this.CheckoutButton)
    }

}

export default new Cart();