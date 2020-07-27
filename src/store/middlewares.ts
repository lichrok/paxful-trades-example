import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '.';
import { Trades } from '../mocks/trades';
import {
    fetchTrades,
    tradingInfoFetchingAction,
    tradingInfoLoadedAction,
    fetchTradingInfoAction,
} from './actions/tradesActions';

const API_URL = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json';
const API_REFRESHING_TIME = 3000;

export const asyncGetTrades = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => async (dispatch) => {
    dispatch(fetchTrades(Trades));
};

export const asyncGetTradeInfo = (): ThunkAction<
    void,
    AppState,
    null,
    Action<string>
> => (dispatch) => {
    dispatch(tradingInfoFetchingAction());
    fetch(API_URL)
        .then((response) => response.json())
        .then((json) => {
            setTimeout(() => {
                dispatch(fetchTradingInfoAction(json.bpi));
                dispatch(tradingInfoLoadedAction());
            }, API_REFRESHING_TIME);
        });
};
