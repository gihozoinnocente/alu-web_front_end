function countPrimeNumbers() {
    let count = 0;

    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) count++;
    }

    return count;
}

const startTime = performance.now();

setTimeout(() => {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }

    const endTime = performance.now();
    console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
}, 0);
