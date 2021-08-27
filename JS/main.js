localstorage.setItem("pass", "password")
localstorage.setItem("account", "dude")

function clickers() {
    var x = document.getElementById("myPsw").value;
    var y = document.getElementById("MyAc").value;
    if ( x == "password" && y =="dude") {
         windows.location.href=""
    }
    else{
        function nah(){
            document.getElementByID("nope").innerHTML = "wrong password"
        }
    }

}