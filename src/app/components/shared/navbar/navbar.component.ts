import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(
    ) {}

    async ngOnInit() {
        $(document).ready(function() {
            $('.dropdown-toggle').click(function() {
                var $lefty = $('.options-menu');
                var _width = '150px';
                $lefty.animate({ width: $lefty.css('width') == _width ? '0px' : _width }, 1000);
            });
            $('.customer-logos').slick({
                slidesToShow: 6,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: false,
                dots: false,
                pauseOnHover: true,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4
                    }
                }, {
                    breakpoint: 520,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
            $('.link-see').on('click', function(e) {
                e.preventDefault();
                var aTag = $($(this).attr('href'));
                $('html,body').animate({scrollTop: aTag.offset().top}, 1500);
                return false;
            });
            $(window).scroll(function() {
                if ($(this).scrollTop() > $('#content').offset().top - 1) {
                    //add effect / animation
                    $('.navbar-default').stop(true).animate({top: 0}, 800);
                } else {
                    if ($(this).scrollTop() < $('#content').offset().top - 1) {
                        $('#navbar-collapse').removeClass('in');
                        $('.navbar-default').stop(true).animate({top: '-51px'}, 800);
                    }
                }
            });

        });
    }

    autoScroll() {
        $('html,body').animate({scrollTop: $('#content').offset().top}, 1500);
    }

}
