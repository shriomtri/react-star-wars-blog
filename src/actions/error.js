import * as types from '../constants/types'

export const createError = (error, info) => {
  return {
    type: types.app.ERROR,
    error,
    info,
  };
}
