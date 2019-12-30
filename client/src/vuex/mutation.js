const mutation = {
  major_state(state, payload) {
    state.major_state = JSON.parse(JSON.stringify(payload));
    //console.log(state);
  }
};

export default mutation;
