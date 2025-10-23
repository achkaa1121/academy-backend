const mail = document.getElementById("username");
const pass = document.getElementById("password");


const but = document.getElementById("loginBtn");
const user = {
    Email: "admin@erxes.io",
    Password: 1234
};
// but.innerText = "Login";

const check = () => {
    console.log(mail,'mail')
        console.log(pass,'pass')
    if(mail !== user.Email || pass !== user.Password){
    window.alert("Your password or email is wrong")
}else{
    window.alert("Logged in succesfully")
}
}
but.addEventListener("click",check)
