function tog(){
    var x = document.getElementById("pw")
    if(x.getAttribute("type") == "password"){
        x.setAttribute("type","text")
    }else{
        x.setAttribute("type","password")
    }
}

const userlogin= () =>{
    let form = document.getElementById("form1");
    let username = form["username"].value;
    let password = form["password"].value;
    fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
    username: username,
    password: password,
    })
    })
    .then(res => res.json())
    .then(json =>console.log(json));
    return false;
}
