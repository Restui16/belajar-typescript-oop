describe('Instance Of', () => {
    class Employee {}
    class Manager {}

    const restu = new Employee()
    const budi = new Manager()

    it('should have problem using typeof', () => {
        // typeof menghasilkan 'object'
        console.info(typeof restu)
        console.info(typeof budi)
    });

    it('should support instance of', () => {
        // instanceof menghasilkan boolean true atau false
        expect(restu instanceof Employee).toBe(true)
        expect(restu instanceof Manager).toBe(false)

        expect(budi instanceof Employee).toBe(false)
        expect(budi instanceof Manager).toBe(true)
    });
});