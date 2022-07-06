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
