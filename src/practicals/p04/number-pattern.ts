// Write your code below
export{}

const input: number = Number(process.argv[2]);
console.log(typeof(input))
if (isNaN(input) || input < 1 || !Number.isInteger(input)) {
    process.exit()
} else {

    for (let i = input; i > 0; i--) {
        let line = ""
        for(let k = i; k > 0; k--){
            line += " "
        }
        for (let j = 0 ; j < i; j++) {

            line += j;
        }
        console.log(line)
    }
}