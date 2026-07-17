function goPage(){

    let choice = document.querySelector ('input[name="choice"]:checked');
        window.location.href = "order.html";
    if(choice){
        window.location.href = choice.value;
    }

    else{
        alert("Please select one chocolate!");
    }
}