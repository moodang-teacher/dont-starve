const topCharacterSlider = new Swiper(".top-character-slider", {
    // loop: true,
    spaceBetween: 40,
    effect: "slide",
    slidesPerView: 8,
    spaceBetween: 20,
    navigation: {
        prevEl: "#character .btn-prev",
        nextEl: "#character .btn-next",
    },
});