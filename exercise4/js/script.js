$(document).ready(() => {
    $('#retrieve-resources').click(() => {
        let displayResources = $('#display-resources');

        $.ajax({
            type: "GET",
            url: "/resources/resource.json",
            dataType: "json",
            success: result => {
                let output =
                    "<table class='table'>" +
                    "<thead>" +
                    "<tr><th>Name</th><th>Provider</th></tr></thead><tbody>";
                for (let i in result) {
                    output += "<tr><td>" + result[i].name + "</td>" +
                        "<td>" + result[i].provider + "</td></tr>";
                }
                output += "</tbody></table>";

                displayResources.html(output);
            },
            error: () => {
                displayResources.html("<p>Error retrieving resources.</p>");
            }
        });
    });
});
