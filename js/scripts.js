$(function () {
    var carouselList = $('#carousel ul');

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

    setInterval(next, 4000);

    $('#next').click(function () {
        next();
    });
    $('#previous').click(function () {
        prev();
    });
});
