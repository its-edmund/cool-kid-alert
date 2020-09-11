module.exports = {
  name: 'swear',
  description: 'will roast sender for swearing',
  execute(msg, args) {
    const comebacks = [
      'What are you, five?',
      'Can you only make a point by swearing?',
      `${msg.author} is such a cool kid for swearing!`,
      `Look at ${msg.author} trying to get your attention.`,
      `I wish I was cool like ${msg.author}.`,
      'Is that the only way you can get attention?',
      'Hey, watch your profanity!',
      'Wow, swearing is so cool!',
      `${msg.author} looks so cool swearing!`,
      `Everyone look at ${msg.author}! He so cool for swearing!`,
      `${msg.author} must be so old because he's swearing.`,
    ];
    const index = Math.floor(Math.random() * comebacks.length);
    msg.channel.send(comebacks[index]);
  },
};
