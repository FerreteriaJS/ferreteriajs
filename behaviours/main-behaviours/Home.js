async function loadCarousel() {
    let response = await fetch('../../components/main-components/main-sub-components/Carousel.html');
    const carousel = await response.text();
    const carouselElement = document.getElementById('main-home-carousel');

    carouselElement.innerHTML = carousel;
    response = await fetch('../../assets/json/CarouselImages.json'); 
    const carouselImages = await response.json();
    //console.log(carouselImages);
    
    const carrouselContainer = document.getElementById("carousel-inner");
    response = await fetch('../../components/main-components/main-sub-components/CarouselCard.html');
    const templateCarouselCardHTML = await response.text();
    const carouselHTML = [];
    carouselImages.forEach(carouselImage => {
        const carouselCardHTML = templateCarouselCardHTML.replace('{source}', carouselImage.source).replace('{name}', carouselImage.name);
        carouselHTML.push(carouselCardHTML);
    });
    carouselHTML[0] = carouselHTML[0].replace('carousel-item', 'carousel-item active');
    //console.log(carouselHTML)
    carrouselContainer.innerHTML = carouselHTML.join('');
}

loadCarousel();