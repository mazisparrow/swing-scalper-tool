// import * as Google from "expo-google-app-auth";

import { gql } from "graphql-request";

import createDataContext from "./createDataContext";
import { client as graphqlClient } from "../api/axios";

const watchListReducers = (state, action) => {
  switch (action.type) {
    case "fetch_watchList":
      return {
        ...state,
        watchLists: action.payload,
      };

    case "add_loading":
      return {
        ...state,
        isLoading: true,
      };

    case "remove_loading":
      return {
        ...state,
        isLoading: false,
      };
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "clear_errorMessage":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const getWatchlist =
  (dispatch) =>
  async ({ token, ticker }) => {
    try {
      const response = await graphqlClient.request(
        gql`
          query getWatchlist($ticker: String!) {
            getWatchlist(ticker: $ticker) {
              id
              createdAt
              ticker
              buyPrice
              priceTargets
              buyZone
              buyTrigger
              stopLoss
            }
          }
        `,
        { ticker },
        { Authorization: `Bearer ${token}` }
      );

      console.log(response);
      // if (response.items && Array.isArray(response.items)) {
      //   dispatch({ action: "add_watchLists", payload: response.items });
      //   dispatch({ type: "remove_loading" });
      //   dispatch({ type: "clear_errorMessage" });
      //   return true;
      // }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_errorMessage" });
};

export const { Context, Provider } = createDataContext(
  watchListReducers,
  {
    clearErrorMessage,
    getWatchlist,
  },
  { watchList: null, errorMessage: "", isLoading: true }
);
