let count = 0;

function cc(card) {
  // Only change code below this line
    if (card > 1 && card < 7) {
        count += 1;
    } else if (card >= 7 && card <= 9) {
        count;
    } else {
        count -= 1;
    }

    if (count > 0) {
        return count + ' Bet';
    } else {
        return count + ' Hold';
    }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');