//Search  input result

$('#search_btn').click(
    function () {

        var search_term= $('#search_input').val();

        $.ajax({
            method: "POST",
            crossDomain: true,
            url: "http://navitamalik22.pythonanywhere.com/workout/search/",
            dataType: "json",
            async: true,
            data: { search_term: search_term},
            success: function (data) {
                // var img =data[0].url;
                // document.write(JSON.stringify(img));
                $("#fitness_api_block").html('');

                for (var i = 0; i < data.length; i++) {
                    var counter = i;
                    // var id=counter.categories.name;
                    var title = data[i].title;
                    var description = data[i].description;
                    var image = data[i].image;
                    // document.write(image);

                    // var inp = $("#input").val();

                    $("#fitness_api_block").append(
                        "            <div class=\"card bg-white m-2\" style=\"border-left: #7cb3fb 5px solid\">\n" +
                        "                    <div class=\"card-body d-flex \">\n" +
                        "\n" +
                        "                        <img src=\"" + image + "\" class=\"img_god img-responsive rounded img-fluid\" style=\"height: 200px;width: 200px\">\n" +
                        "\n" +
                        "                        <div class=\"p-3\">\n" +
                        "                            <h4 class=\"head_god\">" + title + "</h4>\n" +
                        "\n" +
                        "                            <p class=\"pt-2 para_god\">" + description + "</p>\n" +
                        "                        </div>\n" +
                        "\n" +
                        "\n" +
                        "                    </div>\n" +
                        "\n" +
                        "\n" +
                        "                </div>"
                    );

                }

            },
            error: function () {
                console.log('sorry');
            }
        });


    }
);

//BMI


$('#inputWeight').on('input', function () {

    var w = $("#inputWeight").val();
    var h = $("#inputHeight").val();

    $('#BMI_output').html('BMI : ' + w / (h * h));

});

$('#inputHeight').on('input', function () {

    var w = $("#inputWeight").val();
    var h = $("#inputHeight").val();

    $('#BMI_output').html('BMI : ' + w / (h * h));
});


//FOR text limit on heading in mobile for ...

function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0, maxLength) + '...';
    }
    return truncated;
}


if (screen.width <= 768) {
    // download complicated script
    // swap in full-source images for low-source ones

    document.querySelector('.head_god').innerText = truncateText('.head_god', 75);

}


// On home page health data loads and health in navbar is selected


$.ajax({
    method: "GET",
    crossDomain: true,
    url: "http://navitamalik22.pythonanywhere.com/health/all/",
    dataType: "json",
    async: true,

    success: function (data) {
        // var img =data[0].url;
        // document.write(JSON.stringify(img));
        for (var i = 0; i < data.length; i++) {
            var counter = i;
            // var id=counter.categories.name;
            var title = data[i].title;
            var description = data[i].description;
            var image = data[i].image;
            // document.write(image);

            // var inp = $("#input").val();

            $("#fitness_api_block").append(
                "            <div class=\"card bg-white m-2\" style=\"border-left: #7cb3fb 5px solid\">\n" +
                "                    <div class=\"card-body d-flex \">\n" +
                "\n" +
                "                        <img src=\"" + image + "\" class=\"img_god img-responsive rounded img-fluid\" style=\"height: 200px;width: 200px\">\n" +
                "\n" +
                "                        <div class=\"p-3\">\n" +
                "                            <h4 class=\"head_god\">" + title + "</h4>\n" +
                "\n" +
                "                            <p class=\"pt-2 para_god\">" + description + "</p>\n" +
                "                        </div>\n" +
                "\n" +
                "\n" +
                "                    </div>\n" +
                "\n" +
                "\n" +
                "                </div>"
            );

        }

    },
    error: function () {
        console.log('sorry');
    }
});

// For news api

$.ajax({
    method: "GET",
    crossDomain: true,
    url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=f5cc4721175d4fcfa81615d0c3f4adf6&category=health",
    dataType: "json",
    async: true,

    success: function (data) {
        // var img =data[0].url;
        // document.write(JSON.stringify(img));

        var articlearray = data.articles;

        for (var i = 0; i < 7; i++) {
            var counter = i;
            // var id=counter.categories.name;
            var Gtitle = articlearray[i].title;
            var url = articlearray[i].url;
            var urlToImage = articlearray[i].urlToImage;
            // document.write(image);

            // var inp = $("#input").val();

            $("#google_news_block").append(
                "<div class=\"card-body d-flex \">\n" +
                "                        <img src=\""+urlToImage+"\" class=\"img_god img-responsive rounded img-fluid\"\n" +
                "                             style=\"height: 100px;width: 100px\">\n" +
                "\n" +
                "                        <div class=\"p-3\">\n" +
                "                            <h6 class=\"head_god\">"+Gtitle+"</h6>\n" +
                "\n" +
                "                        </div>\n" +
                "\n" +
                "                    </div>"
            );

        }

    },
    error: function () {
        console.log('sorry');
    }
});


// on health click listener

// $("#health_link").css("color","red");


