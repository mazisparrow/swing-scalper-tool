import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Action {
  OPEN = "OPEN",
  CLOSED = "CLOSED"
}



type UserIDMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type JournalMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WatchlistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserID {
  readonly id: string;
  readonly email: string;
  readonly Journals?: (Journal | null)[];
  readonly Watchlists?: (Watchlist | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserID, UserIDMetaData>);
  static copyOf(source: UserID, mutator: (draft: MutableModel<UserID, UserIDMetaData>) => MutableModel<UserID, UserIDMetaData> | void): UserID;
}

export declare class Journal {
  readonly id: string;
  readonly ticker: string;
  readonly quantity: number;
  readonly buyPrice: number;
  readonly stopLoss: number;
  readonly pTarget?: number[];
  readonly profitLoss?: number;
  readonly profitLossPercentage?: number;
  readonly tradeRisk?: number;
  readonly tradeReward?: number;
  readonly tradeStatus?: (Action | null)[] | keyof typeof Action;
  readonly strategy?: string;
  readonly userID?: string;
  readonly sellPrice?: number;
  readonly unrealisedPL?: number;
  readonly unrealisedPLpercentage?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Journal, JournalMetaData>);
  static copyOf(source: Journal, mutator: (draft: MutableModel<Journal, JournalMetaData>) => MutableModel<Journal, JournalMetaData> | void): Journal;
}

export declare class Watchlist {
  readonly id: string;
  readonly ticker: string;
  readonly buyPrice: number;
  readonly sma200: number;
  readonly sma20: number;
  readonly stopLoss: number;
  readonly priceTargets?: number[];
  readonly buyTrigger?: boolean;
  readonly buyZone?: boolean;
  readonly rsi14: number;
  readonly userID?: string;
  readonly globalQuote?: string;
  readonly searchSymbol?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Watchlist, WatchlistMetaData>);
  static copyOf(source: Watchlist, mutator: (draft: MutableModel<Watchlist, WatchlistMetaData>) => MutableModel<Watchlist, WatchlistMetaData> | void): Watchlist;
}