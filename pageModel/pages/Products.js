import { Selector } from 'testcafe'
import { t } from 'testcafe'

class Products{
    constructor(){
        this.Title = Selector('.product_label')
        this.ProductsTitle = Selector('#inventory_filter_container > div')
        this.AddCar = Selector('.btn_primary')
        this.Remove = Selector('.btn_secondary')
        this.BackButton = Selector('.inventory_details_back_button')
        this.Cart = Selector('#shopping_cart_container')
        this.Reorder = Selector('.product_sort_container')
        this.ProductName = Selector('.inventory_item_name')

        //--------Menu---------------
        this.Menu = Selector('#react-burger-menu-btn')
        this.MenuLogout = Selector('#logout_sidebar_link')
    }

    logout = async() => {
        await t
        .click(this.Menu)
        .click(this.MenuLogout)
    }

    goToShoppingtCart = async() =>{
        await t
        .click(this.Cart)
    } 

    addProducts = async(Product) =>{
        await t
        .click(this.ProductName.withText(Product)
            .parent('.inventory_item_label')
            .sibling('.pricebar')
            .child('.btn_primary'))
    }
}

export default new Products();