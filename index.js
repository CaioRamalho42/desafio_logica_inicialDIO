let nomeDoHeroi = "Ulisses"
let XP = 8756

    if(XP <= 1000){
        XP = "Ferro"
    }
        else if(XP > 1000 && XP <= 2000){
        XP = "Bronze"
    }
        else if(XP > 2000 && XP <= 5000){
        XP = "Prata"
    }
        else if(XP > 5000 && XP <= 7000){
        XP = "Ouro"
    }
        else if(XP > 7000 && XP <= 8000){
        XP = "Platina"
    }
        else if(XP > 8000 && XP <= 9000){
        XP = "Ascendente"
    }
        else if(XP > 9000 && XP <= 10000){
        XP = "Imortal"
    }
        else if(XP > 10000){
        XP = "Radiante"
    }
        console.log ("O Héroi de nome " + nomeDoHeroi + ", está no nível " + XP)