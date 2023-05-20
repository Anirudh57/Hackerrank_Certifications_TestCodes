function getFixedCounter(k) {
    let myCounter = counter;
    return {
        increment: () => {
            myCounter.changeBy(k);
        },
        decrement: () => {
            myCounter.changeBy(-k);
        },
        getValue: () => {
            return myCounter.getValue();
        }
    }
}