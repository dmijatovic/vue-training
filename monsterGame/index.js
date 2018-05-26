
new Vue({
  el:'#app',
  data:{
    title: "Monster game!",
    gameOn: false,
    player:{
      name:"You",
      img:"img/hero.png",
      health: 100
    },
    monster:{
      name:'Monster',
      img:"img/monster.png",
      health: 100
    }
  },
  compute:{

  },
  methods:{
    attack(weight){
      //debugger
      let playerPunch = (Math.random() * 10) * weight,
        monsterPunch = Math.random() * 10;
      //update your hel
      this.player.health-= Math.round(monsterPunch);
      this.monster.health-= Math.round(playerPunch);
      //check state
      this.saldo();
    },
    heal(){
      let medicine = Math.random() * 5
      this.player.health+= Math.round(medicine); 
    },
    quit(){
      this.gameOn = false;
      this.player.health = 100;
      this.monster.health = 100;
    },
    saldo(){
      if (this.player.health < 0){
        alert("You lose!");
        return true
      }
      if (this.monster.health < 0){
        alert("You win!");
        return true
      }
    } 
  }
})