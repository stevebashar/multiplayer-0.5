class Player{
    constructor(){
    }
 getCount(){
    var playerCount0 = db.ref("playerCount")
    playerCount0.on("value",function(data){
    playerCount = data.val();
  })
 }
  updateCount(count){
    db.ref("/").update({
    playerCount:count
    })
 }
  update(name){
    var playerIndex = "Player" + playerCount;
    db.ref(playIndex).set({
        name:name
    })
  }
}






