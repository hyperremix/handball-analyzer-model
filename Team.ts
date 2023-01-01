import { TeamMetadata } from './TeamMetadata';
import { TeamStatistics } from './TeamStatistics';

export type Team = TeamMetadata & {
  stats: TeamStatistics;
};
