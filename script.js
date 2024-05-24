// Search-Form
let searchForm = document.querySelector(".search-form")
let searchBtn = document.querySelector("#search-btn")

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active")
    shoppingCart.classList.remove("active")
    loginForm.classList.remove("active")
    navBar.classList.remove("active")
})

// shopping-cart
let shoppingCart = document.querySelector(".shopping-cart")
let cartBtn = document.querySelector("#cart-btn")

cartBtn.addEventListener("click", () => {
    shoppingCart.classList.toggle("active")
    searchForm.classList.remove("active")
    loginForm.classList.remove("active")
    navBar.classList.remove("active")
})

// login-form
let loginForm = document.querySelector(".login-form")
let loginBtn = document.querySelector("#login-btn")

loginBtn.addEventListener("click", () => {
    loginForm.classList.toggle("active")
    shoppingCart.classList.remove("active")
    searchForm.classList.remove("active")
    navBar.classList.remove("active")
})

// Nav-bar
let navBar = document.querySelector(".navbar")
let menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("active")
    loginForm.classList.remove("active")
    shoppingCart.classList.remove("active")
    searchForm.classList.remove("active")
})


window.onscroll = () => {
    searchForm.classList.remove("active")
    shoppingCart.classList.remove("active")
    loginForm.classList.remove("active")
    navBar.classList.remove("active")

}


//product-slider
var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },

    },
});


//review-slider
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },

    },
});