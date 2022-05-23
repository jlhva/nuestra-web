navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
    $.get( `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=c89034788035313982116048a28f8e4b`, function() {
    console.log( "success" );
})
.done(function(data) {
    console.log( "second success" );
    console.log(JSON.stringify(data.main.temp));
    $('#uwu').append(`Temperatura: ${data.main.temp}`)
})
.fail(function(error) {
    console.log(error);
});
if('geolocation' in navigator) {
    console.log("U w U")
    
} else {
    console.log("O w O")
}
});