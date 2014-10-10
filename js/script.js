
function home() {
    'use strict';
    document.getElementById('home').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
}

function about() {
    'use strict';
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
}