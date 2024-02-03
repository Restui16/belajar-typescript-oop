describe('Interface', () => {
    
    interface HasName {
        name: string
    }

    interface CanSayHello {
        sayHello(name: string): void
    }

    class Person implements HasName, CanSayHello{
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, My name is ${this.name}`)
        }
    }

    it('should support inhertance', () => {
        
        const person = new Person('Restu')
        person.sayHello('Budi')
    });
});