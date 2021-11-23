const mainImage = document.querySelector('.gallery-image1 img');
const imagesToClick = document.querySelectorAll('.gallery img');

imagesToClick.forEach(img => img.addEventListener('click',changeImage));

function changeImage(event){

    imagesToClick.forEach(img => (img.style.opacity=1))

    console.log(event.target);
    event.target.style.opacity = 0.5;
    mainImage.src = event.target.src

    if  (event.target === mainImage){
        mainImage.src = 'img/Allalaaditud fail.jpg'
        mainImage.style.opacity=1;
    }
    
}

