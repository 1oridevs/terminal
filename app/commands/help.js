export default async function help() {
    // Use dynamic import instead of require.context()
    const commandModules = import.meta.glob('./*.js');
    
    let output = 'Available commands:\n';
  
    for (const filePath in commandModules) {
      if (filePath === './help.js') continue; // Skip the help file itself
  
      const commandName = filePath.replace('./', '').replace('.js', '');
      const { description } = await commandModules[filePath]();
  
      output += `- ${commandName}: ${description || 'No description available'}\n`;
    }
  
    return output;
  }
  