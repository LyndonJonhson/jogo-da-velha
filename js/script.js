var playing = false;
var level // 1 = easy, 2 = medium, 3 = hard
var whoPlays; // 0 = cpu and 1 = player
var game = [];
var board = [];
var verify;

function start(l){
    playing = true;
    level = l;
    let tmp;
    if(level == 1){
        tmp = "fácil";
    }else if(level == 2){
        tmp = "médio";
    }else{
        tmp = "difícil";
    }
    game = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    board = [
        [document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3")],
        [document.getElementById("box4"), document.getElementById("box5"), document.getElementById("box6")],
        [document.getElementById("box7"), document.getElementById("box8"), document.getElementById("box9")]
    ];
    updateBoard();
    alert("Jogo iniciado no nível " + tmp);
    document.getElementById("level").innerHTML = "Nível: " + tmp;
    whoPlays = Math.round(Math.random());
    if(whoPlays == 0){
        cpuPlays();
    }
}

function updateBoard(){
    for(var r = 0; r < 3; r++){
        for(var c = 0; c < 3; c++){
            if(game[r][c] == "X"){
                board[r][c].innerHTML = "X";
                board[r][c].style.cursor = "default";
            }else if(game[r][c] == "O"){
                board[r][c].innerHTML = "O";
                board[r][c].style.cursor = "default";
            }else{
                board[r][c].innerHTML = "";
                board[r][c].style.cursor = "pointer";
            }
        }
    }
}

function verifyVictory(){
    //rows
    for(var r = 0; r < 3; r++){
        if(game[r][0] == game[r][1] && game[r][1] == game[r][2]){
            return game[r][0];
        }
    }
    //columns
    for(var c = 0; c < 3; c++){
        if(game[0][c] == game[1][c] && game[1][c] == game[2][c]){
            return game[0][c];
        }
    }
    //diagonals
    if(game[0][0] == game[1][1] && game[1][1] == game[2][2]){
        return game[0][0];
    }
    if(game[0][2] == game[1][1] && game[1][1] == game[2][0]){
        return game[0][2];
    }
    //draw
    let tmp = 0;
    for(var r = 0; r < 3; r++){
        for(var c = 0; c < 3; c++){
            if(game[r][c] != ""){
                tmp += 1;
            }
        }
    }
    if(tmp == 9){
        return "empate"
    }
    return "";
}

function play(b){
    if(playing && whoPlays == 1){
        switch(b){
            case 1:
                if(game[0][0] == ""){
                    game[0][0] = "X";
                    whoPlays = 0;
                }
                break;
            case 2:
                if(game[0][1] == ""){
                    game[0][1] = "X";
                    whoPlays = 0;
                }
                break;
            case 3:
                if(game[0][2] == ""){
                    game[0][2] = "X";
                    whoPlays = 0;
                }
                break;
            case 4:
                if(game[1][0] == ""){
                    game[1][0] = "X";
                    whoPlays = 0;
                }
                break;
            case 5:
                if(game[1][1] == ""){
                    game[1][1] = "X";
                    whoPlays = 0;
                }
                break;
            case 6:
                if(game[1][2] == ""){
                    game[1][2] = "X";
                    whoPlays = 0;
                }
                break;
            case 7:
                if(game[2][0] == ""){
                    game[2][0] = "X";
                    whoPlays = 0;
                }
                break;
            case 8:
                if(game[2][1] == ""){
                    game[2][1] = "X";
                    whoPlays = 0;
                }
                break;
            case 9:
                if(game[2][2] == ""){
                    game[2][2] = "X";
                    whoPlays = 0;
                }
                break;                                                                                                                 
        }
        updateBoard();

        let tmp = setTimeout(() => {
            verify = verifyVictory();
            if(verify == "X"){
                alert("Você venceu!");
                start(level);
            }else if(verify == "empate"){
                alert("Empate!");
                start(level);
            }else{
                if(whoPlays == 0){
                    cpuPlays();
                }
            }
        }, 100);
    }
}

function cpuPlays(){
    let r, c, tmp;

    //easy    
    if(playing && level == 1){
        do{
            r = Math.round(Math.random()*2);
            c = Math.round(Math.random()*2);
        }while(game[r][c] != "")
        game[r][c] = "O"       
    }

    //medium
    else if(playing && level == 2){
        //defense
        //row 1
        if(game[0][0] == "X" && game[0][1] == "X" && game[0][2] == ""){
            game[0][2] = "O"
        }else if(game[0][0] == "X" && game[0][1] == "" && game[0][2] == "X"){
            game[0][1] = "O"
        }else if(game[0][0] == "" && game[0][1] == "X" && game[0][2] == "X"){
            game[0][0] = "O"
        }
        //row 2
        else if(game[1][0] == "X" && game[1][1] == "X" && game[1][2] == ""){
            game[1][2] = "O"
        }else if(game[1][0] == "X" && game[1][1] == "" && game[1][2] == "X"){
            game[1][1] = "O"
        }else if(game[1][0] == "" && game[1][1] == "X" && game[1][2] == "X"){
            game[1][0] = "O"
        }
        //row 3
        else if(game[2][0] == "X" && game[2][1] == "X" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[2][0] == "X" && game[2][1] == "" && game[2][2] == "X"){
            game[2][1] = "O"
        }else if(game[2][0] == "" && game[2][1] == "X" && game[2][2] == "X"){
            game[2][0] = "O"
        }
        //column 1
        else if(game[0][0] == "X" && game[1][0] == "X" && game[2][0] == ""){
            game[2][0] = "O"
        }else if(game[0][0] == "X" && game[1][0] == "" && game[2][0] == "X"){
            game[1][0] = "O"
        }else if(game[0][0] == "" && game[1][0] == "X" && game[2][0] == "X"){
            game[0][0] = "O"
        }
        //column 2
        else if(game[0][1] == "X" && game[1][1] == "X" && game[2][1] == ""){
            game[2][1] = "O"
        }else if(game[0][1] == "X" && game[1][1] == "" && game[2][1] == "X"){
            game[1][1] = "O"
        }else if(game[0][1] == "" && game[1][1] == "X" && game[2][1] == "X"){
            game[0][1] = "O"
        }
        //column 3
        else if(game[0][2] == "X" && game[1][2] == "X" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[0][2] == "X" && game[1][2] == "" && game[2][2] == "X"){
            game[1][2] = "O"
        }else if(game[0][2] == "" && game[1][2] == "X" && game[2][2] == "X"){
            game[0][2] = "O"
        }
        //diagonal 1
        else if(game[0][0] == "X" && game[1][1] == "X" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[0][0] == "X" && game[1][1] == "" && game[2][2] == "X"){
            game[1][1] = "O"
        }else if(game[0][0] == "" && game[1][1] == "X" && game[2][2] == "X"){
            game[0][0] = "O"
        }
        //diagonal 2
        else if(game[0][2] == "X" && game[1][1] == "X" && game[2][0] == ""){
            game[2][0] = "O"
        }else if(game[0][2] == "X" && game[1][1] == "" && game[2][0] == "X"){
            game[1][1] = "O"
        }else if(game[0][2] == "" && game[1][1] == "X" && game[2][0] == "X"){
            game[0][2] = "O"
        }else{
            do{
                r = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            }while(game[r][c] != "")
            game[r][c] = "O"
        }  
    }

    //hard
    else if(playing && level == 3){
        //attack
        //row 1
        if(game[0][0] == "O" && game[0][1] == "O" && game[0][2] == ""){
            game[0][2] = "O"
        }else if(game[0][0] == "O" && game[0][1] == "" && game[0][2] == "O"){
            game[0][1] = "O"
        }else if(game[0][0] == "" && game[0][1] == "O" && game[0][2] == "O"){
            game[0][0] = "O"
        }
        //row 2
        else if(game[1][0] == "O" && game[1][1] == "O" && game[1][2] == ""){
            game[1][2] = "O"
        }else if(game[1][0] == "O" && game[1][1] == "" && game[1][2] == "O"){
            game[1][1] = "O"
        }else if(game[1][0] == "" && game[1][1] == "O" && game[1][2] == "O"){
            game[1][0] = "O"
        }
        //row 3
        else if(game[2][0] == "O" && game[2][1] == "O" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[2][0] == "O" && game[2][1] == "" && game[2][2] == "O"){
            game[2][1] = "O"
        }else if(game[2][0] == "" && game[2][1] == "O" && game[2][2] == "O"){
            game[2][0] = "O"
        }
        //column 1
        else if(game[0][0] == "O" && game[1][0] == "O" && game[2][0] == ""){
            game[2][0] = "O"
        }else if(game[0][0] == "O" && game[1][0] == "" && game[2][0] == "O"){
            game[1][0] = "O"
        }else if(game[0][0] == "" && game[1][0] == "O" && game[2][0] == "O"){
            game[0][0] = "O"
        }
        //column 2
        else if(game[0][1] == "O" && game[1][1] == "O" && game[2][1] == ""){
            game[2][1] = "O"
        }else if(game[0][1] == "O" && game[1][1] == "" && game[2][1] == "O"){
            game[1][1] = "O"
        }else if(game[0][1] == "" && game[1][1] == "O" && game[2][1] == "O"){
            game[0][1] = "O"
        }
        //column 3
        else if(game[0][2] == "O" && game[1][2] == "O" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[0][2] == "O" && game[1][2] == "" && game[2][2] == "O"){
            game[1][2] = "O"
        }else if(game[0][2] == "" && game[1][2] == "O" && game[2][2] == "O"){
            game[0][2] = "O"
        }
        //diagonal 1
        else if(game[0][0] == "O" && game[1][1] == "O" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[0][0] == "O" && game[1][1] == "" && game[2][2] == "O"){
            game[1][1] = "O"
        }else if(game[0][0] == "" && game[1][1] == "O" && game[2][2] == "O"){
            game[0][0] = "O"
        }
        //diagonal 2
        else if(game[0][2] == "O" && game[1][1] == "O" && game[2][0] == ""){
            game[2][0] = "O"
        }else if(game[0][2] == "O" && game[1][1] == "" && game[2][0] == "O"){
            game[1][1] = "O"
        }else if(game[0][2] == "" && game[1][1] == "O" && game[2][0] == "O"){
            game[0][2] = "O"
        }

        //defense
        //row 1
        else if(game[0][0] == "X" && game[0][1] == "X" && game[0][2] == ""){
            game[0][2] = "O"
        }else if(game[0][0] == "X" && game[0][1] == "" && game[0][2] == "X"){
            game[0][1] = "O"
        }else if(game[0][0] == "" && game[0][1] == "X" && game[0][2] == "X"){
            game[0][0] = "O"
        }
        //row 2
        else if(game[1][0] == "X" && game[1][1] == "X" && game[1][2] == ""){
            game[1][2] = "O"
        }else if(game[1][0] == "X" && game[1][1] == "" && game[1][2] == "X"){
            game[1][1] = "O"
        }else if(game[1][0] == "" && game[1][1] == "X" && game[1][2] == "X"){
            game[1][0] = "O"
        }
        //row 3
        else if(game[2][0] == "X" && game[2][1] == "X" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[2][0] == "X" && game[2][1] == "" && game[2][2] == "X"){
            game[2][1] = "O"
        }else if(game[2][0] == "" && game[2][1] == "X" && game[2][2] == "X"){
            game[2][0] = "O"
        }
        //column 1
        else if(game[0][0] == "X" && game[1][0] == "X" && game[2][0] == ""){
            game[2][0] = "O"
        }else if(game[0][0] == "X" && game[1][0] == "" && game[2][0] == "X"){
            game[1][0] = "O"
        }else if(game[0][0] == "" && game[1][0] == "X" && game[2][0] == "X"){
            game[0][0] = "O"
        }
        //column 2
        else if(game[0][1] == "X" && game[1][1] == "X" && game[2][1] == ""){
            game[2][1] = "O"
        }else if(game[0][1] == "X" && game[1][1] == "" && game[2][1] == "X"){
            game[1][1] = "O"
        }else if(game[0][1] == "" && game[1][1] == "X" && game[2][1] == "X"){
            game[0][1] = "O"
        }
        //column 3
        else if(game[0][2] == "X" && game[1][2] == "X" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[0][2] == "X" && game[1][2] == "" && game[2][2] == "X"){
            game[1][2] = "O"
        }else if(game[0][2] == "" && game[1][2] == "X" && game[2][2] == "X"){
            game[0][2] = "O"
        }
        //diagonal 1
        else if(game[0][0] == "X" && game[1][1] == "X" && game[2][2] == ""){
            game[2][2] = "O"
        }else if(game[0][0] == "X" && game[1][1] == "" && game[2][2] == "X"){
            game[1][1] = "O"
        }else if(game[0][0] == "" && game[1][1] == "X" && game[2][2] == "X"){
            game[0][0] = "O"
        }
        //diagonal 2
        else if(game[0][2] == "X" && game[1][1] == "X" && game[2][0] == ""){
            game[2][0] = "O"
        }else if(game[0][2] == "X" && game[1][1] == "" && game[2][0] == "X"){
            game[1][1] = "O"
        }else if(game[0][2] == "" && game[1][1] == "X" && game[2][0] == "X"){
            game[0][2] = "O"
        }else{
            do{
                r = Math.round(Math.random()*2);
                c = Math.round(Math.random()*2);
            }while(game[r][c] != "")
            game[r][c] = "O"
        }
    }

    //verify
    updateBoard();
    tmp = setTimeout(() => {
        verify = verifyVictory();
        if(verify == "O"){
            alert("Você perdeu!");
            start(level);
        }else if(verify == "empate"){
            alert("Empate!");
            start(level);
        }else{
            whoPlays = 1;
        }
    }, 100);
}