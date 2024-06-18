import * as types from './actionTypes.js'

export const addCard = (appObj) => ({
    type: types.ADD_APP,
    payload: appObj,
  });
  
export const setStatus = (status) => ({
  type: types.SET_STATUS,
  payload: status,
});

export const setNotes = (notes) => ({
    type: types.SET_NOTES,
    payload: notes,
  });

export const deleteCard = (applicationId) => ({
  type: types.DELETE_APP,
  payload: applicationId,
});

