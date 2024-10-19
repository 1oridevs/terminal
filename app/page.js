'use client';
import { useState } from 'react';

export default function Home() {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleCommand = async (e) => {
    e.preventDefault();

    const [baseCommand, ...args] = command.split(' ');
    const commandArgs = args.join(' ');

    try {
      const commandHandler = await import(`./commands/${baseCommand}`);
      const result = await commandHandler.default(commandArgs);
      setOutput(result);
    } catch (error) {
      setOutput(`Unknown command: ${baseCommand}`);
    }

    setCommand('');
  };

  return (
    <div className="bg-black text-green-400 min-h-screen p-5 font-mono">
      <div className="border border-green-400 p-4">
        <p>Welcome to @1oridevs Portfolio</p>
        <p>Type 'help' to see available commands</p>
        <div className="mt-4">
          {/* Render the output */}
          <div dangerouslySetInnerHTML={{ __html: output }} />
          <form onSubmit={handleCommand}>
            <label>
              user@portfolio:~$ 
              <input
                type="text"
                className="bg-black text-green-400 outline-none"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                autoFocus
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
