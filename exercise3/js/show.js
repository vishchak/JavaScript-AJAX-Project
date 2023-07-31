function showPreferred(sel, divName) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState === 4) {
            document.getElementById(divName).innerHTML = xmlHttp.responseText;
        }
    }

    xmlHttp.open("GET", "AJAXQuestions" + sel + ".html", true);
    xmlHttp.send(null);
}