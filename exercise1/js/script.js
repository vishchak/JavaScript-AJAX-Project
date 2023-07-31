function ajaxFunctionDown() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            document.getElementById('result').innerHTML = xmlHttp.responseText;
        }
    }

    xmlHttp.open("GET", "/resources/down.txt", true);
    xmlHttp.send(null);
}


function ajaxFunctionUp() {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4) {
            document.getElementById('result').innerHTML = xmlHttp.responseText;
        }
    }

    xmlHttp.open("GET", "/resources/up.txt", true);
    xmlHttp.send(null);
}
