const MissionCommander = require("./app/missionCommander");

const mcCarlo = new MissionCommander("Carlo");
const mcRodrigo = new MissionCommander("Rodrigo");
const mcFernanda = new MissionCommander("Fernanda");

console.log(mcCarlo.name);
console.log(mcRodrigo.name);
console.log(mcFernanda.name);