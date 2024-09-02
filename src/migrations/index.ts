import * as migration_20240831_084125_play_res from './20240831_084125_play_res';
import * as migration_20240902_112247_games from './20240902_112247_games';
import * as migration_20240902_130804 from './20240902_130804';

export const migrations = [
  {
    up: migration_20240831_084125_play_res.up,
    down: migration_20240831_084125_play_res.down,
    name: '20240831_084125_play_res',
  },
  {
    up: migration_20240902_112247_games.up,
    down: migration_20240902_112247_games.down,
    name: '20240902_112247_games',
  },
  {
    up: migration_20240902_130804.up,
    down: migration_20240902_130804.down,
    name: '20240902_130804'
  },
];
