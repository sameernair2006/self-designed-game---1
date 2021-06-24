function level(){
    
    level1button.position(200,150);
    level2button.position(400,150);
    level3button.position(600,150);

    level1button.mousePressed(function(){ 
        flag = 2;
        level1button.hide();
        level2button.hide();
        level3button.hide();
    })

}