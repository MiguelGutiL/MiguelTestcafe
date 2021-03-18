import { Selector } from 'testcafe'
import { t } from 'testcafe'

class CheckoutOverview{
    constructor(){

        this.Title = Selector('.subheader')
        this.PayInfo = Selector('.summary_value_label')
        this.ShopInfo = Selector('.summary_value_label')
        this.ItemTotal = Selector('.summary_subtotal_label')
        this.Tax = Selector('.summary_tax_label')
        this.Total = Selector('.summary_total_label')
        this.CancelButton = Selector('.cart_cancel_link')
        this.FinishButton = Selector('.btn_action')
        this.ProductName = Selector('.inventory_item_name')
    }

    FinishPurchase = async() =>{
        await t.click(this.FinishButton)
    }
}

export default new CheckoutOverview();