const shareBtn = document.querySelector('.share-btn');
const shareSection = document.querySelector('.media-platforms');
const shareArrow = document.querySelector('.pointing-arrow');

shareBtn.addEventListener('click', function(){
    if(shareSection.classList.contains('hide-element')) {
        shareSection.classList.remove('hide-element')
        shareArrow.classList.remove('hide-element')
    } else {
        shareSection.classList.add('hide-element')
        shareArrow.classList.add('hide-element')        
    }
})