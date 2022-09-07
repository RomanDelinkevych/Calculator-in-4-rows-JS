document.querySelector("#allButtons").addEventListener("click", function (e) {
    if (e.target.textContent == "=") return document.querySelector("#mainLine").textContent = eval(document.querySelector("#mainLine").textContent);
    else if (e.target.textContent == "AC") return document.querySelector("#mainLine").textContent = "";
    document.querySelector("#mainLine").textContent += e.target.textContent;})