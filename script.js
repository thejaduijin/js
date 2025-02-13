const list = document.getElementById("list");

// Add event listener in the capture phase
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
}, true); // Use capture phase


// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => func(...args), delay);
//     };
// }



function searchQuery(query) {
    console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(searchQuery, 300);

// Simulating fast typing
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app");
debouncedSearch("appl");
debouncedSearch("apple"); // Only this call executes after 300ms

const input = document.getElementById("input");

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay)
    }
}
function typing(event) {
    console.log(event.target.value);
}

const debouncedTyping = debounce(typing, 500);
input.addEventListener("input", debouncedTyping);



function throttle(func, interval) {
    let lastCall = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastCall >= interval) {
            func(...args);
            lastCall = now;
        }
    }
}

function logMove() {
    console.log("moved")
}

const throttleScroll = throttle(logMove,500);
window.addEventListener("mousemove", throttleScroll);


let arr = [7, 12, 1, 20];

function addMinus(arr) {
    let ansArr = [];
    for (let i = 0; i < arr.length; i++) {
        let test = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                ansArr.push(arr[j])
                test = false;
                break;
            }
            test = true;
        }
        if (test) {
            ansArr.push(-1)
        }
    }
    return ansArr;
}
console.log(addMinus(arr));




Array.prototype.myMap = function (callback) {
    let ansArr = [];
    for (let i = 0; i < this.length; i++) {
        let res = callback(this[i], i, this);
        ansArr.push(res);
    }
    return ansArr;
}

//    let arr = [7,12,1,20];
let data = arr.myMap((ele) => {
    return ele * 2
})
console.log(data)

let data2 = arr.map((ele) => {
    return ele * 2;
})
console.log(data2)