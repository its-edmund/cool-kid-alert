require('dotenv').config();
const Discord = require('discord.js');
const Filter = require('bad-words');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');
const TOKEN = process.env.TOKEN;
const express = require('express');

express().listen(process.env.PORT || 5000);

const filter = new Filter();

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

async function quote(msg) {
  // Split the message into arguments
  let content = msg.content.split(' ');
  // Check if message id is supplied
  if (content[1] == undefined) {
    msg.reply('You need to suplly a message id');
    return;
  }
  // Retrieve the message
  let quotedMessage = await msg.channel.fetchMessage(content[1]);
  // Parse the timestamp
  let date = new Date(quotedMessage.createdTimestamp);
  // Send the quote
  msg.channel.send(
    `"${quotedMessage.content}" - ${
      quotedMessage.author
    }, ${date.getFullYear()}`
  );
}

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  let swear = false;
  args.forEach(word => {
    if (filter.isProfane(word)) {
      swear = true;
    }
  });

  const command = swear ? 'swear' : '';

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
