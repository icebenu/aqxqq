window.addEventListener('load', function () {
    var videos = ['o8Sp0E1JNqY', 'ZVgYeFv0iuI', '6flqGxjsE3M'];
    var divider = document.querySelector('.remove-cont');
    if (window.innerWidth <= 769)
        divider.classList.remove('max-container');
    else if (window.innerWidth >= 770)
        divider.classList.add('max-container');
    while (videos.length > 3) {
        videos.pop();
    }
    ;
    function getThumbnail(videoId) {
        return "https://img.youtube.com/vi/" + videoId + "/maxresdefault.jpg";
    }
    ;
    document.querySelector('.videos-overlay__around').addEventListener('click', function () {
        var iframe = document.querySelector('.videos-overlay iframe');
        iframe.parentNode.removeChild(iframe);
        document.querySelector('.videos-overlay').classList.remove('active');
    });
    videos.forEach(function (video, i) {
        document.querySelector(".thumbnail--" + (i + 1)).setAttribute('src', getThumbnail(video));
        document.querySelector(".play-icon--" + (i + 1)).addEventListener('click', function () {
            var iFrame = document.createElement('iframe');
            var ytOpt = [['src', "https://www.youtube.com/embed/" + video], ['title', 'YouTube video player'], ['frameborder', '0'], ['allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'], ['allowfullscreen']];
            ytOpt.forEach(function (item) {
                iFrame.setAttribute(item[0], item[1]);
            });
            document.querySelector('.videos-overlay__iframe-wrapper').appendChild(iFrame);
            document.querySelector('.videos-overlay').classList.add('active');
        });
    });
    window.addEventListener('resize', function (event) {
        var timer = null;
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (window.innerWidth <= 769)
                divider.classList.remove('max-container');
            else if (window.innerWidth >= 770)
                divider.classList.add('max-container');
        }, 250);
    });
});
