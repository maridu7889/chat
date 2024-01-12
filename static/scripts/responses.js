function getBotResponse(input){
    if(input=="камень"){
        return "бумага";
    } else if(input=="бумага"){
        return "ножницы";
    } else if(input=="ножницы"){
        return "камень";
    }

    if(input=="привет"){
        return "привет мой друг";
    } else if(input=="как дела"){
        return "у меня все хорошо";
    } else{
        return "прости, я тебя не понимаю, напиши что-то другое";
    } 

  

    
}