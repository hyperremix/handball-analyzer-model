import { TeamMetadata } from '@model';
import { PlayerBuilder } from './Player.builder';

export class TeamMetadataBuilder {
  private model: TeamMetadata;

  static get new(): TeamMetadataBuilder {
    return new TeamMetadataBuilder();
  }

  private constructor() {
    this.model = {
      id: 'homeTeamId',
      leagueId: 'leagueId',
      name: 'name',
      players: [
        PlayerBuilder.new.build(),
        PlayerBuilder.new.withId('id2').withNumber(2).withName('name2').build(),
      ],
      coaches: ['coach1', 'coach2'],
    };
  }

  withId(id: string): TeamMetadataBuilder {
    this.model.id = id;
    return this;
  }

  build(): TeamMetadata {
    return this.model;
  }
}
