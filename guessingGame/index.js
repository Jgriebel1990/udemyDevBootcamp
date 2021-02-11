let todos = ['no defense', 'bone crossbow'];

let input = prompt('What would you like to do?');

while(input !== 'quit' && input !== 'q') {
  if ( input === 'list') {
      console.log('******************');
      for(let i = 0; i < todos.length; i++){
        console.log(`${i}: ${todos[i]}`)
      }  
      console.log('******************');
  } else if ( input === 'new') {
      let addTodo = prompt('Add a new todo');
      todos.push(addTodo);
      console.log('added a new todo')
  } else ( input === 'delete' ) 
      let index = prompt('choose index of item you wish to delete');
      todos.slice(index, 1);
      console.log('deleted item')

  input = prompt('What would you like to do?')
}

console.log('Quit The App!')