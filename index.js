const getSum = (mass) => {
    return mass.reduce((sum, item) => {
        return ( sum += typeof item === 'number' ? item : 0 );
    }, 0);
}

const sum = getSum([10, true, 25, 'asdf', 100, 'string']);

console.log(sum)