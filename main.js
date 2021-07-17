  setTimeout( slide_1, 1500 );
        function slide_1 ( ) {
            $(".slide_1 .element_2").addClass('hideZoomOut');
            $(".slide_1 .element_2 img").removeClass('showZoomIn');
            $(".slide_1 .element_3").removeClass('hidden');
            $(".slide_1 .element_3 img").addClass('showZoomIn');

            setTimeout( slide_2, 2000 );
        }

        function slide_2 ( ) {
            $(".slide_1 .element_1").css('height','140');
            $(".slide_1 .element_3 .minutes").css('height','81px').css('top','50px');
            $(".slide_1 .element_4").addClass('hideZoomOut').removeClass('showZoomIn');
            $(".slide_1 .element_5").removeClass('hidden').removeClass('hideZoomOut').addClass('showZoomIn');
            $('.slide_1 .element_6').css({'top':'218px','left':'98px','width':'103px','height':'29px'});
            setTimeout( slide_3, 2000 );
        }

        function slide_3 ( ) {
            $(".slide_1 .element_4").removeClass('hideZoomOut').addClass('showZoomIn');
            $(".slide_1 .element_5").removeClass('showZoomIn').addClass('hideZoomOut');

            $(".slide_1 .element_1").css('height', '174px');
            $(".slide_1 .element_3 .minutes").css('height','105px').css('top','59px');
            $('.slide_1 .element_6').css({'top':'197px','left':'89px','width':'117px'});

            setTimeout(function(){
                $(".slide_1 .element_2").removeClass('hideZoomOut');
                $(".slide_1 .element_2 img").addClass('showZoomIn');
                $(".slide_1 .element_3").addClass('hidden');
                $(".slide_1 .element_3 img").removeClass('showZoomIn');

                setTimeout( slide_1, 2000 );
            }, 1500);
        }
