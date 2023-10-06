var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
color="black";
width="5";


canvas = document.getElementById("myCaanvas");
ctx= canvas.getContext("2d");

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth - width_of_line;
    ctx.moveTo(last_position_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x; 
    last_position_of_touch_y = current_position_of_touch_y; 
    
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokesStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_x, last_position_of_y);
        ctx.lineTo(current_position_mouse_x, current_position_of_mouse_y);
        
    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y; 
}

