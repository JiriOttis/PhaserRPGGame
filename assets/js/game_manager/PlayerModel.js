class PlayerModel {
    constructor(spawnLocations) {
        this.health = 10;
        this.maxHealth = 10;
        this.gold = 0;
        this.id = `player-${uuid.v4()}`;
        this.spawnLocations = spawnLocations;

        [this.x, this.y] = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];
    }

    updateGold(gold) {
        this.gold += gold;
    }

    updateHealth(health) {
        this.health += health;
        if (this.health > this.maxHealth) this.health = this.maxHealth;
    }

    respawn() {
        this.health = this.maxHealth;
        const location = this.spawnLocations[Math.floor(Math.random() * this.spawnLocations.length)];
        this.x = location[0] * 2;
        this.y = location[1] * 2;
    }
}