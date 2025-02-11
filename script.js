const list = document.getElementById("list");

// Add event listener in the capture phase
list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`Clicked on: ${event.target.textContent}`);
    }
}, true); // Use capture phase



function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

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
