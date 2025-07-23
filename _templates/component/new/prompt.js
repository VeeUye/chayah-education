export default {
  prompt: async ({ prompter, args }) => {
    // If the component name is passed as an argument, skip the prompts
    if (args.name && args.type) {
      return args
    }

    const { type } = await prompter.prompt({
      type: 'select',
      name: 'type',
      message: 'What type of component is this?',
      choices: ['atoms', 'molecules', 'organisms', 'pages'],
    })

    const { name } = await prompter.prompt({
      type: 'input',
      name: 'name',
      message: "What's the component name?",
      validate(value) {
        if (!value.length) {
          return 'Component name cannot be empty.'
        }
        // Enforce PascalCase for component names
        if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
          return 'Component name must be in PascalCase.'
        }
        return true
      },
    })

    return { type, name }
  },
}
