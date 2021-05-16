let users = [
    { name: "‘Ivan’", age: 18 },
    { name: "‘Petr’", age: 12 },
    { name: "‘Sidor’", age: 25 },
    { name: "‘Jake’", age: 15 },
    { name: "‘Per’", age: 32 },
    { name: "‘Alls’", age: 52 },
    { name: "‘DEn’", age: 11 },
    { name: "‘Err’", age: 45 },
    { name: "‘Vam’", age: 10 }
]



function arrFilter(arr, direction = 0) {
    let data = direction ? [] : {old: [], young: []};

    return arr.reduce((_d, item) => {
        const stat = item.age >= 18;

        if(!direction){
            _d[ stat ? 'old' : 'young' ].push(item);
        } else {
            (stat === !!(direction + 1)) && _d.push(item);
        }
        return _d;

    }, data);

}

let young = arrFilter(users, -1);
let old = arrFilter(users, 1);
let all = arrFilter(users, 0);


console.log(young, ':young');
console.log(old, ':old');
console.log(all, ':all');