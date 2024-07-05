function myFunction() {
    var x = document.getElementById("passW");
    
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
} 