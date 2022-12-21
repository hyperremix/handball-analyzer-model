import { Player } from './Player';

export type TeamMetadata = {
  id: string;
  leagueId: string;
  name: string;
  coaches: string[];
  players: Player[];
};
