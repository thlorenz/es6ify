class Character {
  constructor(x, y, name) {
  }
  attack(character) {
    console.log('attacking', character);
  }
}

class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
    this.health_ = 100;
  }

  attack(character) {
    super.attack(character);
  }

  get isAlive() { return this.health > 0; }
  get health() { return this.health_; }
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}

