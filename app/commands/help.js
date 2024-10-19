export default async function help() {
    const commandModules = require.context('./', false, /\.js$/);
    
    let output = '<ul>'; 
    
    for (const filePath of commandModules.keys()) {
      if (filePath === './help.js') continue;
      
      const commandName = filePath.replace('./', '').replace('.js', '');

      const { description } = await commandModules(filePath);
      
      output += `<li><strong>${commandName}</strong>: ${description || 'No description available'}</li>`;
    }
    
    output += '</ul>';
    
    return output;
  }
  