import * as types from '../actions/actionTypes';

const initialState = {
  appList: [],
  totalApps: 0,
  // companyName: '',
  // dateApplied: '',
  // status: '',
  // role: '',
  // notes: '',
};

const applicationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_APP:
      // const newCard = {
      //   companyName: action.payload.companyName,
      //   dateApplied: action.payload.dateApplied,
      //   status: action.payload.status,
      //   role: action.payload.role,
      //   notes: action.payload.notes,
      // };

      // console.log('NEW CARD', newCard);

      // push the new market onto a copy of the market list
      return {
        ...state,
        appList: (state.appList || []).concat({
          companyName: action.payload.companyName,
          dateApplied: action.payload.dateApplied,
          status: action.payload.status,
          role: action.payload.role,
          notes: action.payload.notes,
        }),
        totalApps: state.totalApps + 1,
      };
    // return updated state
    // return Object.assign({}, state, {
    //   companyName: action.payload.companyName,
    //   dateApplied: action.payload.dateApplied,
    //   status: action.payload.status,
    //   role: action.payload.role,
    //   notes: action.payload.notes,
    // });
    // case types.ADD_CARD:
    //   break;
    case types.SET_STATUS:
      const { companyName, status } = action.payload;
      return {
        ...state,
        appList: state.appList.map((app) => {
          if (app.companyName === companyName) {
            // console.log('companyName', app.companyName)
            // console.log('action ', action.payload.companyName)
            console.log('app', app);
            return {
              ...app,
              status: status,
            }
          }
          console.log("app", app)
          console.log("status" , status)
          return app;
        }),
      };
      case type.SET_NOTES:
        return{
          
        }

    // case types.DELETE_CARD:
    //   break;

    default: {
      return state;
    }
  }
};

export default applicationsReducer;
