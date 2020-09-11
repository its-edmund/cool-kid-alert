const comebacks = require('./comebacks');

module.exports = {
  name: 'swear',
  description: 'will roast sender for swearing',
  execute(msg, args) {
    const index = Math.floor(Math.random() * comebacks.comebacks.length);
    msg.reply(comebacks.comebacks[index]);
  },
};
