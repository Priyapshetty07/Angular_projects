console.log(`taking cmd line arg for node js program`);
process.argv.forEach((ele, index, arr) => {
    console.log(`${ele} --> ${index}`);
})

const args = process.argv.slice(3);
console.log(args);