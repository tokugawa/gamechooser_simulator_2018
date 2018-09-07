export interface IGame {
  votes: number,
  title: string,
}

export interface IStoreState {
  games: IGame[];
}
