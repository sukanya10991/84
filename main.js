canvas = document.getElementById('aargh');
ctx = canvas.getContext("2d");
car1_height=120;
car1_width=70;
car1_img="car1.png";
car1_x=10;
car1_y=10;
car2_height=120;
car2_width=70;
car2_img="car2.png";
car2_x=10;
car2_y=100;
bg_img="racing.png";
function alarm(){
    bg_img_tag= new Image();
    bg_img.onload=uploadImage;
    bg_img_tag.src=bg_img;

    car1_img_tag= new Image();
    car1_img.onload=uploadCar1;
    car1_img_tag.src=car1_img;

    car2_img_tag= new Image();
    car2_img.onload=uploadCar2;
    car2_img_tag.src=car2_img;
}
function uploadImage(){
    ctx.drawImage(bg_img_tag,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(car1_img_tag,car1_x,car1_y,car1_width,car1_height);
}
function uploadCar2(){
    ctx.drawImage(car2_img_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keyDown",my_keyDown);
function my_keypressed(e){
    keyDown=e.keyCode
    if(keyDown=='38'){
        car1_up();
    console.log=("up arrow key pressed");
    }
    if(keyDown=='40'){
        car1_down();
    console.log=("down arrow key pressed");
    }
    if(keyDown=='37'){
        car1_left();
    console.log=("left arrow key pressed");
    }
    if(keyDown=='39'){
        car1_right();
    console.log=("right arrow key pressed");
    }
    if(keyDown=='87'){
        car2_up();
    console.log=("w key pressed");
    }
    if(keyDown=='83'){
        car2_down();
    console.log=("s key pressed");
    }
    if(keyDown=='65'){
        car2_left();
    console.log=("a key pressed");
    }
    if(keyDown=='68'){
        car2_right();
    console.log=("d key pressed");
    }
}