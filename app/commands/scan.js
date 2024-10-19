export const description = "Simulate a network scan for open ports";

export default function scan() {
  const ips = [
    "192.168.0.1",
    "192.168.0.100",
    "192.168.0.101",
    "10.0.0.5",
    "172.16.0.10"
  ];

  const ports = [
    { port: 22, service: "SSH" },
    { port: 80, service: "HTTP" },
    { port: 443, service: "HTTPS" },
    { port: 8080, service: "HTTP-alt" },
    { port: 21, service: "FTP" }
  ];

  let output = `Scanning network...\n\n`;

  ips.forEach(ip => {
    output += `IP: ${ip}\nOpen ports:\n`;
    ports.forEach(port => {
      if (Math.random() > 0.5) { // Randomly simulate open ports
        output += `- ${port.port} (${port.service})\n`;
      }
    });
    output += `\n`;
  });

  return output;
}
