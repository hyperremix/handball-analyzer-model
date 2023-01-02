import { TeamMetadata } from '@model';
import { TeamMemberBuilder } from './TeamMember.builder';

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
      teamMembers: [
        TeamMemberBuilder.new.build(),
        TeamMemberBuilder.new.withId('id2').withNumber('2').withName('name2').build(),
      ],
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
