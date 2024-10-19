export default async function help() {
    // Use import.meta.glob to dynamically import all command files
    const commandModules = import.meta.glob('./*.js');
    
    let output = '<ul>';
  
    // Iterate through all the command modules
    for (const filePath in commandModules) {
      if (filePath === './help.js') continue; // Skip help.js itself
  
      const module = await commandModules[filePath]();
      const commandName = filePath.replace('./', '').replace('.js', '');
      
      const description = module.description || 'No description available';
      output += `<li><strong>${commandName}</strong>: ${description}</li>`;
    }
  
    output += '</ul>';
    return output;
  }
  