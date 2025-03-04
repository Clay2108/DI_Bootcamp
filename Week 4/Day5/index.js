  function playTheGame(){
            confirmation=confirm("Do you want to play the game: ")
            if (confirmation==true){
                game();
            }else{
                alert("No problem, Goodbye!");
            }
        }
        

        function game(){
            // alert('You are now playing the game!');
            generatedNumber=Math.floor(Math.random()*10);

            for (i=0;i<=3;i++){
                if (i==3){
                    alert("Out of chances");
                    break;
                }
                guessed=prompt("Enter a number");
                guessedNum=parseInt(guessed);
                if (isNaN(guessedNum)){
                    alert("Sorry Not a number, Goodbye");
                    break;
                }else{
                    if (guessedNum==generatedNumber){
                        alert("WINNER! The number was indeed" + generatedNumber);
                        break;
                    }else if (guessedNum<generatedNumber){
                        alert("Your number is smaller then the computer’s, guess again");
                    }else{
                        alert("Your number is bigger then the computer’s, guess again”");
                    }
                }   
            }
        }