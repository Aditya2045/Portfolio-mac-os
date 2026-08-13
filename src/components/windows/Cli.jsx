import React from 'react'
import MacWindow from './MacWindow'
import "./cli.scss"
import TerminalModule from 'react-console-emulator'
const Terminal = TerminalModule.default || TerminalModule


const Cli = ({ windowName, setWindowState }) => {
const commands = {
  about: {
    description: 'Show a short bio about the portfolio owner.',
    usage: 'about',
    fn: () => 'Hi, I am Aditya Sharma — a software developer passionate about building modern, user-focused digital products.'
  },
  skills: {
    description: 'Display technology skills and tools.',
    usage: 'skills',
    fn: () => [
      'Core stack:',
      '  JavaScript, React, Core java, SQL',
      '  HTML, CSS, Sass, Tailwind',
      '  Git, GitHub,',
    ].join('\n')
  },
  projects: {
    description: 'Display featured portfolio projects.',
    usage: 'projects',
    fn: () => [
      'Featured projects:',
      '  1. Portfolio OS — interactive desktop-style portfolio',
      '  2. TaskFlow — productivity dashboard with team workflows',
    ].join('\n')
  },
  experience: {
    description: 'List work experience highlights.',
    usage: 'experience',
    fn: () => [
      'Experience highlights:',
      '  - Frontend Engineer building responsive web interfaces',
      '  - Full-stack development across product and internal tools',
      '  - Collaboration with cross-functional teams to ship features',
      '  - Focus on performance, accessibility, and maintainability'
    ].join('\n')
  },
  resume: {
    description: 'Show a quick resume summary.',
    usage: 'resume',
    fn: () => [
      'Resume summary:',
      '  Software developer with experience in modern web apps',
      '  Specializes in frontend architecture, product UI, and API integration',
      '  Enjoys solving high-impact product problems with clean code'
    ].join('\n')
  },
  contact: {
    description: 'Display portfolio contact information.',
    usage: 'contact',
    fn: () => [
      'Contact details:',
      '  Email: aditya89sharma0@gmail.com',
      '  Location: India',
      '  LinkedIn: https://www.linkedin.com/in/aditya-sharma001/',
      '  GitHub: https://github.com/Aditya2045'
    ].join('\n')
  },
  github: {
    description: 'Show a quick GitHub overview.',
    usage: 'github',
    fn: () => [
      'GitHub profile:',
      '  Contributions across frontend, backend, and tooling projects',
      '  Active interest in clean architecture and reusable code',
      '  Open to collaborations, freelance work, and product ideas'
    ].join('\n')
  },

}


    const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Type 'help' to see all available commands, or try:
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}  >
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'adityasharma:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
  }

export default Cli