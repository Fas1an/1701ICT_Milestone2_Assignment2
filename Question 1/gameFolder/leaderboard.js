let highscore;
function drawDataJson(leaderboard_data){
  for (let i = 0; i < leaderboard_data.length; i ++){
    let tokens = splitTokens(leaderboard_data[i])
    let highscore = tokens[0];

    
    switch(highscore){
      case 'name':
      text(tokens[1], 10,30)
      case 'score':
      text(tokens[2], 20,50)
     
    }
  }

}
      