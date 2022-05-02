const { NotImplementedError } = require("../extensions/index.js");
module.exports = function createDreamTeam(members) {
  if (members == undefined || members.length == 0) {
    return false;
  } else {
    let nameLetter = [];
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        nameLetter.push(members[i].trim().substr(0, 1).toUpperCase());
      }
    }
    nameLetter.sort();
    let team = "";
    for (i = 0; i < nameLetter.length; i++) {
      team += nameLetter[i];
    }
    return team;
  }
};
