const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];


function generatePassword(length){
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}



function showPassword(){
    const passLenInput = document.getElementById("passLen")
    const passLen = parseInt(passLenInput.value, 10);
    if (passLen > 20){
        document.getElementById("p1").textContent = "The length should less equal than 20"
        document.getElementById("p2").textContent = ""
        return ;
    }
    if (passLen < 0){
        document.getElementById("p1").textContent = "The length should greater than 0"
        document.getElementById("p2").textContent = ""
        return ;
    }
    const p1 = generatePassword(passLen)
    const p2 = generatePassword(passLen)
    document.getElementById("p1").textContent = p1
    document.getElementById("p2").textContent = p2
}







