describe('Class', function(){
    class Customer {
        constructor(){
            console.info("Create new customer")
        }
    }

    class Order {

    }
    it('should can create class', function(){

        const customer: Customer = new Customer()
        const order: Order = new Order()
    })

    it('should can create constructor', function(){
        // constructor => secara otomatis terpanggil ketika object pertama kali dibuat
        new Customer()
        new Customer()
    })
})