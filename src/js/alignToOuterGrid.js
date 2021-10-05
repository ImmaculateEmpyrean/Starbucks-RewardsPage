export default function alignToOuterGrid(){
    let elements = document.querySelectorAll('.align-to-outer-grid');
    let outerGridElement = document.querySelector('.outer-grid-start');
    elements.forEach(function(element){
        element.style.left = `${outerGridElement.offsetLeft}px`;
    });
}