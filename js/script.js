let cercles = document.querySelectorAll(".cercle")
cercles.forEach(cercle => {
    cercle.addEventListener("click", function(){
        cercle.classList.toggle('active')
    })
})