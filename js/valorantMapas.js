$.get("https://valorant-api.com/v1/maps", function () {
    console.log("success valo");
})
    .done(function (resp) {
        console.log("second Success");
        for (var mapa of resp.data) {

            console.log(mapa.displayName);
            var displayName = '';
            var displayIcon = '';
            if (mapa.displayIcon !== null) {
                $('#mapasValo').append(`<div class="col" style="padding-top:10px"><div class="card" style="width: 18rem;">
                <img src="${mapa.displayIcon}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-black">${mapa.displayName}</p>
                    </div>
                </div>
                </div>`);
            }

        }
    })



    .fail(function () {
        console.log("error valo");
    });