# spark-joy
A little widget to ask your fans if what you made sparked joy. :)

## REQUIREMENTS:
- thumbs up/down entry point
    - follow up questions
    - thank you page
    - CTA

- email HTML snippet
- UI for creating snippets
- easy way to copypasta
- UI for seeing responses
    - how many each thing got
    - up/down ratio
    - see list of answers
    - user identifiers

## TECHNOLOGIES:
- React admin UI
- REact UI for end users
- Serverless DB to store stuff
- Serverless GraphQL backend
- GraphQL interface
    - mutations store data
    - graphql queries for admin UI
- Gatsby
    - all UI
    - statically compiled forms
    - statically compiled admin UI
    - landing page
- static file server for hosting
    - either Zeit or Netlify
- Stripe for monetization
- design system with Reakit and themes

# Backend Commands

- sls deploy
- ts-node localServer.ts