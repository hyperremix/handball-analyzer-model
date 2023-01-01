import { Player } from '@model';

export class PlayerBuilder {
  private model: Player;

  static get new(): PlayerBuilder {
    return new PlayerBuilder();
  }

  private constructor() {
    this.model = {
      id: 'id',
      number: 1,
      name: 'name',
    };
  }

  withId(id: string): PlayerBuilder {
    this.model.id = id;
    return this;
  }

  withNumber(number: number): PlayerBuilder {
    this.model.number = number;
    return this;
  }

  withName(name: string): PlayerBuilder {
    this.model.name = name;
    return this;
  }

  build(): Player {
    return this.model;
  }
}
