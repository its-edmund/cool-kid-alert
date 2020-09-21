module.exports = {
  name: '*help',
  description: 'list purpose and commands',
  execute(msg, args) {
    msg.channel.send(
      "This application is used to discourage swearing in servers that have people who excessively swear. I'll add a list of commands soon"
    );
  },
};
