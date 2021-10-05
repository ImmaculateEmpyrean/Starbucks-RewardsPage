export default function alignToInnerGrid(){
    let elements = document.querySelectorAll('.align-to-inner-grid');
    let innerGridElement = document.querySelector('.inner-grid-start');
    elements.forEach(function(element){
        element.style.left = `${innerGridElement.offsetLeft}px`;
    });
}