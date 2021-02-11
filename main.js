//init roles
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');


module.exports.loop = function () {

  //creep amount check
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  console.log('Harvesters: ' + harvesters.length);
  var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  console.log('Upgraders: ' + upgraders.length);

  //autospawn creeps with roles
  if(harvesters.length < 1) {
    //name of creep
      var newName = 'Harvester' + Game.time;
      //spawn alert
      console.log('Spawning new harvester: ' + newName);
      //spawn init
      Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
          {memory: {role: 'harvester'}});
          
  } else if(upgraders.length < 1) {
    
      var newName = 'Upgrader' + Game.time;

      console.log('Spawning new upgrader: ' + newName);

      Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
          {memory: {role: 'upgrader'}});
  } 


  //init behavior based on role
  for(var name in Game.creeps){
    var creep = Game.creeps[name];
    
    if (creep.memory.role == 'harvester')
      roleHarvester.run(creep);

    if (creep.memory.role == 'upgrader')
      roleUpgrader.run(creep);
      
   }  
}
