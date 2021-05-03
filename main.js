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
bg_img="racing.gif";
hello="car 1 is the winner!!!!!!!!";
hi="car 2 is the winner!!!!!!!!!!!";
function alarm(){
    bg_img_tag= new Image();
    bg_img_tag.onload=uploadImage;
    bg_img_tag.src=bg_img;

    car1_img_tag= new Image();
    car1_img_tag.onload=uploadCar1;
    car1_img_tag.src=car1_img;

    car2_img_tag= new Image();
    car2_img_tag.onload=uploadCar2;
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
window.addEventListener("keydown",my_keyDown);
function my_keyDown(e){
    keyDown=e.keyCode
    if(keyDown=='38'){
        car1_up();
    console.log("up arrow key pressed");
    }
    if(keyDown=='40'){
        car1_down();
    console.log("down arrow key pressed");
    }
    if(keyDown=='37'){
        car1_left();
    console.log("left arrow key pressed");
    }
    if(keyDown=='39'){
        car1_right();
    console.log("right arrow key pressed");
    }
    if(keyDown=='87'){
        car2_up();
    console.log("w key pressed");
    }
    if(keyDown=='83'){
        car2_down();
    console.log("s key pressed");
    }
    if(keyDown=='65'){
        car2_left();
    console.log("a key pressed");
    }
    if(keyDown=='68'){
        car2_right();
    console.log("d key pressed");
    }

function car1_up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("When up arrow key is pressed="+car1_x+"-"+car1_y);
        uploadImage();
        uploadCar1();
        uploadCar2();
    }
    }
    function car1_down(){
        if(car1_y<=500){
            car1_y=car1_y+10;
            console.log("When down arrow key is pressed x="+car1_x+"~ y="+car1_y);
            uploadImage();
            uploadCar1();
        uploadCar2();
        }
    }
    function car1_left(){
        if(car1_x>=0){
            car1_x=car1_x-10;
            console.log("When down arrow key is pressed x="+car1_x+"~ y="+car1_y);
            uploadImage();
            uploadCar1();
        uploadCar2();
        }
    }
    function car1_right(){
        if(car1_x<=700){
            car1_x=car1_x+10;
            console.log("When down arrow key is pressed x="+car1_x+"~ y="+car1_y);
            uploadImage();
            uploadCar1();
        uploadCar2();
        }  
    }
    function car2_up(){
        if(car2_y>=0){
            car2_y=car2_y-10;
            console.log("When up arrow key is pressed="+car2_x+"-"+car2_y);
            uploadImage();
            uploadCar1();
            uploadCar2();
        }
        }
        function car2_down(){
            if(car2_y<=500){
                car2_y=car2_y+10;
                console.log("When down arrow key is pressed x="+car2_x+"~ y="+car2_y);
                uploadImage();
                uploadCar1();
        uploadCar2();
            }
        }
        function car2_left(){
            if(car2_x>=0){
                car2_x=car2_x-10;
                console.log("When down arrow key is pressed x="+car2_x+"~ y="+car2_y);
                uploadImage();
                uploadCar1();
        uploadCar2();
            }
        }
        function car2_right(){
            if(car2_x<=700){
                car2_x=car2_x+10;
                console.log("When down arrow key is pressed x="+car2_x+"~ y="+car2_y);
                uploadImage();
                uploadCar1();
                uploadCar2();
            }  
        }
        if(car1_x>700){
            document.getElementById("a").innerHTML=hello;
            console.log(hello);
        }
        if(car2_x>700){
            document.getElementById("a").innerHTML=hi;
            console.log(hi);
        }
}