$('#health_link').click(
    function () {
        // document.write('a');

        $("#health_link").addClass("active");
        $("#nutrition_link").removeClass("active");
        $("#workout_link").removeClass("active");
        $.ajax({
            method: "GET",
            crossDomain: true,
            url: "http://navitamalik22.pythonanywhere.com/health/all/",
            dataType: "json",
            async: true,

            success: function (data) {
                // var img =data[0].url;
                // document.write(JSON.stringify(img));
                $("#fitness_api_block").html('');

                for (var i = 0; i < data.length; i++) {
                    var counter = i;
                    // var id=counter.categories.name;
                    var title = data[i].title;
                    var description = data[i].description;
                    var image = data[i].image;
                    // document.write(image);

                    // var inp = $("#input").val();
                    $("#fitness_api_block").append(
                        "            <div class=\"card bg-white m-2\" style=\"border-left: #7cb3fb 5px solid\">\n" +
                        "                    <div class=\"card-body d-flex \">\n" +
                        "\n" +
                        "                        <img src=\"" + image + "\" class=\"img_god img-responsive rounded img-fluid\" style=\"height: 200px;width: 200px\">\n" +
                        "\n" +
                        "                        <div class=\"p-3\">\n" +
                        "                            <h4 class=\"head_god\">" + title + "</h4>\n" +
                        "\n" +
                        "                            <p class=\"pt-2 para_god\">" + description + "</p>\n" +
                        "                        </div>\n" +
                        "\n" +
                        "\n" +
                        "                    </div>\n" +
                        "\n" +
                        "\n" +
                        "                </div>"
                    );

                }

            },
            error: function () {
                console.log('sorry');
            }
        })

    }
);


// on workout click listener

$('#workout_link').click(
    function () {
        // document.write('a');

        $("#health_link").removeClass("active");
        $("#nutrition_link").removeClass("active");
        $("#workout_link").addClass("active");

        $.ajax({
            method: "GET",
            crossDomain: true,
            url: "http://navitamalik22.pythonanywhere.com/workout/all/",
            dataType: "json",
            async: true,

            success: function (data) {
                // var img =data[0].url;
                // document.write(JSON.stringify(img));
                $("#fitness_api_block").html('');

                for (var i = 0; i < data.length; i++) {
                    var counter = i;
                    // var id=counter.categories.name;
                    var title = data[i].title;
                    var description = data[i].description;
                    var image = data[i].image;
                    // document.write(image);

                    // var inp = $("#input").val();
                    $("#fitness_api_block").append(
                        "            <div class=\"card bg-white m-2\" style=\"border-left: #7cb3fb 5px solid\">\n" +
                        "                    <div class=\"card-body d-flex \">\n" +
                        "\n" +
                        "                        <img src=\"" + image + "\" class=\"img_god img-responsive rounded img-fluid\" style=\"height: 200px;width: 200px\">\n" +
                        "\n" +
                        "                        <div class=\"p-3\">\n" +
                        "                            <h4 class=\"head_god\">" + title + "</h4>\n" +
                        "\n" +
                        "                            <p class=\"pt-2 para_god\">" + description + "</p>\n" +
                        "                        </div>\n" +
                        "\n" +
                        "\n" +
                        "                    </div>\n" +
                        "\n" +
                        "\n" +
                        "                </div>"
                    );

                }

            },
            error: function () {
                console.log('sorry');
            }
        })

    }
);


// on nutrition click listener

$('#nutrition_link').click(
    function () {
        // document.write('a');

        $("#nutrition_link").addClass("active");
        $("#health_link").removeClass("active");
        $("#workout_link").removeClass("active");
        $.ajax({
            method: "GET",
            crossDomain: true,
            url: "http://navitamalik22.pythonanywhere.com/nutrition/all/",
            dataType: "json",
            async: true,

            success: function (data) {
                // var img =data[0].url;
                // document.write(JSON.stringify(img));
                $("#fitness_api_block").html('');

                for (var i = 0; i < data.length; i++) {
                    var counter = i;
                    // var id=counter.categories.name;
                    var title = data[i].title;
                    var description = data[i].description;
                    var image = data[i].image;
                    // document.write(image);

                    // var inp = $("#input").val();
                    $("#fitness_api_block").append(
                        "            <div class=\"card bg-white m-2\" style=\"border-left: #7cb3fb 5px solid\">\n" +
                        "                    <div class=\"card-body d-flex \">\n" +
                        "\n" +
                        "                        <img src=\"" + image + "\" class=\"img_god img-responsive rounded img-fluid\" style=\"height: 200px;width: 200px\">\n" +
                        "\n" +
                        "                        <div class=\"p-3\">\n" +
                        "                            <h4 class=\"head_god\">" + title + "</h4>\n" +
                        "\n" +
                        "                            <p class=\"pt-2 para_god\">" + description + "</p>\n" +
                        "                        </div>\n" +
                        "\n" +
                        "\n" +
                        "                    </div>\n" +
                        "\n" +
                        "\n" +
                        "                </div>"
                    );

                }

            },
            error: function () {
                console.log('sorry');
            }
        })

    }
);



