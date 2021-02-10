var roleUpgrader = {

  run: function(creep) {


    if(creep.storage.getFreeCapacity == 0) {

      //finding energy sources
      var sources = creep.room.find(ENERGY_SOURCES);
      //check for energy sources nearby creep and moving to them if false
      if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE)
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffffff'}});

    } else {
      //moving to Controller and upgrading it
      if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE)
          creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});

    }

  }

};

module.exports = roleUpgrader;
