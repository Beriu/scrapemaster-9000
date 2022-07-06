# scrapemaster-9000

## Running the project

Clone it

```
git clone git@github.com:Beriu/scrapemaster-9000.git
```

Cd into it and install deps

```
cd scrapemaster-9000 && npm i
```

Run developemnt (Vite not CRA)

```
npm run dev
```

The app is created with the Vite development tool, it's a favorite amongts the Vue community. Even though there's some dummy data don't be mislead, you can add your own data using the dashboard and also perform actions.

The App revolves around 3 concepts:

-   Scrapper
-   ScrapperTarget (aka the config)
-   ScrapperResult (the result of the parsing)

So first we must create a scrapper or start an offline one, then we create a target, use the form to add the field you wish to parse using a css selector and then use the run button to select wich scrapper to use. After that we are automatically redirected to the results page.
