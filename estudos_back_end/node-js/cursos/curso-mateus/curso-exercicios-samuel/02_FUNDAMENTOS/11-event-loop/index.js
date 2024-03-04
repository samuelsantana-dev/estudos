function a(){
    console.log("Primeira funçao a")
}

function b(){
    console.log("Primeira funçao b")
}

function c(){
    console.log("Primeira funçao c")
    b()
    a()
}

c()
/*
b()
c()
a()
*/