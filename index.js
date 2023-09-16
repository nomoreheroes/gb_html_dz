function dz(usrname)
{
    console.log("Привет, " + usrname);   
}


window.onload = function()
{
    dz(prompt("Как вас зовут?"));
}