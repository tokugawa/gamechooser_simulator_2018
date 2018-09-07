// import fetch from 'cross-fetch';
import * as constants from '../constants';
import { IGame } from '../types';

export interface IAddGame {
  type: constants.ADD_GAME;
  index: number,
  game: IGame,
}

export interface IRemoveGame {
  type: constants.REMOVE_GAME;
  index: number,
  game: IGame,
}

export interface IVoteOnGame {
  type: constants.VOTE_ON_GAME;
  index: number,
  game: IGame,
}

export type GameAction = IAddGame | IRemoveGame | IVoteOnGame;

export function addGame(index: number, game: IGame): IAddGame {
  return {
    game,
    index,
    type: constants.ADD_GAME,
  }
}

export function removeGame(​index: number, game: IGame): IRemoveGame {
  return {
    game,
    index,
    type: constants.REMOVE_GAME,
  }
}
