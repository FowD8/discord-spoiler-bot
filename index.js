import os

'use strict';

const SpoilerBot = require('discord-spoiler-bot');

let config = {
    token: os.environ['SECRET'],
};

let bot = new SpoilerBot(config);
bot.connect();
