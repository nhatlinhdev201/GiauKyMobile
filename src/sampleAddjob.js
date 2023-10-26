const todos = [
    {
      'id': 1,
      'job': 'Thi 10 diem',
      'state': false,
    },
    {
      'id': 2,
      'job': 'Thi 9.5 diem',
      'state': false
    },
  ];
  
  function addTodo(newJob) {
    // Tìm id lớn nhất trong mảng todos
    const maxId = Math.max(...todos.map(todo => todo.id));
  
    // Tạo công việc mới
    const newTodo = {
      id: maxId + 1,
      job: newJob,
      state: false,
    };
  
    // Thêm công việc mới vào mảng todos
    todos.push(newTodo);
  
    // Hoặc sử dụng toán tử spread để tạo mảng mới
    // const newTodos = [...todos, newTodo];
  
    return todos;
  }
  
  // Sử dụng hàm để thêm công việc mới
  const updatedTodos = addTodo('Làm bài tập React Native');
  console.log(updatedTodos);
  