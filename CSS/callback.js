function register(){
    //console.log("Registered");
    setTimeout(()=>{
        console.log("Registered");
    },1000);
}
function SendEmail(){
    //console.log("EMAIL SENT");
    setTimeout(()=>{
        console.log("EMAIL SENT");
    },2000);
}
function login(){
    //console.log("Logined");
    setTimeout(()=>{
        console.log("Logined");
    },3000);
}
function getUserData(){
    //console.log("User Data Fetched");
    setTimeout(()=>{
        console.log("User Data Fetched");
    },4000);
}
function displayData(){
    //console.log("Data displayed");
    setTimeout(()=>{
        console.log("Data displayed");
    },5000);
}

function waitForFewMilliSeconds(){
    const ms = 5000+new Date().getTime();
    while(ms>new Date()){
        // do nothing
    }
}

register();
SendEmail();
login();
getUserData();
displayData();