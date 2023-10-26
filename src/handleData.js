const [jobs, setJobs] = useState([])

console.log("result newJ", newJ)
function addNewJob(newJob) {
    const maxId = Math.max(...todos.map(todo => todo.id));
    const newTodo = {
        id: maxId + 1,
        job: newJob,
        state: false,
    };
    todos.push(newTodo);
    return todos;
}

if (newJ) {
    setJobs(addNewJob(newJ));
    console.log("list jobs", jobs)
}