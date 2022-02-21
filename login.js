function login(){
    console.log("Excuting login function");
    let username = $("#txtUsername").val();
    let password = $("#txtPassword").val();

    console.log(username)
    console.log(password)

    let users=readUsers();
    let flag=false;
    
    console.log(users)
    for(let i=0;i<users.length;i++){
        if(username===users[i].email && password===users[i].password){
            console.log("I found it")
            flag=true;
            window.location="user.html";
        }
    }
    if(!flag){
        console.log("Invalid credentials");
        $("#alertError").removeClass("hide");
        setTimeout(function(){
            $("#alertError").addClass("hide");
        }, 3000);
    }
}

function init(){
    console.log("Loging script")
    $("#btnLogin").click(login);
}

window.onload=init;