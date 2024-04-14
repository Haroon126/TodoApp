import inquirer from "inquirer";
import chalk from 'chalk';


let todos: string[] = [];

do {
  let userSelect = await inquirer.prompt([
    {
      message: "What you want to do?",
      type: "list",
      name: "userSelect",
      choices: [
        "Add Todo",
        "Update Todo",
        "View Todo",
        "Delete Todo",
        "Mark As",
      ],
    },
  ]);

  if (userSelect.userSelect === "Add Todo") {
    let addnewTodo = await inquirer.prompt([
      {
        message: "Please Add Todo in the list",
        type: "input",
        name: "addnewTodo",
      },
    ]);

    if (addnewTodo.addnewTodo === "") {
      console.log(chalk.bgCyan.bold("Please Enter Your Todo") );
    } else {
      todos.push(addnewTodo.addnewTodo);
      todos.forEach(item => console.log(item)
      )
    }
  }

  if (userSelect.userSelect === "Update Todo") {
    let updateTodo = await inquirer.prompt([
      {
        message: "Which todo do you want to update?",
        name: "updateTodo",
        type: "list",
        choices: todos.map((item) => item),
      },
    ]);
    let addnewTodo = await inquirer.prompt([
      {
        message: "Please Add updated Todo",
        type: "input",
        name: "addnewTodo",
      },
    ]);

    let newTodo = todos.filter((val) => val !== updateTodo.updateTodo);
    todos = [...newTodo, addnewTodo.addnewTodo];
    todos.forEach(item => console.log(chalk.bgRed(item) )
      )
    
  }

  if (userSelect.userSelect === "View Todo") {
    todos.forEach(item => console.log(chalk.bgBlue( item))
      )
  }

  if (userSelect.userSelect === "Delete Todo") {
    let deleteTodo = await inquirer.prompt([
      {
        message: "Which todo do you want to delete?",
        name: "deleteTodo",
        type: "list",
        choices: todos.map((item) => item),
      },
    ]);
    let newTodo = todos.filter((val) => val !== deleteTodo.deleteTodo);
    todos = [...newTodo];
    todos.forEach(item => console.log(chalk.bgGray(` ${item}`))
      )
  }

  if (userSelect.userSelect === "Mark As") {
    let markAs = await inquirer.prompt([
      {
        message: "Which todo do you want to mark as?",
        name: "markAs",
        type: "list",
        choices: todos.map((item) => item),
      },
    ]);

    if (userSelect.userSelect === "mark As") {
      let newTodo = todos.filter((val) => (val == markAs ? "X" : " "));
      todos = [...newTodo];
      todos.forEach(item => console.log(chalk.bgYellow(item) )
      )
    }

  }
} 
while (true);
