import * as types from './actions/actionTypes';

const initialState = {
  companyName : '',
  dateApplied : '',
  status: '',
  role: '',
  notes: '',
};

const applicationsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_CARD:

      newCard = {
        companyName: action.payload.companyName,
        dateApplied: action.payload.dateApplied,
        status: action.payload.status,
        role: action.payload.role,
        notes: action.payload.notes,
      };

      // push the new market onto a copy of the market list

      // return updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };
    case types.SET_NEW_LOCATION:
      return Object.assign({}, state, { newLocation: action.payload });

    case types.ADD_CARD:
      break;
    case types.DELETE_CARD:
      break;
    default: {
      return state;
    }
  }
};

export default marketsReducer;