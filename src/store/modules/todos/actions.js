const deleteTodo = async (context, payload) => {
    context.commit("DELETETODO", payload);
};
const changeStatus = async (context, index) => {
    context.commit("CHANGESTATUS", index)
}

export {
    deleteTodo,
    changeStatus
}