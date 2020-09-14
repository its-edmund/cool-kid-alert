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
  bot.user.setGame('*help');
  console.info(`Logged in as ${bot.user.tag}!`);
});

let toggle = { toggled: false };

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  let swear = false;
  args.forEach(word => {
    if (filter.isProfane(word) && toggle.toggled) {
      swear = true;
    }
  });

  const command = swear ? 'swear' : args[0];

  if (!bot.commands.has(command)) {
    return;
  }

  try {
    if (command === '*toggle') {
      bot.commands.get(command).execute(msg, toggle);
      return;
    }
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});
