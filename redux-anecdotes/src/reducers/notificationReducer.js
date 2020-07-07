const INITIAL_STATE = {
  show: false,
  message: '',
  timeoutId: null,
};

export const hide = () => ({
  type: 'HIDE',
});

export const show = (message, timeout) => async (dispatch, getState) => {
  const store = getState();
  if (store.notification.show) {
    clearTimeout(store.notification.timeoutId);
  }
  const timeoutId = setTimeout(() => {
    dispatch(hide());
  }, timeout * 1000);
  dispatch({ type: 'SHOW', payload: { message, timeoutId } });
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW': {
      const { message, timeoutId } = action.payload;
      return { show: true, message, timeoutId };
    }
    case 'HIDE': {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
