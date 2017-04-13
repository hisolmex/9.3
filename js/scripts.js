$(function () {
    var carouselList = $('#carousel ul'),
        interval;

    function next() {
        carouselList.animate({'marginLeft': -900}, 500, moveFirstSlideAfterLast);
    }

    function moveFirstSlideAfterLast() {
        var lastItem    = carouselList.find('li:last');
        var firstItem   = carouselList.find('li:first');

        lastItem.after(firstItem);
        carouselList.css({'marginLeft': 0});
    }

    function prev() {
        moveLastSlideBeforeFirst();
        carouselList.css('marginLeft', -900);

        carouselList.animate({'marginLeft': 0}, 500);
    }

    function moveLastSlideBeforeFirst() {
        var lastItem    = carouselList.find('li:last');
        var firstItem   = carouselList.find('li:first');

        firstItem.before(lastItem);
    }

    interval = setInterval(next, 4000);

    $('#next').click(function () {
        clearInterval(interval);
        next();
        interval = setInterval(next, 4000);
    });
    $('#previous').click(function () {
        clearInterval(interval);
        prev();
        interval = setInterval(next, 4000);
    });
});
