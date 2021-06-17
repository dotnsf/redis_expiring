//. app.js

var express = require( 'express' ),
    redis = require( 'redis' ),
    app = express();

var settings = require( './settings' );

//. env values
var settings_redis_server = 'REDIS_SERVER' in process.env ? process.env.REDIS_SERVER : ( settings.redis_server ? settings.redis_server : 'redisserver' );
var settings_redis_port = 'REDIS_PORT' in process.env ? process.env.REDIS_PORT : ( settings.redis_port ? settings.redis_port : 6379 );

//. setup redis
var redisClient = redis.createClient({
  host: settings_redis_server,
  port: settings_redis_port
});

//. enable routing
app.use( express.Router() );

//. top page
var key = 'key';
app.get( '/', function( req, res ){
  res.contentType( 'application/json; charset=utf8' ) ;
  if( redisClient ){
    redisClient.get( key, function( err, v ){
      var value = JSON.parse( JSON.stringify( v ) );
      if( err || !value ){
        if( err ){ console.log( { err } ) };
        value = ( new Date() ).toISOString().replace( /T/, ' ' ).replace( /\..+/, '' );  //. YYYY-MM-DD hh:nn:ss
        redisClient.set( key, value, 'EX', 60 * 10 ); //. 10min
      }

      res.write( JSON.stringify( { value: value } ) );
      res.end();
    });
  }else{
    res.status( 400 );
    res.write( JSON.stringify( 'redis not ready' ) );
    res.end();
  }
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

