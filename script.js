window.onload = function() {

    // Video
    var venus = document.getElementById("venus");
    var mercury = document.getElementById("mercury");
    var earth = document.getElementById("earth");
    var mars = document.getElementById("mars");
    var jupiter = document.getElementById("jupiter");
    var saturn = document.getElementById("saturn");
    var uranus = document.getElementById("uranus");
    var neptune = document.getElementById("neptune");
    var manifesto = document.getElementById("manifesto");

    // Buttons
    var playButton = document.getElementById("play-pause");
    var muteButton = document.getElementById("mute");
    var fullScreenButton = document.getElementById("full-screen");
    var videoScreenone = document.getElementById("venus");
    var videoScreentwo = document.getElementById("mercury");
    var videoScreenthree = document.getElementById("earth");
    var videoScreenfour = document.getElementById("mars");
    var videoScreenfive = document.getElementById("jupiter");
    var videoScreensix = document.getElementById("saturn");
    var videoScreenseven = document.getElementById("uranus");
    var videoScreeneight = document.getElementById("neptune");

    // Sliders
    var seekBar = document.getElementById("seek-bar");
    var volumeBar = document.getElementById("volume-bar");



    //This is custom for clicking screen itself - playing and pausing on click



    videoScreenone.addEventListener("click", function(){

        if (venus.paused == true) {
            // Play the video
            venus.play();
            mercury.play();
            earth.play();
            mars.play();
            jupiter.play();
            saturn.play();
            uranus.play();
            neptune.play();
            manifesto.play();//

            // Update the button text to 'Pause'
            playButton.innerHTML = "Pause";



        } else {
            // Pause the video
            venus.pause();
            mercury.pause();
            earth.pause();
            mars.pause();
            jupiter.pause();
            saturn.pause();
            uranus.pause();
            neptune.pause();
            manifesto.pause();//

            // Update the button text to 'Play'
            playButton.innerHTML = "Play";


        }

    });

    videoScreentwo.addEventListener("click", function(){

        if (venus.paused == true) {
            // Play the video
            venus.play();
            mercury.play();
            earth.play();
            mars.play();
            jupiter.play();
            saturn.play();
            uranus.play();
            neptune.play();
            manifesto.play();//

            // Update the button text to 'Pause'
            playButton.innerHTML = "Pause";





        } else {
            // Pause the video
            venus.pause();
            mercury.pause();
            earth.pause();
            mars.pause();
            jupiter.pause();
            saturn.pause();
            uranus.pause();
            neptune.pause();
            manifesto.play();//

            // Update the button text to 'Play'
            playButton.innerHTML = "Play";


        }

    });





    // Event listener for the play/pause button

    playButton.addEventListener("click", function() {
        if (venus.paused == true) {
            // Play the video
            venus.play();
            mercury.play();
            earth.play();
            mars.play();
            jupiter.play();
            saturn.play();
            uranus.play();
            neptune.play();
            manifesto.play();//

            // Update the button text to 'Pause'
            playButton.innerHTML = "Pause";

            /* this is for the timer

             var time = 0; //this part's custom - need to load 0 and start time, then when paused, keep displaying the time

             $(function(){
             $('#currentTime').html($('#video-container').find('#video').get(time).load());
             $('#currentTime').html($('#video-container').find('#video').get(time).play());
             })
             setInterval(function(){
             $('#currentTime').html($('#video-container').find('#video').get(time).currentTime);
             $('#totalTime').html($('#video-container').find('#video').get(time).duration);
             },100)

             */



        } else {
            // Pause the video
            venus.pause();
            mercury.pause();
            earth.pause();
            mars.pause();
            jupiter.pause();
            saturn.pause();
            uranus.pause();
            neptune.pause();
            manifesto.pause();//

            // Update the button text to 'Play'
            playButton.innerHTML = "Play";

            /* this is for timer too

             var time = currentTime;

             $(function(){
             $('#currentTime').html($('#video-container').find('#video').get(time).load());
             $('#currentTime').html($('#video-container').find('#video').get(time).play());
             }) */


        }





    });


    // Event listener for the mute playButton
    muteButton.addEventListener("click", function() {

        if	(venus.volume == 1) {

            venus.volume = 0;
            mercury.volume = 0;
            earth.volume = 0;
            mars.volume = 0;
            jupiter.volume = 0;
            saturn.volume = 0;
            uranus.volume = 0;
            neptune.volume = 0;
            manifesto.colume = 0;
            muteButton.innerHTML = "Unmute";

        }


        else if (venus.volume == 0)  {

            venus.volume = 1;
            mercury.volume = 1;
            earth.volume = 1;
            mars.volume = 1;
            jupiter.volume = 1;
            saturn.volume = 1;
            uranus.volume = 1;
            neptune.volume = 1;
            manifesto.volume = 1;
            muteButton.innerHTML = "Mute";


        }



    });

    // Event listener for the seek bar
    seekBar.addEventListener("change", function() {
        // Calculate the new time
        var time = venus.duration * (seekBar.value / 100);

        // Update the video time
        venus.currentTime = time;
        mercury.currentTime = time;
        earth.currentTime = time;
        mars.currentTime = time;
        jupiter.currentTime = time;
        saturn.currentTime = time;
        uranus.currentTime = time;
        neptune.currentTime = time;
        manifesto.currentTime = time;//
    });


    // Update the seek bar as the video plays
    venus.addEventListener("timeupdate", function() {
        // Calculate the slider value
        var value = (100 / venus.duration) * venus.currentTime;

        // Update the slider value
        seekBar.value = value;
    });

    // Pause the video when the seek handle is being dragged
    seekBar.addEventListener("mousedown", function() {
        venus.pause();
        mercury.pause();
        earth.pause();
        mars.pause();
        jupiter.pause();
        saturn.pause();
        uranus.pause();
        neptune.pause();
        manifesto.pause();//
    });

    // Play the video when the seek handle is dropped
    seekBar.addEventListener("mouseup", function() {

        //adding conditional to only do this if the video is currently playihng


        if (playButton.innerHTML == "Pause") {
            // Play the video
            venus.play();
            mercury.play();
            earth.play();
            mars.play();
            jupiter.play();
            saturn.play();
            uranus.play();
            neptune.play();
            manifesto.play();//
        }

    });

}
