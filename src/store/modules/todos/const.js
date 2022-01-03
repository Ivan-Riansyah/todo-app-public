const getDefaultState = () => {
	return {
        statuses: ["to-do", "in-progress", "finished"],
        tasks: [
            {
                name: "Drink coffee in the morning",
                status: "finished",
            },
            {
                name: "Check Email and Discord",
                status: "in-progress",
            },
            {
                name: "Start coding for inosoft project",
                status: "to-do",
            },
        ],
	};
};
const default_state = getDefaultState();
export { default_state };
