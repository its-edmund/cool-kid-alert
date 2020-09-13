module.exports = {
  name: '*help',
  description: 'list purpose and commands',
  execute(msg, args) {
    msg.channel.send(
      "I'm a bot created to help deter people from swearing too much in Discord"
    );
  },
};
