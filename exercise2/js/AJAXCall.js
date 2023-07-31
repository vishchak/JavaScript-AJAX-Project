function AJAXCall(file, divID) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            var xmlDoc;
            var titles, artist, country, price, year;
            var idx, retVal = "";

            // Parse the responseText as XML using DOMParser
            var parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlHttp.responseText, "text/xml");

            titles = xmlDoc.getElementsByTagName('TITLE');
            artist = xmlDoc.getElementsByTagName('ARTIST');
            country = xmlDoc.getElementsByTagName('COUNTRY');
            price = xmlDoc.getElementsByTagName('PRICE');
            year = xmlDoc.getElementsByTagName('YEAR');

            for (idx = 0; idx < titles.length; idx++) {
                retVal += "<tr>" +
                    "<td>" + titles[idx].childNodes[0].nodeValue + "</td>" +
                    "<td>" + artist[idx].childNodes[0].nodeValue + "</td>" +
                    "<td>" + country[idx].childNodes[0].nodeValue + "</td>" +
                    "<td>" + price[idx].childNodes[0].nodeValue + "</td>" +
                    "<td>" + year[idx].childNodes[0].nodeValue + "</td>" +
                    "</tr>";
            }

            document.getElementById(divID).innerHTML += "<table border='1'>" + retVal + "</table>";
        }
    }
    xmlHttp.open("GET", file, true);
    xmlHttp.send(null);
}
