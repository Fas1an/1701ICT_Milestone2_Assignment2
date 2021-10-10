function gameLeaderboard() {
  rectMode(CENTER);
  fill(235, 235, 235, 150);
  rect(width / 2, height / 2 - 100, 500, 450);

  textSize(50);
  textAlign(CENTER);
  fill(0);
  text("Game Over", width / 2, 100);
  text("Your Score is:" + score, width / 2, 200);
  text("Leaderboard", width / 2, 300);

  for (var i = 0; i <= 2; i++) {
    let rank = highscoreJSON.highscore[i].rank;
    let name = highscoreJSON.highscore[i].name;
    let score = highscoreJSON.highscore[i].score;
    text(rank + ":   " + name + "   " + score, width / 2, 350 + 50 * i);
  }
}
