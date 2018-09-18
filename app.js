//App.JS file. Created on 2018-09-18 for project: 
let anchors = document.getElementsByTagName('a');
let body = document.getElementsByTagName('body')[0];
let response = "";
let href = "";

//TODO
/*
*   Add a check to see if it's a query string (regex to cehck if it contains "?" maybe?) - if it's true - don't pre-load for no until I can work out the bugs.
*   check if other scripts work normally
*   IMPORTANT - Add a flag so you can enable animation delay with user input on how long the animation should be so on bigger sites (default 550ms) - the animation delay distracts the user so they AJAX can load the page faster. MAKE SURE it updates the CSS variable for the animation time so they match up.
*    Add a check so see if it's a mailto or tel: link.
*/
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('mouseover', function () {
        href = anchors[i].getAttribute("href");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                response = this.responseText;
            }
        };
        xhttp.open("GET", href, true);
        xhttp.send();
    });

    anchors[i].addEventListener('mouseup', function (e) {
        if(response != ""){
            e.preventDefault();
            body.innerHTML = response;
            history.pushState("", "", href);
        }
    });

    anchors[i].addEventListener('touchend', function (e) {
        e.preventDefault();
        href = anchors[i].getAttribute("href");
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                body.innerHTML = this.responseText;
                history.pushState("", "", href);
                console.log('ajax fired');
            }
        };
        xhttp.open("GET", href, true);
        xhttp.send();
    });
}