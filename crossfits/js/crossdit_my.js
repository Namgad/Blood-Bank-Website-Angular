//Quote


var arr=[];

$(document).ready(function(){
    $.ajax({
        method: "GET",
        crossDomain: true,
        url: "https://type.fit/api/quotes",
        dataType: "json",
        async: true,
        headers: {
        },
        success: function(data) {


            for(x in data)
            {
                arr.push(data[x].text);
                // var a=data[x].text;
                // var b=data[x].author;
                // document.getElementById("d1").innerHTML+=a;
                // document.getElementById("d2").innerHTML+=b;
            }
        },
        error: function() {
            infoContent = "<div>Sorry, data is not coming through. Refresh and try again.</div>";
        }

    });

    var count=0;
    setInterval(function() {

        // heroVel2 = heroVel1;
        // console.log(arr[count]);
        $('.quote').html(arr[count]);
        count++;
    }, 5000);


});

// Nav bar clicks

