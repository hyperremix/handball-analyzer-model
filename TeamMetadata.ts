import { TeamMember } from './TeamMember';

export type TeamMetadata = {
  id: string;
  leagueId: string;
  name: string;
  teamMembers: TeamMember[];
};
