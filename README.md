# mudda
# Translation Caching

### Goal
- A web server that exposes an API to translate a text.

### Task
- Create a web server with a RESTful API to translate a text from one language to another.
- For the actual translation, an external service like Google Translate can be used.
- The source and target language should be definable via the API.
- In addition, cache (store in cache) translations, in order to avoid repeated hits to the translation API. The
cache must be persistent!

translation service.

### Tech stack used
-  `NodeJS` & `ExpressJS` (a flexible Node.js web application framework) as beckend.
-  `Google translate` as an external service for actual translation.
-  `node-cache` package for caching.

## Install Dependencies

```
npm i
```

## Run the app
```
# npm run server

## Usage 
To get the translation, we can Postman or any web browser and hit this API as follow:
```
# http://localhost:8000/translate?sourceText=""&targetLanguage=""


```
- `sourceText`: the text you want to translate
- `targetLanguage`: the langauge to be it has to be translated
<br>**NOTE:**
  - for the `targetLangauge`, only **ISO Language code** should be passed as value.
<br/>For example:
    - "hi" for Hindi
    - "ja" for Japanese
    - "fa" for Persian, etc.
    <br/>A list of all [ISO Language Codes](https://datahub.io/core/language-codes/r/0.html) is attached here.

- A sample example is shown here when we hit the route on Postman.
![](./_images/sample_example.png)

-Same thing can be done on any web browser by hitting the `GET` request.

## Caching 
In order to avoid repeated hits to the translation API, caching of translation is done.

If the HTTP method is `GET` then we cache the translation.
first time when a unique request is made it will take actual time to fetch the response. After that it get stored in cached for some time(here in this project I use 10 seconds but can be modified as need.). Now after each time if same request is made it will get fetched from cached translation.

For this I use `node-cache` npm package.

