const os=require('os')
//info about current user


//method returns the system uptime in second



const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    uptime:os.uptime(),
    user:os.userInfo()
}
console.log(currentos)