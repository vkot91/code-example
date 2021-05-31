import { rootReducer } from "store/reducer";

export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>;
