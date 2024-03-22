function firstAndLast(input) {
    let k = Number(input.shift());

    let firstK = input.slice(0, k);
    let lastK = input.slice(input.length - k, input.length);

    console.log(firstK.join(` `));
    console.log(lastK.join(` `));
}
firstAndLast([3,
    6, 7, 8, 9]
)