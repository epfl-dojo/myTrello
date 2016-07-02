# mytrello

## Infos
Attempts to save trello information locally for:
  1. Having a local backup in markdown files
  1. Being able to save information in versioning system (e.g. GIT)
  1. Being able to edit cards with editor you want

## Getting started
Move `secrets-dummy.json` to `secrets.json` and add your key and tokens. See the §key in this file for more information.

## Organisation
  1. One file per card
  1. One folder per list
  1. One folder per board

## Links
  * [Start building with Trello](https://developers.trello.com/)
  * [Get started with trello API](https://developers.trello.com/get-started/intro)
  * [Node's npm trello client](https://www.npmjs.com/package/trello)

### Key
  * [Developer API key](https://trello.com/app-key)
    * [To get a read token](https://trello.com/1/connect?key=...&name=myTrello&response_type=token)
    * [To get a read/write token](https://trello.com/1/connect?key=...&name=myTrello&response_type=token&scope=read,write)
  * [Get user id](https://api.trello.com/1/members/[YourUsername]?fields=username,fullName,url&boards=all&board_fields=name&organizations=all&organization_fields=displayName&key=[trello_developer_api_key])
