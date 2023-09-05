$(document).ready(function() {


});

function setLanguageCookie(language) {
    document.cookie = `language=${language}; path=/`;
}


function getLanguageFromCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'language') {
            return value;
        }
    }
    return null;
}