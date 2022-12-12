    import Vimeo from "@vimeo/player";
    import throttle from "lodash.throttle";
    
    const iframe = document.querySelector("iframe");
    console.log(iframe);
    const player = new Vimeo(iframe) ;
    console.dir(player);
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

  const  TIME_WATCH = 'videoplayer-current-time';

   const setWatchingTime = ({ seconds }) => {
    localStorage.setItem(TIME_WATCH, seconds);
   
};

player.on('timeupdate', throttle(setWatchingTime, 1000));
player.setCurrentTime(localStorage.getItem(TIME_WATCH));
// 23443