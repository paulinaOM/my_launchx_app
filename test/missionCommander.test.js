//importando clase
const MissionCommander = require("../app/missionCommander")
describe("Unite test for missionCommander Class", () => {
    test('Caso de prueba 1', () => {
      const missionCommander = new MissionCommander('Carlo')
      expect(missionCommander.name).toBe('Carlo');
    });
  })
  