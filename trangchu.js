
$(document).ready(function() {
    setInterval(function() {
        $('.autonext').trigger('click');
    }, 3000);
    $('.dashboard1').click(function(e) {
        e.preventDefault();
        $('.dashboard1').addClass('active1');
        $('.dashboard2').removeClass('active1');
        $('.dashboard3').removeClass('active1');
    });
    $('.dashboard2').click(function(e) {
        e.preventDefault();
        $('.dashboard2').addClass('active1');
        $('.dashboard1').removeClass('active1');
        $('.dashboard3').removeClass('active1');
    });
    $('.dashboard3').click(function(e) {
        e.preventDefault();
        $('.dashboard3').addClass('active1');
        $('.dashboard1').removeClass('active1');
        $('.dashboard2').removeClass('active1');
    });


});

const swiper1 = new Swiper('.swiper-container1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // using "ratio" endpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        968: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        }
    }
});

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}
$('.bosung').click(function(e) {
    e.preventDefault();
    $('.shop_attributes').removeClass('d-none');
    $('#danhgia').addClass('d-none');
    $('.bosung').removeClass('btn-light');
    $('.bosung').addClass('btn-dark');
    $('.danhgia').addClass('btn-light');
    $('.danhgia').removeClass('btn-dark');

});
$('.danhgia').click(function(e) {
    e.preventDefault();
    $('.shop_attributes').addClass('d-none');
    $('#danhgia').removeClass('d-none');
    $('.danhgia').addClass('btn-dark');
    $('.danhgia').removeClass('btn-light');
    $('.bosung').removeClass('btn-dark');
    $('.bosung').addClass('btn-light');
});