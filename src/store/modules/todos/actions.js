import Axios from "axios";

const deleteTodo = async (context, payload) => {
    context.commit("DELETETODO", payload);
};
const changeStatus = async (context, index) => {
    context.commit("CHANGESTATUS", index)
}
const getNewTaskFromBackend = async (context) => {
	let response = await Axios.get(' http://localhost:3000/new_tasks');
	if(response.data){
        console.log(response.data)
    }
    context.commit("UPDATEBACKENDTASK", response.data);
};

export {
    deleteTodo,
    changeStatus,
    getNewTaskFromBackend
}