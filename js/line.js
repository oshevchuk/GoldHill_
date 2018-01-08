/**
 * Created by Matrix on 08.01.2018.
 */

function createLine(x1,y1, x2,y2){
    var length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    var angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    var transform = 'rotate('+angle+'deg)';

    var line = $('<div>')
        .appendTo('#page')
        .addClass('line')
        .css({
            'position': 'absolute',
            'transform': transform
        })
        .width(length)
        .offset({left: x1, top: y1});

    return line;
}

$(document).ready(function(){

});

$('.lined').click(function (e) {
    console.log($(e.target));
    // console.log($(e.target).offset().left);
});