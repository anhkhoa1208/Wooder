let lang = document.querySelector('.lang ');
let langCurrent = document.querySelector('.lang .lang__current span');
let langOpt = document.querySelector('.lang .lang__option')
let langItem = document.querySelectorAll('.lang .lang__option a');
lang.addEventListener('click', function (e) {
    e.stopPropagation();
    lang.classList.toggle('active');
});

langItem.forEach(function (item) {
    item.addEventListener('click', function () {
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan;
    })
})

document.addEventListener('click', function () {
    lang.classList.remove('active');
})

//add background header when scroll
let header = document.querySelector('Header');
// console.log(1);
let slider = document.querySelector('.slider');
let heightSlider = slider.clientHeight;
let heightHeader = header.clientHeight;

function changeBgHeader() {

    let scrollY = window.pageYOffset;
    // console.log(scrollY);
    if (scrollY > (heightSlider - heightHeader)) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}

let menus = document.querySelectorAll('header .menu a');
// let heightSection = document.querySelector('header').offsetHeight;

menus.forEach(function (element, index) {
    element.addEventListener('click', function (e) {
        e.preventDefault();
        let href = element.getAttribute('href');
        let className = href.replace('#', '');
        let section = document.querySelector('.' + className);
        let positionSetion = section.offsetTop;
        window.scrollTo({
            top: positionSetion - heightHeader
        })
        menus.forEach(function (menu_element, index) {
            menu_element.classList.remove('active');
        })
        element.classList.add('active');
    })
})


//BACK TO TOP
// let backtotop = document.querySelector('.totop');
// function showBackToTop() {
//     let scrollY = window.pageYOffset;
//     if (scrollY > 500) {
//         backtotop.classList.add('active');
//     }
//     else {
//         backtotop.classList.remove('active');
//     }
// }

// backtotop.addEventListener('click', function () {
//     window.scrollTo({
//         top: 0
//     })
// })

document.addEventListener('scroll', function () {
    changeBgHeader();
    // showBackToTop();
});

// let button_video = document.querySelectorAll('.video__item-img');
// let popup_video = document.querySelector('.popup-video');
// let close_popup_video = document.querySelector('.popup-video .close');
// let iframe = document.querySelector('.popup-video iframe');

// button_video.forEach(function (button) {
//     button.addEventListener('click', function () {
//         let video_id = button.getAttribute('data-video-id');
//         iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video_id + "?autoplay=1");
//         popup_video.style.display = 'flex';
//     });
// });

// close_popup_video.addEventListener('click', function () {
//     iframe.setAttribute('src', '');
//     popup_video.style.display = 'none';
// })

// document.querySelector('.popup-video').addEventListener('click', function (e) {
//     iframe.setAttribute('src', '');
//     popup_video.style.display = 'none';
// })


// let listItemSlider = document.querySelectorAll('.slider__item');
// let number = document.querySelector('.slider__bottom-paging .number');
// let dot_li = document.querySelectorAll('.slider__bottom-paging .dotted li');
// let currentSlider = 0;
// listItemSlider.forEach(function (itemSlider, index) {
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// })
// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }
// //default active
// showNumber(currentSlider + 1);
// dot_li[currentSlider].classList.add('is-selected');

// document.querySelector('.control__btn.--next').addEventListener('click', function () {
//     if (currentSlider < listItemSlider.length - 1) {
//         goto(currentSlider + 1);
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider + 1].classList.add('active');
//         // currentSlider++;
//     }
//     else {
//         goto(0);
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[0].classList.add('active');
//         // currentSlider = 0;
//     }
// })

// document.querySelector('.control__btn.--prev').addEventListener('click', function () {
//     if (currentSlider > 0) {
//         goto(currentSlider - 1);
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider - 1].classList.add('active');
//         // currentSlider--;
//     }
//     else {
//         goto(listItemSlider.length - 1);
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[listItemSlider.length - 1].classList.add('active');
//         // currentSlider = listItemSlider.length - 1;
//     }
// })

// function goto(index) {
//     listItemSlider[currentSlider].classList.remove('active');
//     listItemSlider[index].classList.add('active');
//     dot_li[currentSlider].classList.remove('is-selected');
//     dot_li[index].classList.add('is-selected');
//     currentSlider = index;
//     showNumber(currentSlider + 1);
// }

// dot_li.forEach(function (li, index) {
//     li.addEventListener('click', function () {
//         goto(index);
//     })
// })


// //TAB NEWS
// let tagText = document.querySelectorAll('.news__tag .tag');
// let tagList = document.querySelectorAll('.news__list');
// tagText.forEach(function (items, index) {
//     items.addEventListener('click', function () {
//         let tagID = index + 1;
//         tagText.forEach(function (tag) {
//             tag.classList.remove('active');
//         });
//         tagList.forEach(function (tags) {
//             tags.classList.remove('active');
//         });
//         this.classList.add('active');
//         document.querySelector('.news__list-' + tagID).classList.add('active');
//     })
// })

// //FAG ACCORDION
// let fag = document.getElementsByClassName('accordion');
// for (let i = 0; i < fag.length; i++) {
//     fag[i].addEventListener('click', function () {
//         console.log(fag[i]);
//         for (let j = 0; j < fag.length; j++) {
//             if (i !== j) {
//                 fag[j].nextElementSibling.style.maxHeight = null;
//                 fag[j].classList.remove('active');
//             }
//         }
//         this.classList.toggle('active');
//         let page = this.nextElementSibling;
//         if (page.style.maxHeight) {
//             page.style.maxHeight = null;
//         }
//         else {
//             page.style.maxHeight = page.scrollHeight + 'px';
//         }
//     })
// }

// popup img size
var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute('data-size').split('x');
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

initPhotoSwipeFromDOM('.gallery__grid');