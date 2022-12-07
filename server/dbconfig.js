const express = require('express');
const env = './.env'
const { Client } = require('pg')

const client = new Client(env)

client.connect()

module.exports = client;
