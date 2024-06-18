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

      return {
        ...state,
        appList: (state.appList || []).concat({
          appId: action.payload.appId,
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
      const { status } = action.payload;
      return {
        ...state,
        appList: state.appList.map((app) => {
          if (app.appId === action.payload.appId) {
            // console.log('companyName', app.companyName)
            // console.log('action ', action.payload.companyName)

            return {
              ...app,
              status: status,
            };
          }
          console.log('app', app);
          console.log('status', status);
          return app;
        }),
      };
      
    case types.SET_NOTES:
      const { notes } = action.payload;
      return {
        ...state,
        appList: state.appList.map((app) => {
          if (app.appId === action.payload.appId) {
            // console.log('companyName', app.companyName)
            // console.log('action ', action.payload.companyName)

            return {
              ...app,
              notes: notes,
            };
          }
          // console.log('app', app);
          // console.log('notes', notes);
          return app;
        }),
      };

      case types.DELETE_APP:
        // const { appId } = action.payload;
        const newAppList = state.appList.filter((app) => app.appId !== action.payload.appId);
        // console.log("action payload id", action.payload.appId);
        // console.log("newAppList: ", newAppList);
        return {
          ...state,
          appList: newAppList,
          totalApps: state.totalApps - 1,
        };

      default: {
        return state;
    }
  }
};

export default applicationsReducer;
