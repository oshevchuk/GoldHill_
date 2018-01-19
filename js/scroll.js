/**
 * Created by Matrix on 09.01.2018.
 */
var $animatedElements=$('.animated');
var $window=$(window);
$window.on('scroll', check_view);

function check_view() {
    var window_height=$window.height();
    var window_top_position=$window.scrollTop();
    var window_bottom_position=(window_top_position+window_height);

    $.each($animatedElements, function () {
        var delta=100;
        var $element=$(this);
        var element_height=$element.outerHeight();
        var element_top_position=$element.offset().top;
        var element_bottom_position=(element_top_position+element_height);

        if((element_bottom_position>=window_top_position) && (element_top_position<=window_bottom_position)){
            setTimeout(function () {
                $element.addClass('show');
            }, 400);
        }else{
            // $element.removeClass('show');
        }
    })
}

$window.on('scroll resize');
$window.trigger('scroll');