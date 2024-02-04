const express = require('express');
const createShortUrl = require('../controlers/url');
const router = express.Router();
const Url = require('../models/Url');
let counter = 100000;


router.post("/api/short", async (req, res) => {
    console.log(req.body);
    const short = createShortUrl(counter)
    counter++;
    await Url.create({ shortUrl: short, longUrl: req.body.input });
    const link = 'https://tiny-links-aw1j.onrender.com/api/' + short;

    res.send(link);
})
router.get("/api/:short", async (req, res) => {
    const data = await Url.findOne({ shortUrl: req.params.short });
    console.log(data);
    res.redirect(data.longUrl);

})
// let counter = 0;
// router.get("/counter", (req, res) => {Q0vGUdg
//     counter++;
//     res.send({ counter });
// })
module.exports = router;