function mouse_over(element){
    var curr_src = element.childNodes[1].childNodes[1].childNodes[1].src;
    element.childNodes[1].childNodes[1].childNodes[1].src = curr_src.replace('(2)','(1)');
}

function mouse_out(element){
    var curr_src = element.childNodes[1].childNodes[1].childNodes[1].src;
    element.childNodes[1].childNodes[1].childNodes[1].src = curr_src.replace('(1)','(2)');
}
