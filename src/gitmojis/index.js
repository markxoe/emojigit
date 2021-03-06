const { workspace } = require('vscode')

// check if user is using custom emoji mapping
// if they are return the custom mapping
// if not return the default gitmoji mapping
module.exports = () => {
  const useCustom = workspace.getConfiguration().get('gitmoji.customEmoji')
  const custom = workspace.getConfiguration().get('gitmoji.customEmojiMap')

  return useCustom
    ? custom
    : [
        { emoji: '🎨', colon: ':art:', text: 'Improving structure or format of code' },
        { emoji: '⚡', colon: ':zap:', text: 'Improving performance' },
        { emoji: '🔥', colon: ':fire:', text: 'Removing code or files' },
        { emoji: '🐛', colon: ':bug:', text: 'Fixing a bug' },
        { emoji: '🚑', colon: ':ambulance:', text: 'Critical hotfix' },
        { emoji: '✨', colon: ':sparkles:', text: 'Introducing a new feature' },
        { emoji: '📝', colon: ':memo:', text: 'Writing documentation' },
        { emoji: '🚀', colon: ':rocket:', text: 'Deploying code' },
        { emoji: '💄', colon: ':lipstick:', text: 'Updating the UI or style files' },
        { emoji: '🎉', colon: ':tada:', text: 'Initial commit' },
        { emoji: '✅', colon: ':white_check_mark:', text: 'Adding tests' },
        { emoji: '🔒', colon: ':lock:', text: 'Fixing security issues' },
        { emoji: '🍎', colon: ':apple:', text: 'Fixing something with macOS' },
        { emoji: '🐧', colon: ':penguin:', text: 'Fixing something with Linux' },
        { emoji: '🏁', colon: ':checkered_flag:', text: 'Fixing something with Windows' },
        { emoji: '🍏', colon: ':green_apple:', text: 'Fixing something with iOS' },
        { emoji: '🔖', colon: ':bookmark:', text: 'Releasing / Versioning tags' },
        { emoji: '🚨', colon: ':rotating_light:', text: 'Removing linter warnings' },
        { emoji: '🚧', colon: ':construction:', text: 'Work in progress' },
        { emoji: '💚', colon: ':green_heart:', text: 'Fixing CI build' },
        { emoji: '⬇', colon: ':arrow_down:', text: 'Downgrading dependencies' },
        { emoji: '⬆', colon: ':arrow_up:', text: 'Upgrading dependencies' },
        { emoji: '📌', colon: ':pushpin:', text: 'Pinning dependencies to specific versions' },
        { emoji: '👷‍', colon: ':construction_worker:', text: 'Add CI build system' },
        {
          emoji: '📈',
          colon: ':chart_with_upward_trend:',
          text: 'Adding analytics or code tracking'
        },
        { emoji: '♻', colon: ':recycle:', text: 'Refactoring code' },
        { emoji: '🐳', colon: ':whale:', text: 'Work about Docker' },
        { emoji: '➕', colon: ':heavy_plus_sign:', text: 'Adding a dependency' },
        { emoji: '➖', colon: ':heavy_minus_sign:', text: 'Removing a dependency' },
        { emoji: '🔧', colon: ':wrench:', text: 'Changing configuration files' },
        {
          emoji: '🌐',
          colon: ':globe_with_meridians:',
          text: 'Internationalization and localization'
        },
        { emoji: '✏', colon: ':pencil2:', text: 'Fixing typos' },
        { emoji: '💩', colon: ':hankey:', text: 'Writing bad code that needs to be improved' },
        { emoji: '⏪', colon: ':rewind:', text: 'Reverting changes' },
        { emoji: '🔀', colon: ':twisted_rightwards_arrows:', text: 'Merging branches' },
        { emoji: '📦', colon: ':package:', text: 'Updating compiled files or packages' },
        { emoji: '👽', colon: ':alien:', text: 'Updating code due to external changes' },
        { emoji: '🚚', colon: ':truck:', text: 'Moving or renaming files' },
        { emoji: '📄', colon: ':page_facing_up:', text: 'Adding or updating license' },
        { emoji: '💥', colon: ':boom:', text: 'Introducing breaking changes' },
        { emoji: '🍱', colon: ':bento:', text: 'Adding or updating assets' },
        { emoji: '👌', colon: ':ok_hand:', text: 'Updating code due to code review changes' },
        { emoji: '♿', colon: ':wheelchair:', text: 'Improving accessibility' },
        { emoji: '💡', colon: ':bulb:', text: 'Documenting source code' },
        { emoji: '🍻', colon: ':beers:', text: 'WCD - Writing code drunkenly' },
        { emoji: '💬', colon: ':speech_balloon:', text: 'Updating text and literals' },
        { emoji: '🗃', colon: ':card_file_box:', text: 'Performing database related changes' },
        { emoji: '🔊', colon: ':loud_sound:', text: 'Adding logs' },
        { emoji: '🔇', colon: ':mute:', text: 'Removing logs' },
        { emoji: '👥', colon: ':bust_in_silhouette:', text: 'Adding contributors' },
        {
          emoji: '🚸',
          colon: ':children_crossing:',
          text: 'Improving user experience / usability'
        },
        { emoji: '🏗', colon: ':building_construction:', text: 'Making architectural changes' },
        { emoji: '📱', colon: ':iphone:', text: 'Working on responsive design' },
        { emoji: '🤡', colon: ':clown_face:', text: 'Mocking things' },
        { emoji: '🥚', colon: ':egg:', text: 'Adding an easter egg' },
        { emoji: '🙈', colon: ':see_no_evil:', text: 'Adding or updating a .gitignore file' },
        { emoji: '📸', colon: ':camera_flash:', text: 'Adding or updating snapshots' },
        { emoji: '⚗', colon: ':alembic:', text: 'Experiementing with new things' },
        { emoji: '🔍', colon: ':mag:', text: 'Improving SEO' },
        { emoji: '☸', colon: ':wheel_of_dharma:', text: 'Work about Kubernetes' },
        { emoji: '🏷', colon: ':label:', text: 'Adding or updating types (Flow, Typescript)' }
      ]
}
