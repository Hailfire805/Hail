// Title: FizzBuzz
let check1 = 3, check2 = 5, check3 = check1 * check2, startValue = 0, stopValue = 0, f = "Fizz", b = "Buzz", fb = "FizzBuzz"

// Setup function to check if n modulus num2 is an integer
const ic = (n, num2) => { //Int. Check
    return (n % num2) == 0
}
// Quick console.log
const c = txt => {
    console.log(txt)
}
// Setup function to use if-else statements to check if n is a multiple of 15, 3, or 5 and if not returns n
const ifT = n => { // If Test
    if (ic(n, check3)) {
        c(fb)
    } else if (ic(n, check1)) {
        c(f);
    } else if (ic(n, check2)) {
        c(b);
    } else {
        c(n);
    }
}
// Setup function using a switch statement to check if n is a multiple of 15, 3, or 5 and if not returns n
const swiT = n => { // Switch Test
    switch (n) {
        case intCheck(n, 15):
            c(fb)
            break;
        case intCheck(n, 3):
            c(f)
            break;
        case intCheck(n, 5):
            c(b);
            break;
        default:
            c(n);
    }
}

const parseTest = (n = 100, q1 = 3, q2 = 5, args = Array(...Number), argText = Array(...String)) => {
    let output = [];

    for (let i = 0; i <= n; i++) {
        if (ic(i,q1)) {
            output.push(f)
        }
        if (ic(i,q2)) {
            output.push(b);
        }
        if (args.length > 0) {
            for (let j = 0; j < args.length; j++) {
                if (ic(i,args[j])) {
                    output.push(argText[j])
                }
            }
        }
        if (output.length == 0) {
            c(i)
        }
        if (output.length >= 1) {
            let joined = output.join(" ")
            joined.replace(" ", "")
            output = [];
            c(joined)
        }
    }
}

parseTest(100, 3, 5, [15, 20], ["Snapple", "Crackle"])
