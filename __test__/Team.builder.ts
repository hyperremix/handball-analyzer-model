import { Team } from '@model';
import { TeamMemberBuilder } from './TeamMember.builder';
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
      teamMembers: [
        TeamMemberBuilder.new.build(),
        TeamMemberBuilder.new.withId('id2').withName('name2').withNumber('2').build(),
      ],
      leagueId: 'leagueId',
      stats: TeamStatisticsBuilder.new.build(),
    };
  }

  build(): Team {
    return this.model;
  }
}
