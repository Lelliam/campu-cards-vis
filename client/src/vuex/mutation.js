const mutation = {
  major_state(state, payload) {
    state.major_state = JSON.parse(JSON.stringify(payload));
  },
  major_cancel(state, payload) {
    state.major_cancel = JSON.parse(JSON.stringify(payload));
  }
};

export default mutation;
