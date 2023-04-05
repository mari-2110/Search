const search = document.querySelector('#search');
const istanbul = document.querySelectorAll('.istanbul')

search.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();

    istanbul.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})