/**
 * Created by Matrix on 08.01.2018.
 */

function createLine(x1,y1, x2,y2){
    // console.log(">>>", x1,y1, x2, y2);

    if(y1-y2>=0){
        // y1+=6;
    }else{
        // y2-=9;
        y1+=6;
    }

    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';

    var line = $('<div>')
        .appendTo('#content')
        .addClass('line')
        .css({
            'position': 'absolute',
            'transform': transform
        })
        .width(length);

    if(y1-y2<=0){
        if(x1-x2<=0)
            line.offset({left: x1, top: y1});
        else
            line.offset({left: x2, top: y1});
    }else{
        if(x1-x2<=0)
            line.offset({left: x1, top: y2});
        else
            line.offset({left: x2, top: y2});
    }




    return line;
}

$(document).ready(function(){

});

$('.lined').click(function (e) {
    console.log(">>", $(this).data('target'));
    var line_to=$('#'+$(this).data('target'));
    line_to.show();
    
    createLine($(e.target).offset().left+9, $(e.target).offset().top+3, line_to.offset().left, line_to.offset().top+line_to.height()-7);
});

$(window).on('resize', function () {
    $('#content').find('.line').remove();
    $('.info').hide();
});