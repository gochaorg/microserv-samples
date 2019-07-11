function cmdLineArgsKeyValues() {
    const kv : { [key:string]:string } = {}
    var key : string | undefined = undefined
    process.argv.forEach( arg => {
        if( key ){
            kv[key] = arg
            key = undefined
        }else{
            if( arg.startsWith('--') && arg.length>2 ){
                key = arg.substr(2)
            }
        }
    })
    return kv
}
const cmdLineArgs = cmdLineArgsKeyValues()
function tryInteger(str:string, defaultValue:number):number {
    if( str ){
        const n = parseInt(str,10)
        if( n!==NaN )return n
        return defaultValue
    }
    return defaultValue
}

export const values = {
    host : cmdLineArgs['host'] || '0.0.0.0',
    port : tryInteger( cmdLineArgs['port'] || '3000', 3000 )
}
