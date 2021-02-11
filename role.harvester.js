var roleHarvester = {

  run: function(creep){
      //check to free space to harvest energy
      if(creep.store.getFreeCapacity() > 0){

        //finding energy sources
        var sources = creep.room.find(FIND_SOURCES);
        //check for energy sources nearby creep and moving to them if false
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
          creep.moveTo(sources[0]);
        
      } else { //if creep full, transfer energy to spawn

        //check for spawn nearby and moving to it if false
        if(creep.transfer(Game.spawns['Spawn1']) == ERR_NOT_IN_RANGE)
          creep.moveTo(Game.spawns['Spawn1']);
          
      }
      
  }
  
};

module.exports = roleHarvester;
