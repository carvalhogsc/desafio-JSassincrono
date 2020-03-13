    function checkAge(idade) {
        return new Promise(function(resolve, reject) {
            if(idade => 18 ) {
                setInterval(resolve, 2000);
            } else {
                setInterval(reject,2000);
            }
        })
    }

    checkAge(20)
        .then(function(){
            console.log("older than 18 years")
        })
        .catch(function(){
            console.log('under 18 years')
        })