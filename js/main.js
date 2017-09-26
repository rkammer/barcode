let cleanInput = () => {
    document.querySelector("#inputScan").value = '';
    document.querySelector("#inputScan").focus();
}

document.querySelector("#submitButton").addEventListener("click", () => {
    const newItem     = document.createElement("li");
    newItem.innerHTML = document.querySelector("#inputScan").value;
    document.querySelector("#myList").appendChild(newItem);
    cleanInput();
    typing = true;
});

let typing = true;
let chars  = [];
document.querySelector("#inputScan").addEventListener("keyup", (input) => {

    // let timeouts = []

    if(input.which === 13){
        input.preventDefault();
        return;
    }

    if(typing === true){
        setTimeout(() => {
            typing = false;
            console.log("ran");
        }, 1000);

        if(document.querySelector("#inputScan").value.length == 7){
            // timeouts.forEach((timeout) => {
            //     console.log("timeout clear");
            //     clearTimeout(timeout);
            // });

            // for(let i = 0; i <= timeouts.length; i++){
            //     console.log("timeout clear");
            //     clearTimeout(timeouts[i]);
            // }
           document.querySelector("#submitButton").click();
           typing = true;
        }
    }else{
        typing = true;
        document.querySelector("#myMessage").classList.remove("invisible");

        cleanInput();

        setTimeout(() => {
            document.querySelector("#myMessage").classList.add("invisible");
        }, 3000);
    }
});

function banana(){
    console.log("1");
    setTimeout(() => {
        console.log("2")
    }, 2000);
    console.log("3");
}

function testArray(){
    let array = ["1", "2", "chocolate", "3"];
    array.forEach((element) => {
        console.log(element);
    });
}