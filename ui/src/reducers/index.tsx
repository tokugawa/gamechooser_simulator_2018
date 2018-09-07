import { combineReducers } from 'redux';

import { GameAction } from '../actions';
import { ADD_GAME, REMOVE_GAME, VOTE_ON_GAME } from '../constants';
import { IGame, IStoreState } from '../types';

// TODO: add immutability helper pkg
function insertGame(array: IGame[], action: GameAction) {
  const newArray = array.slice();
  newArray.splice(action.index, 0, action.game);
  return newArray;
}

function removeGame(array: IGame[], action: GameAction) {
  const newArray = array.slice();
  newArray.splice(action.index, 1);
  return newArray;
}

function voteOnGame(array: IGame[], action: GameAction) {
  const newArray = array.slice();
  const game = newArray[action.index];
  game.votes += 1;
  return newArray;
}
// TODO: add immutability helper pkg

export function games(state: IStoreState, action: GameAction ): IStoreState {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: insertGame(state.games, action),
      }
    case REMOVE_GAME:
      return {
        ...state,
        games: removeGame(state.games, action),
      } 
    case VOTE_ON_GAME:
      return {
        ...state,
        games: voteOnGame(state.games, action),
      }
  }
  return state;
}

const rootReducer = combineReducers({
  games,
});

// TODO add more reducers and take advantage of combineReducers.
export default rootReducer;
