const mutation = {
  test_state(state, payload) {
    state.test_state = JSON.parse(JSON.stringify(payload));
    console.log(state);
  },
  major_list(state, payload) {
    state.major_list = JSON.parse(JSON.stringify(payload));
    console.log(state.major_list);
  }
};

export default mutation;
