const vscode = require('vscode')
const convert = require('./convert')
const getCommitType = require('./getCommitType')
const sendMessageToTerminal = require('./sendMessageToTerminal')

// register this function as gitmojiCommit
module.exports = () =>
  vscode.commands.registerCommand('extension.gitmojiCommit', async function() {
    // get the gitmoji commit type
    const commitType = await getCommitType()
    // if no type is selected exit and display warning message
    if (!commitType) {
      return vscode.window.showWarningMessage('Gitmoji Commit: You did not pick a commit type.')
    }

    // prompt user for commit message text
    const commitText = await vscode.window.showInputBox({
      placeHolder: 'Commit message text ex: git commit -m :emoji: {{ your text here }}',
      ignoreFocusOut: true
    })

    // if no text is entered exit and display warning message
    if (!commitText) {
      return vscode.window.showWarningMessage('Gitmoji Commit: Commit message has no text.')
    }

    // compose message from commit type and commit text
    const commitMessage = `git commit -m "${convert(commitType)} ${commitText}"`

    // send the composed message to integrated terminal
    sendMessageToTerminal(commitMessage)
  })
