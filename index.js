function degToCompass(num) {
    while( num < 0 ) num += 360 ;
    while( num >= 360 ) num -= 360 ;

    val= Math.round( (num - 11.25 ) / 22.5 ) ;

    arr=["N","NNE","NE","ENE","E","ESE", "SE",
          "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"] ;

    return arr[ Math.abs(val) ] ;
}

function degToArrow(num) {
    while( num < 0 ) num += 360 ;
    while( num >= 360 ) num -= 360 ;

    val= Math.round( (num - 11.25 ) / 22.5 ) ;

    arr=["from-0-deg","from-23-deg","from-45-deg","from-68-deg","from-90-deg","from-113-deg", "from-135-deg",
          "from-158-deg","from-180-deg","from-203-deg","from-225-deg","from-248-deg","from-270-deg","from-293-deg","from-313-deg","from-336-deg"] ;

    return arr[ Math.abs(val) ] ;
}
