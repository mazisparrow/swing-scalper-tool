// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Action = {
  "OPEN": "OPEN",
  "CLOSED": "CLOSED"
};

const { UserID, Journal, Watchlist } = initSchema(schema);

export {
  UserID,
  Journal,
  Watchlist,
  Action
};