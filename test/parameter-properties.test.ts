describe('Parameter properties', () => {
    class Person {
        constructor(public name: string){}
    }

    it('should support', () => {
        const person = new Person('Restu')
        console.info(person.name)

        person.name = "Budi"
        console.info(person.name)
    });
});