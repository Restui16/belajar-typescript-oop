describe('Method overriding', () => {
    
    class Employee {
        name: string

        constructor(name: string){
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, My name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name)
            console.info(`I am your manager`)
        }
    }

    it('should support', () => {
        const employee = new Employee('Restu')
        employee.sayHello('Budi')

        const manager = new Manager('Restu')
        manager.sayHello('Joko')
    });
});