const express = require('express');

const cache = require('../routecache');

const router = express.Router();

const googleTranslate = require('@vitalets/google-translate-api');


router.get('/translate', cache(20), async (req, res) => {
    let queryParameter = req.query;

    let output = {};

    try {
        const response = await googleTranslate(queryParameter.enterText, { to: queryParameter.enterLanguageCode });
        output.translatedText = response.text;
        output.fromLanguage = response.from.language.iso;
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({ success: true, data: output, });
});

module.exports = router;
