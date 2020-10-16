$(function () {

    // Fixed Header
    let header = $("#header");
    let intro = $("#header__home");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkScroll(scrollPos, introH);
    });

    function checkScroll(){
        if(scrollPos > introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    };

    // Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // Отменяет стандартное поведение ссылки при клике.

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top; // Отступ от элемента до верха.

        $("html, body").animate({
            scrollTop: elementOffset - 10
        }, 700);

        // Закрытие менюшки при выборе пункта
        let nav = $("#header__nav");
        nav.removeClass("active");
    });

    // TestimonialsSlider: https://kenwheeler.github.io/slick/
      let slider = $('#about__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

      let sliderr = $('#clients__inner').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      });

      worksFilter(); // Смена блоков работ
      function worksFilter(){
        $('#all').on('click', function(){
          $('.gallery-div').show();
        });
        $('#branding').on('click', function(){
            $('.gallery-div').hide();
            $('.branding').show();
        });
        $('#development').on('click', function(){
            $('.gallery-div').hide();
            $('.development').show();
        });
        $('#strategy').on('click', function(){
            $('.gallery-div').hide();
            $('.strategy').show();  
        });
        $('#design').on('click', function(){
            $('.gallery-div').hide();
            $('.design').show();  
        });
    };

    work();
    function work(){
        $('.work-li#all').css({'color': 'red'});
        $('.work-li').on('click',function(){
            $('.work-li').css({'color': '#555'});
            $(this).css({'color': 'red'});
        })
    };
});

document.getElementById("burger").addEventListener("click", function(){
    document.getElementById("header__nav").classList.toggle("active");
})
