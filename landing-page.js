const backgroundimageContainer =document.querySelector('.background-image-Container');
const firstimage = document.querySelector('.first-image');
const secondimage = doucument.querySelector('.second-image');
const thirdimage = doucement.querySelector('.third-image');

window.addEventListener('scroll',() => {
    const scorllY =window.scrollY;
    const ContainerHeight = backgroundimageContainer.clientHeight;

    if(scorllY > ContainerHeight/3){
        firstimage.style.opacity= 1;
        secondimage.style.opacity=0;
        thirdimage.style.opacity=0;
    }else if (scorllY <=( ContainerHeight/3)*2){
        firstimage.style.opacity= 0;
        secondimage.style.opacity=1;
        thirdimage.style.opacity=0;
    }else   {
        firstimage.style.opacity= 0 ;
        secondimage.style.opacity=0;
        thirdimage.style.opacity=1;
    }
});