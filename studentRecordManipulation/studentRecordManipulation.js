const fs = require('fs');
/*
'use strict'; 
const fs = require('fs');
process.stdin.resume(); process.stdin.setEncoding('utf-8');

let inputString = ''; let currentLine = 0;
process.stdin.on('data', function(inputStdin) { inputString += inputStdin;
});

process.stdin.on('end', function() { inputString = inputString.split('\n'); main();
});

function readLine() { return inputString[currentLine++];
}
*/

//----------------------------------------------------------------------------------------
//Exercise starts here:
function manipulateStudentRecord(obj, operation, prop, newValue) {
    // write your code here
    let newObj;

    if (operation === 'delete') { 
        newObj = {...obj};
        if (prop !== null) {
            delete newObj[prop];
        }
        return newObj;
    }

    if (operation === 'edit') { 
        newObj = {...obj};
        if (prop !== null && prop == 'city') { 
            newObj[prop] = newValue;
        }
        return newObj;
    }
}
//Exercise finishes here
//----------------------------------------------------------------------------------------

function main() { 
    const inputString = fs.readFileSync('input.txt', 'utf-8');
    const inputLines = inputString.trim().split('\n');
    
    const n = parseInt(inputLines[0].trim(), 10); 
    const obj = {};

    for (let i = 1; i <= n; ++i) { 
        const params = inputLines[i].trim().split(' ');
        const k = params[0]; 
        const v = params[1]; 
        obj[k] = v;
    }

    const params = inputLines[n + 1].trim().split(' '); 
    const result = manipulateStudentRecord(obj, params[0], params[1], params[2]);

    // Print the result directly to the console
    Object.keys(result).sort().forEach(k => { 
        console.log(`${k} ${result[k]}`);
    }); 
}
main();
/*
function main() { 
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH); 

    const n = parseInt(readLine().trim(), 10); 

    const obj = {};

    for (let i = 0; i < n; ++i) { 
        const params = readLine().trim().split(' ');
        const k = params[0]; 
        const v = params[1]; 
        obj[k] = v;
    }

    const params = readLine().trim().split(' '); 
    const result = manipulateStudentRecord(obj, params[0], params[1], params[2]);

    Object.keys(result).sort().forEach(k => { 
        ws.write(`${k} ${result[k]}\n`);
    }); 
    ws.end();
}
*/