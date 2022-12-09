const express = require('express');
const env = '.env'
const { Client } = require('pg')

const client = new Client('postgresql://bradley:99DLsT1U7bF2UCDFvKlEyg@basic-yak-3859.6zw.cockroachlabs.cloud:26257/quizdb?sslmode=verify-full')

client.connect().then(() => console.log('connected'))
    .catch((err) => console.error('connection error', err.stack))

module.exports = client;
