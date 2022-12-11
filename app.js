function joined(){
    document.getElementById("title").innerText = "Thanks for joining the mster class";
    document.getElementById("btn").style.display = 'none';
}
function usaToInr(){
    let usd = document.getElementById("usd").value;
    document.getElementById("inr").innerText = Math.floor(usd * 81.68)
}