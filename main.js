function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotePoses);
    }
    
    function draw(){
    image(video,0,0,600,500);
   fill("#000000")
   stroke("#FF0000")
   circle(leftwristx,leftwristy,20);

   integer=Number(leftwristy);
   remove_decimal=floor(integer);
   volume=remove_decimal/1000;
   document.getElementById("volume").innerHTML="volume="+volume;
   song.setVolume(volume);
    }

    score_wrist=("");
    status=("");


    song("");
    leftwristx=0;
    leftwristy=0;
    rightwristx=0;
    rightwristy=0;
    
    function preload(){
    song=loadSound("music.mp3");
    song1=loadSound("Mann Mera - Gajendra Verma 320Kbps.mp3.crdownload");
    
    }
    
    function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
    }
    
    function modelLoaded(){
    console.log('poseNet is intialized')
    }
    
    function gotPoses(results){
    if(results.length>0){
    console.log(results);
    leftwristx=results[0].pose.leftwrist.x;
    leftwristy=results[0].pose.leftwrist.y;
    rightwristx=results[0].pose.rightwrist.x;
    rightwristy=results[0].pose.rightwrist.y;
    console.log("leftwristx="+leftwristx);
    console.log("leftwristy="+leftwristy);
    console.log("rightwristx="+rightwristx);
    console.log("rightwristy="+rightwristy);
    }
    }