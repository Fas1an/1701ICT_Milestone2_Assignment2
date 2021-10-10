function mouseAim() {
  cursor(CROSS);
}

function spriteOverlap() {
    if (bullet.overlap(missile)) {
      bulletSprites.remove(bullet);
      missileSprite.remove(missile);
      score += 20;
    } else if (bullet.overlap(missile2)) {
      bulletSprites.remove(bullet);
      missileSprite2.remove(missile2);
      score += 100;
    } else if (missile.overlap(townSprite)) {
      missileSprite.remove(missile);
      townSprite.remove(town);
    } else if (missile.overlap(townSprite2)) {
      missileSprite.remove(missile);
      townSprite2.remove(town);
    } else if (missile.overlap(townSprite3)) {
      missileSprite.remove(missile);
      townSprite3.remove(town);
    } else if (missile.overlap(townSprite4)) {
      missileSprite.remove(missile);
      townSprite4.remove(town);
    } else if (missile.overlap(turrent)) {
    } else if (town.length < 1) {
      endgame == true;
    }
    console.log(town.length);
  }
  
  