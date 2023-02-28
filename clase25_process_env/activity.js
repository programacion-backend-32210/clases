
process.on('exit', code => {
    if (code == -4) console.log('Invalid Parameters');
})


function listNumbers(...numbers) {
    const types = numbers.map(n => typeof n )
    console.log(types);

    if(types.includes('string')) process.exit(-4)
}

listNumbers(1, 2, 2, "a", true)

