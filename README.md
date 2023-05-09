# Final Project

## Description

For the final project, I created a site about William Blake's poetry.

There are multiple reasons for this:
* I enjoy Blake's humor.
* I have used Blake's poems in my music production.
* There actually exists an API with Blake poems :)

## Functionality

* Index page
* All poems page
* Individual poem pages
* Blake Poem Generator page (ChatGPT powered)

Extra:
* The pages of the two poems I've used in music production include the song audio.

## Meeting the Requirements

### Data
#### API

* PoetryDB: `https://poetrydb.org/`

#### Static

Some of Blake's art images manually downloaded and included in the repo. Each poem page displays two art images in a randomly selected fashion.

My audio files.

### Microservices

I created a Netlify microservice that queries ChatGPT to create a poem in the style of William Blake. The prompt is padded automatically, the user only needs to provide a general theme for the poem.

#### CI/CD

GitHub Integration & Netlify Deployment

## Live site

[Netlify Site](https://final-project-jamstack-k.netlify.app)

## Local development

### Source

#### Clone

`git clone https://github.com/cscie114/csci-e-114-final-project-kapolos`

### Gatsby

### Env file

Use the submitted env file as your `.env` file. It contains my OpenAI token.

#### Alternatively: your own API key

##### ChatGPT / OpenAI

Create a `.env` file with a key called `OPENAI_API_KEY`.
Set your OpenAI API token as its value.

#### Install dependencies

`npm install`

#### Run

`npm start`

#### With netlify dev environment

`netlify-cli` has been installed as part of the dev dependencies. You can use `npm run netlify-dev` to launch an environment that supports local serverless functionality.

If you are using `WSL 2`, you will probably want to `export BROWSER=none` before launching the script.

## Screenshots

![Generator 1](https://i.imgur.com/o16aFx8.jpeg)
![Generator 2](https://i.imgur.com/zCQPc74.png)
![Generator 3](https://i.imgur.com/UNbNuss.png)

## More songs

Well, just one for now: [Spotify](https://open.spotify.com/album/67hjKMcUUEoJIXlpMBopRz?highlight=spotify:track:6nRQ66TyhttH0MSNRY5rHj)

Best enjoyed with headphones.
