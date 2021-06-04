class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow");

    //write code to show a heading for showing the result of Quiz
    text("Result of the Quiz",340,50);
    //call getContestantInfo( ) here
    Contestant.getContestantInfo();
    //write condition to check if contestantInfor is not undefined

    if(allContestants!==undefined){
      var y=230;
      //write code to add a note here
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
      for(var ans in allContestants){
          var correctAns="2";
          //write code to highlight contest who answered correctly
          if(correctAns===allContestants[ans].answer)
          fill("green");
          else
          fill("red");
          y+=30;
          textSize(15);
          text(allContestants[ans].name+":"+allContestants[ans].answer,250,y);
          
      }
  }
    


    

    

    
    
  }

}
