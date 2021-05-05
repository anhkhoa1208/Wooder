
$(document).ready(function () {
    //question
    $(document).on('click', '.accordion', function () {
        $('.accordion').not($(this)).removeClass('active');
        $('.page').not($(this).next()).slideUp();
        $(this).next().slideToggle();
        $(this).addClass('active');
    })

    //tag
    let news = $('.news__list');
    $(document).on('click', '.news__tag-text .tag', function () {
        $('.tag').removeClass('active');
        $(this).addClass('active');
        let index = $(this).index();
        // console.log(news.eq(index));
        let itemNews = news.eq(index);
        $('.news__list').removeClass('active');
        itemNews.addClass('active');
    })

    //tab
    $(document).on('keypress', 'input[name="tabs"]', function (e) {
        if (e.keyCode == 13) {
            let value = $(this).val();
            // console.log(value);
            let textTab = '<div class="tab__list-text"> ' + value + ' <span class="remove">x</span></div>';
            console.log(textTab);
            $('.tabs .tab__list').append(textTab);
            $(this).val('');
        }

    })
    $(document).on('click', '.tabs .tab__list .tab__list-text .remove', function () {
        $(this).parent().remove();
    });

    //video popup
    let video = $('.video__item-img');
    let popup_video = $('.popup-video');
    let close_popup_video = $('.popup-video .close');
    let iframe_video = $('.popup-video iframe');

    video.on('click', function (e) {
        e.stopPropagation();
        let video_id = $(this).attr('data-video-id'),
            iframe_src = `https://www.youtube.com/embed/${video_id}?autoplay=1`;
        iframe_video.attr('src', iframe_src);
        popup_video.addClass('active');
    });
    function hideModal() {
        iframe_video.attr('src', '');
        popup_video.removeClass('active');
    }
    close_popup_video.click(function () {
        hideModal();
    });
    iframe_video.click(function (e) {
        e.stopPropagation();
    });
    $(document).on('click', function () {
        hideModal();
    })

    //Carousel slider
    let $carousel = $('.slider__item-wrap');
    $carousel.flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        on: {
            ready: function () {
                let dotted = $('.flickity-page-dots');
                paging = $('.slider__bottom-paging .dotted');
                dotted.appendTo(paging);
            },
            change: function (index) {
                let number = $('.slider__bottom-paging .number');
                let indexPage = index + 1;
                number.text(indexPage.toString().padStart(2, 0))
            }
        }
    })
    $('.slider__bottom-control .--prev').on('click', function () {
        $carousel.flickity('previous');
    })
    $('.slider__bottom-control .--next').on('click', function () {
        $carousel.flickity('next');
    })

    //Carousel photo (lazyLoad)
    let $photo = $('.photo__item');
    $photo.flickity({
        cellAlign: 'left',
        freeScroll: true,
        contain: true,
        // wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
    });

})

