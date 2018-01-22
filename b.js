// console.log(a);

function add(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('Loi');
    return Promise.resolve(a + b);
}

async function add3Numbers(a, b, c) {
    const t1 = await add(a, b);
    throw new Error('Khong thich lam tiep');
    const t2 = await add(t1, c);
    return t2;
}

add3Numbers(4, 5, 6)
.then(total => console.log(total))
.catch(err => console.log(err.message))
