const DELETETODO = (state, payload) => {
	state.tasks.splice(payload,1)
};

export {
    DELETETODO
}