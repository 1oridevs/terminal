let todos = [];

export const description = "Manage your personal to-do list";

export default function todo(commandArgs = '') {
  if (!commandArgs) return "Usage: todo add <task>, todo remove <task>, todo list";

  const parts = commandArgs.split(' ');
  const action = parts[0];
  const task = parts.slice(1).join(' ');

  if (action === 'add') {
    todos.push(task);
    return `Task added: ${task}`;
  } else if (action === 'remove') {
    todos = todos.filter(t => t !== task);
    return `Task removed: ${task}`;
  } else if (action === 'list') {
    return todos.length ? `Your tasks:\n${todos.join('\n')}` : "You have no tasks.";
  }

  return "Invalid command. Usage: todo add <task>, todo remove <task>, todo list";
}
