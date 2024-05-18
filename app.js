(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
   })();
   function showMore() {
    var moreText = document.getElementById("more");
    var btnText = document.querySelector(".read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Read More";
    }
}
