import { GameEventType } from './GameEventType';
import { TeamMetadata } from './TeamMetadata';

export type Team = TeamMetadata & {
  stats: {
    gameEvents: Record<GameEventType, number>;
    wins: number;
    losses: number;
    draws: number;
    points: number;
    sevenMetersGoals: number;
  };
};
