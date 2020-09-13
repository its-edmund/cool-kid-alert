module.exports = {
  name: '*toggle',
  description: 'toggle on retorts',
  execute(msg, args) {
    if (args.toggled) {
      msg.channel.send('Responding has now been turned off.');
      args.toggled = false;
    } else {
      msg.channel.send('Responding has now been turned on.');
      args.toggled = true;
    }
  },
};
