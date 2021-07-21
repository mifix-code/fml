function openLogin() {
    document.getElementById('loginApp').style.display = "block";
    document.getElementById('aboutApp').style.display = "none";
}

function finishLogin() {
    document.getElementById('userName').innerHTML = "Username : " + document.getElementById('userNameField').value;
    document.getElementById('userName').style.display = "block"
    document.getElementById('loginApp').style.display = "none";
    document.getElementById('virusApp').style.display = "block";
}