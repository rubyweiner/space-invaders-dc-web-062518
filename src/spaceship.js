class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = 5;
    this.shields = 4;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.phasersCharge = "uncharged";

    if (this.crew.length){
      this.docked = false;
    } else {
      this.docked = true;
    }

    this.notifyCrew();

  }

  notifyCrew() {
    this.crew.forEach(crewMember => (crewMember.currentShip = this));
  }

}
