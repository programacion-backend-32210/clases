function operacionCompleja() {
    let result = 0
    console.log('PID child: ', process.pid);
    for (let i = 0; i < (5e9); i++) {
        result += i
    }
    
    process.send(result)
}