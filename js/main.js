let cleanInput = () => {
    document.querySelector("#inputScan").value = '';
    document.querySelector("#inputScan").focus();
    times = [];
}

document.querySelector("#submitButton").addEventListener("click", () => {
    const newItem     = document.createElement("li");
    newItem.innerHTML = document.querySelector("#inputScan").value;
    document.querySelector("#myList").appendChild(newItem);
    cleanInput();
});

let times  = [];
document.querySelector("#inputScan").addEventListener("keyup", (input) => {

    if(times.length === 0){
        times.push(Date.now());
    }
    times.push(Date.now());

    if((times[times.length - 1] - times[times.length - 2]) < 100){

        if(document.querySelector("#inputScan").value.length == 7){
           document.querySelector("#submitButton").click();
        }

    }else{

        document.querySelector("#msgError").classList.remove("d-none");
        document.querySelector("#inputScan").classList.add("is-invalid");
        document.querySelector("#msgInfo").classList.add("d-none");
        cleanInput();
        setTimeout(() => {
            document.querySelector("#msgError").classList.add("d-none");
            document.querySelector("#inputScan").classList.remove("is-invalid");
            document.querySelector("#msgInfo").classList.remove("d-none");
        }, 3000);

    }

});