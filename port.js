const btns = document.querySelectorAll(".card-body a")
const texts = document.querySelectorAll(".card-text")
texts.forEach((text) => {
    text.style.display = "none"
})
btns.forEach((btn) => {
    let bolean = false//fenomenalno sto sam stavio ovde an ne u global scope
    btn.addEventListener("click", (e) => {
        bolean = !bolean
        const meta = e.currentTarget.parentElement
        const toggleText = meta.querySelector("p")
        console.log(bolean)
        if (bolean === true) {

            toggleText.style.display = "block"
            btn.innerHTML = "Show less"
        }
        else {
            toggleText.style.display = "none"
            btn.innerHTML = "Show more"

        }
    })
})