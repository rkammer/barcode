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

// let typing = true;
let times  = [];
document.querySelector("#inputScan").addEventListener("keyup", (input) => {

    if(times.length === 0){
        times.push(Date.now());
    }
    times.push(Date.now());

    console.log(times.join(' '));
    console.log("difference ", (times[times.length - 1] - times[times.length - 2]));

    if((times[times.length - 1] - times[times.length - 2]) < 1000){

        if(document.querySelector("#inputScan").value.length == 7){
           document.querySelector("#submitButton").click();
        }

    }else{

        document.querySelector("#myMessage").classList.remove("invisible");
        cleanInput();
        setTimeout(() => {
            document.querySelector("#myMessage").classList.add("invisible");
        }, 3000);

    }

    // if(typing === true){
    //     setTimeout(() => {

    //         typing = true;
    //     }, 500);
    //     typing = false;
    // }else{
    //     typing = true;
    //     document.querySelector("#myMessage").classList.remove("invisible");

    //     cleanInput();

    //     setTimeout(() => {
    //         document.querySelector("#myMessage").classList.add("invisible");
    //     }, 3000);
    // }
});

// let verifier = false;
// setInterval(() => {
//     if(verifier !== typing){
//         verifier = typing;
//         console.log("typing", typing);
//     }
// }, 100);

function banana(){
    let array = ['a', 'b', 'c', 'd', 'e', 'second', 'last'];
    console.log(array[array.length - 1]);
    console.log(array[array.length - 2]);
}