const mutation = {
  test_state(state, payload) {
    state.test_state = JSON.parse(JSON.stringify(payload));
    console.log(state);
  }
};

export default mutation;
