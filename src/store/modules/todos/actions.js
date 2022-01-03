const deleteTodo = async (context, payload) => {
    context.commit("DELETETODO", payload);
};

export {
    deleteTodo,
}