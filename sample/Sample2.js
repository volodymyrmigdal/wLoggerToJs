
if( typeof module !== 'undefined' )
require( 'wloggertojs' );

var _ = wTools;

var logger = new wLogger();

var loggerToJstructure = new wLoggerToJs({ output : null });
logger.outputTo( loggerToJstructure, { combining : 'rewrite', leveling : 'delta' } );
logger._dprefix = '*'
logger.up( 2 );
logger.log( 'message' );

console.log( loggerToJstructure.toJson() );

// [
//   [
//     [ "**message" ]
//   ]
// ]

console.log( loggerToJstructure.currentContainer );

// [ '**message' ]
