# Learning Goals

Implement a mini web app to practice components, props, state, events, and data fetching in react

## Target

The aim of this project is to build out a React application that displays a list of bots, among other features.

### Requirements

For this project, you must:

1. Have a well-written README file.
2. Fetch data from a local server running JSON DB server.

#### Core Deliverables

As a user, I should be able to:

- See profiles of all bots rendered in `BotCollection`.

- Add an individual bot to my army by clicking on it. The selected bot should render in the `YourBotArmy` component. The bot can be enlisted only **once**. The bot **does not** disappear from the `BotCollection`.

- Release a bot from my army by clicking on it. The bot disappears from the `YourBotArmy` component.

- Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the
  `YourBotArmy` on the frontend.

  ##### Advanced Deliverables

As a user, I should be able to:

- Choose if I want to enlist a bot into my army or just see their data. Clicking on the card should instead display a show view (`BotSpecs`) for that bot, which should replace `BotsCollection`.BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot.


# Author: 

bonganimasemola [2023]

