//Data tab block
const tabsBTN = document.querySelectorAll(".service-list");
const tabsItems = document.querySelectorAll(".service-content");

tabsBTN.forEach(function(item) {
    item.addEventListener("click", function(){
        let currentBTN = item;
        let tabId = currentBTN.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (! currentBTN.classList.contains('active')){
            tabsBTN.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBTN.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

// Filter block
const list = document.querySelector('.creative-design-item');
const items = document.querySelectorAll('.table-hover-item');
const listItems = document.querySelectorAll('.creative-design-list')

function filter() {
    list.addEventListener('click', event => {
        const targeId = event.target.dataset.id
        const target = event.target

        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')

        switch(targeId) {
            case 'all':
                getItems('table-hover-item')
                break;
            case 'graphic-design':
                getItems(targeId)
                break
            case 'web-design':
                getItems(targeId)
                break
            case 'landing-page':
                getItems(targeId)
                break
            case 'wordpress':
                getItems(targeId)
                break
        }
    })
}
filter()
function getItems(className) {
    items.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

//Load more block "Our amazing"
window.onload = function () {
    let box=document.getElementsByClassName('table-hover-item');
    let btn=document.getElementById('button');
    for (let i=12;i<box.length;i++) {
        box[i].style.display = "none";
    }

    let countD = 12;
    btn.addEventListener("click", function() {
        let box=document.getElementsByClassName('table-hover-item');
        countD += 12;
        if (countD <= box.length){
            for(let i=0;i<countD;i++){
                box[i].style.display = "block";
            }

    let more = document.querySelectorAll('.table-btn-load');

    for (var i = 0; i < more.length; i++) {
    more[i].addEventListener('click', function() {
    let showPerClick = 1;
    
    let hidden = this.parentNode.querySelectorAll('div.table-hover-item');
    for (let i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

    hidden[i].classList.remove('table-hover-item');
    }
  });
}
        }
    })
}

// Courusel block
$(document).ready(function(){
    $('.sl').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.sl2'
    })

    $('.sl2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sl',
        centerMode: false,
        focusOnSelect: true,
        arrow: false,
    })
})
