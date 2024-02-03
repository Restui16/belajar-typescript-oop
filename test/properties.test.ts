describe('properties', function(){
    class Customer {
        readonly id: number
        name: string = "Guest"
        age?: number

        constructor(id: number, name: string){
            this.id = id
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name} my name is ${this.name}`)
        }
    }
    
    it('should can have properties', function(){
        const customer1 = new Customer(1, "Restu")
        customer1.age = 25

        console.info(customer1.id)
        console.info(customer1.name)
        console.info(customer1.age)
        console.info(customer1)
    })

    it('should can have method', function(){
        const customer1 = new Customer(2, 'Restu')

        customer1.sayHello('Budi')
    })
})