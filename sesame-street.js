// Apply a style to the #cookie-header <h2> element:
document.addEventListener('DOMContentLoaded', function() {
    var cookieHeader = document.querySelector('#cookie-header');
    cookieHeader.style.color = '#f7f16d';
});

// Count the cookie list items and set the #cookie-count <p> element:
document.addEventListener('DOMContentLoaded', function() {
    var cookieList = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCount = cookieList.length;
    var cookieCountText = `There ${cookieCount === 1 ? 'is' : 'are'} ${cookieCount} cookie${cookieCount === 1 ? '' : 's'} in the cookie jar!`;
    var cookieCountParagraph = document.querySelector('#cookie-count');
    cookieCountParagraph.textContent = cookieCountText;
    cookieCountParagraph.style.color = '#f7f16d';
});

//  Remove the last cookie every 30 seconds and update #cookie-count:
document.addEventListener('DOMContentLoaded', function() {
    var cookieList = document.querySelectorAll('#cookie-jar .cookie');
    var cookieCountParagraph = document.querySelector('#cookie-count');

    function removeLastCookie() {
        if (cookieList.length > 0) {
            var lastCookie = cookieList[cookieList.length - 1];
            lastCookie.parentNode.removeChild(lastCookie);
            cookieList = document.querySelectorAll('#cookie-jar .cookie');
            cookieCountParagraph.textContent = `There ${cookieList.length === 1 ? 'is' : 'are'} ${cookieList.length} cookie${cookieList.length === 1 ? '' : 's'} in the cookie jar!`;
        }
    }

    setInterval(removeLastCookie, 30000);
});