const shareBtn = document.querySelector('.share-btn');
const shareSection = document.querySelector('.media-platforms');
let shareArrow

if(window.innerWidth > 740) {
    shareArrow = document.querySelector('.pointing-arrow');
}

function showElement(elementsList) {
    elementsList.forEach(element => {
        if(element) element.classList.add('hide-element')
    });
}

function removeElement(elementsList) {
    elementsList.forEach(element => {
        if(element) element.classList.remove('hide-element')
    });
}

shareBtn.addEventListener('click', function(){
    if(shareSection.classList.contains('hide-element')) {
        removeElement([shareSection, shareArrow])
    } else {
        showElement([shareSection, shareArrow])      
    }
})