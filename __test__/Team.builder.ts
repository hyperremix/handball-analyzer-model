import { Team } from '@model';
import { PlayerBuilder } from './Player.builder';
import { TeamStatisticsBuilder } from './TeamStatistics.builder';

export class TeamBuilder {
  private model: Team;

  static get new(): TeamBuilder {
    return new TeamBuilder();
  }

  private constructor() {
    this.model = {
      id: 'id',
      name: 'name',
      coaches: ['coach1', 'coach2'],
      players: [
        PlayerBuilder.new.build(),
        PlayerBuilder.new.withId('id2').withName('name2').withNumber(2).build(),
      ],
      leagueId: 'leagueId',
      stats: TeamStatisticsBuilder.new.build(),
    };
  }

  build(): Team {
    return this.model;
  }
}
