

window.setTimeout(function(){
  const todos = [];

  let input = prompt('What would you like to do?');

  while (input !== 'quit') {
    //handle input
    if (input === 'list') {
      listTodos();
    } else if (input === 'new') {
      addTodo();
    } else if (input === 'delete') {
      deleteTodo();
    }
    //ask again for new input
    input = prompt('What would you like to do?');
  }
  console.log('ok you quit the app');

  function listTodos(){
    console.log('***');
    todos.forEach(function(todo, i) {
        console.log(i + ': ' +todo);
      });
    console.log('***');
  }

  function addTodo(){
    //ask for new todo
    let newTodo = prompt('enter new todo');
    //add to todos array
    todos.push(newTodo);
    console.log('added todo');
  }

  function deleteTodo(){
    let index = prompt('Enter index of todo to delete');
    todos.splice(index,1);
    console.log('deleted todo')
  }
}, 500)
