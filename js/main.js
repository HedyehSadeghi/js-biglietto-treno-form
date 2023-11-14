function createTicket(event){
    event.preventDefault();

    let name=document.getElementById("inputname").value ;
    let km=parseFloat(document.getElementById("inputkm").value) ;
    let age= document.getElementById("inputage").value;

    if (isNaN(km)){
        alert("non hai inserito un numero di km valido")
    }
    else {
        let ticketPrice= km* 0.21;

        if (age=="Minorenne") {
            ticketPrice -= (ticketPrice* 0.20);
            ticketPrice=parseFloat(ticketPrice.toFixed(2));
            document.getElementById("user_ticket_price").innerHTML=ticketPrice;
            document.getElementById("user_ticket_type").innerHTML= "Biglietto ridotto";
        }
        else if(age=="Over 65"){
            ticketPrice -= (ticketPrice* 0.40);
            ticketPrice=parseFloat(ticketPrice.toFixed(2));
            document.getElementById("user_ticket_price").innerHTML=ticketPrice;
            document.getElementById("user_ticket_type").innerHTML= "Biglietto ridotto";
        }
        else {
            document.getElementById("user_ticket_price").innerHTML=ticketPrice;
            document.getElementById("user_ticket_type").innerHTML= "Biglietto standard";
        }


        let randomNumber1= Math.floor(Math.random()*11);
        let randomNumber2= Math.floor(Math.random()*9001);


        document.getElementById("user_name").innerHTML=name;
        document.getElementById("user_place").innerHTML=randomNumber1;
        document.getElementById("user_cp_code").innerHTML=randomNumber2;
            



    


    


        
    }

}