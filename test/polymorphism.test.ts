describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string){}
    }

    class Manager extends Employee {}

    class VicePresident extends Manager {}

    function sayHello(employee: Employee){
        if(employee instanceof VicePresident){
            const vp = employee as VicePresident
            console.info(`Hello VP ${vp.name}`)
        } else if(employee instanceof Manager){
            const manager = employee as Manager
            console.info(`Hello Manager ${manager.name}`)
        } else {
            console.info(`Hello ${employee.name}`)
        }
    }

    it('should support', () => {
        let employee = new Employee('Restu')
        console.info(employee)

        employee = new Manager('Restu')
        console.info(employee)

        employee = new VicePresident('Restu')
        console.info(employee)
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee('Restu'))
        sayHello(new Manager('Restu'))
        sayHello(new VicePresident('Restu'))
    });
});