const express = require('express');
const axios = require('axios');
const router = express.Router();
const queryString = require('querystring');
const fetch = require('node-fetch');
const { response } = require('express');

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

router.get('/login', function(req, res){
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=identify`);
})

router.get('/callback', async function(req, res){
    if(!req.query.code) throw new Error("NO AUTH CODE");
    const code = await req.query.code;
    const creds = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`, 'utf8').toString('base64');
    let user = await fetch("https://discordapp.com/api/oauth2/token", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            grant_type: 'authorization_code',
            redirect_uri: REDIRECT_URI,
            code: code,
            scope: 'identify'
        })
    })
    .then(res => res.json())
    .then(async (res) => {
        return await fetch('https://discordapp.com/api/users/@me', {
            headers:{
                Authorization: `Bearer ${await res.access_token}`
            }
        })
        .then(res => res.json())
    })
    .catch((e) => {
        console.error("Error in /callback: ", e)
    })
    console.log(user)

    res.redirect(`http://localhost:3000/?user=${user.username}`);

})

router.post('/user', async function(req, res){
    let access_token = await req;
    console.log(access_token)
    

    console.log(user);
    res.status(200).send(user);
})

router.get('/refresh', async function(req, res){

})

module.exports = router;