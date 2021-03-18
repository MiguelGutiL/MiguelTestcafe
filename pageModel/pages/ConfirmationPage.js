import { Selector } from 'testcafe'

class ConfirmationPage{
    constructor(){
        this.Title = Selector('.subheader')
        this.MessageHeader = Selector('.complete-header')
        this.MessageBody = Selector('.complete-text')
        this.Img = Selector('.pony_express')

    }
}

export default new ConfirmationPage();