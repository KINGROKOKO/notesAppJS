var assert = {
  isTrue: function(eventToCheck){
    if (!eventToCheck) {
      throw new Error("YOU LOSER: " + eventToCheck + " is WRONG! WRONG WRONG!");
    }else{
      console.log("YOU ARE THE ONE:" + eventToCheck + " is PASSING!");
    }
  }
};
