$(document).ready(function(){
    var searchPlace = $('.search_form_input');
    var searchBtn = $('.search_form_btn');
    var toggleBtn = $('.header_toggle');
   

    function BurgerMenu(){
    let nav = $('.header-nav_mobile');
    let pop = $('.header-popup');
    nav.slideToggle(300);
    pop.slideToggle(300);
    searchPlace.slideToggle(300);
    
    };

    $('.block_title').click(function(event){
        $(this).toggleClass('.actv').next().slideToggle(300);
    });

    $(window).ready(function(){

        function h1(){
            $('.promo_item_h1').addClass('promo_item_h1-active');
        };
        setTimeout(h1,10);

        function h2(){
            $('.promo_item_h2').addClass('promo_item_h2-active');
        };
        setTimeout(h2,2500);

        function h3(){
            $('.promo_item_h3').addClass('promo_item_h3-active');
        };
        setTimeout(h3,2500);
        
        function Rocket(){
            $('.promo_item_rocket').addClass('promo_item_rocket-active');
        };
        setTimeout(Rocket,4700);

        function RocketNone(){
            $('.promo_item_rocket').removeClass('promo_item_rocket-active');
        };
        setTimeout(RocketNone,9500);
        
        function ActiveLogin(){
            $('.promo_item_login').addClass('active');
        }
        setTimeout(ActiveLogin,3500);

       });
    
   
    
    function Search(){
        searchPlace.fadeToggle(1000);
    };


    searchBtn.on('click', function(){
        Search();
    
    });
    toggleBtn.on('click', function(){
        BurgerMenu();
    });
});



    var btn_prev = document.querySelector('#gallery .buttons .prev');
    var btn_next = document.querySelector('#gallery .buttons .next');
    var images = document.querySelector('#gallery .photo');
    var img = document.querySelectorAll('.show');
    var size = document.querySelector('#gallery').clientWidth;
    var slideIndex = 0,
        posInit = 0,
        posX1 = 0,
        posX2 = 0,
        posFinal = 0,
        trfRegExp = /[-0-9.]+(?=px)/;
    let isSlide = false;
    let posRes = size * 0.2;
    var i = 1;
    
    function Jump() {
        images.addEventListener('transitionend', function () {
            img[i].id === "last" ? i = 8 : i;
            img[i].id === "first" ? i = 1 : i;
            images.style.transition = "none";
            images.style.transform = 'translateX(' + (-i * size) + 'px)';
        });
    }
    function Prev() {
        i <= 0 ? false : i--;
        images.style.transition = "transform .4s ease-in-out";
        images.style.transform = 'translateX(' + (-i * size) + 'px)';
        Jump();
    };
    function Next() {
        let max = img.length;
        i >= max - 1 ? false : i++;
        images.style.transition = "transform .4s ease-in-out";
        images.style.transform = 'translateX(' + (-i * size) + 'px)';
        Jump();
    };
    function Gets() {
        let evt = getEvent();
        posInit = posX1 = evt.clientX;
        isSlide = true;
    };
    function Lets() {
        let evt = getEvent();
        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;
        style = images.style.transform,
            transform = +style.match(trfRegExp)[0];
        if (isSlide === true) {
            images.style.transform = 'translateX(' + (transform - posX2) + 'px)';
        }
    };
    function Out() {
        posFinal = posInit - posX1;
        if (Math.abs(posFinal) > posRes) {
            if (posInit < posX1) {
                Prev();
            } else if (posInit > posX1) {
                Next();
            } else {
                return
            }
        }
        images.style.transition = "transform .2s ease-in-out";
        images.style.transform = 'translateX( ' + (-i * size) + 'px)';
        Jump();
    
        if (isSlide === true) {
            isSlide = false;
        }
    };
    function Event() {
        images.addEventListener("touchstart", Gets);
        images.addEventListener("touchmove", Lets);
        images.addEventListener("touchend", Out);
        images.addEventListener("mousedown", Gets);
        images.addEventListener("mousemove", Lets);
        images.addEventListener("mouseup", Out);
    };
    getEvent = function () {
        return event.type.search('touch') !== -1 ? event.touches[0] : event;
    }
    
    btn_next.onclick = function () {
        btn_next.setAttribute("disabled", "disabled");
        setTimeout(() => {
            btn_next.removeAttribute("disabled");
        }, 500)
        Next();
    }
    btn_prev.onclick = function () {
        btn_prev.setAttribute("disabled", "disabled");
        setTimeout(() => {
            btn_prev.removeAttribute("disabled");
        }, 500)
        Prev();
    }
    
    window.onload = function () {
        images.style.transform = 'translateX( ' + (-i * size) + 'px)';
        $('.show').width('10%');
        $('.photo').width('1000%');
        size = $('.show').width();
        $('.show img').width('wh');
        Event();
    };
    $(window).resize(function () {
        $('.show').width('10%');
        $('.photo').width('1000%');
        size = $('.show').width();
        $('.show img').width('wh');
        images.style.transform = 'translateX( ' + (-i * size) + 'px)';
    });
    $(function () {
        Timer = setInterval(Next, 8000);
        $('#gallery').hover(function () {
            clearInterval(Timer);
        }, function () {
            Timer = setInterval(Next, 8000);
        });
    });
    