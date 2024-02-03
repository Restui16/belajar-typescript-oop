describe('Visibility', () => {
    class Counter {
        protected counter: number = 0

        public increment(){
            this.counter++
        }

        public getCounter(){
            return this.counter
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2    
        }
    }

    // public bisa diakses darimana saja
    it('should support private', () => {
        // private hanya bisa diakses oleh class itu sendiri
        const counter = new Counter()
        counter.increment()
        counter.increment()
        counter.increment()
        console.info(counter.getCounter())
    });

    it('should support protected', () => {
        // protected bisa diakses class itu sendiri dan class turunannya
        const counter = new DoubleCounter()
        counter.increment()
        counter.increment()
        counter.increment()
        console.info(counter.getCounter())
    });
});