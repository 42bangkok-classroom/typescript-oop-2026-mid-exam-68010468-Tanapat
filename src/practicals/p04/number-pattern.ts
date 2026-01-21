// Write your code below
export{}

const input: number = Number(process.argv[2]);
console.log(typeof(input))
let plus = 0;
if (isNaN(input) || input < 1 || !Number.isInteger(input)) {
} else {

    for (let i = input; i > 0; i--) {
        let line = ""
        plus += 1;
        for(let k = i; k > 0; k--){
            line += " "
        }
        for (let j = plus ; j > 0; j--) {
            line += j;
        }
        console.log(line)
    }
}