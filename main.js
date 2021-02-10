//init roles
var roleHarvester = require('role.harvester');


module.exports.loop = function () {

  //creep amount check
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  console.log('Harvesters: ' + harvesters.length);

  //autospawn creeps with roles
  if(harvesters.length < 2) {
      var newName = 'Harvester' + Game.time;
      console.log('Spawning new harvester: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
          {memory: {role: 'harvester'}});
  }


  //init behavior based on role
  for(var name in Game.creeps){
    var creep = Game.creeps[name];
    
    if (creep.memory.role == 'harvester')
      roleHarvester.run(creep);

    }
    
}
