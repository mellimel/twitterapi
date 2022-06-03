# Twitter API

Generel: https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api

1. [Entwickleraccount erstellen](https://developer.twitter.com/en)
2. [Projekt erstellen](https://developer.twitter.com/en/portal/dashboard)
3. Dieses Repository verwenden:
Projekt installieren:
```sh
git clone https://github.com/Myrmod/twitterapi.git
cd twitterapi
npm install
```
Im Repository hast du eine `.env.example` Datei. Nenne diese zu `.env` um und tragen deinen `BEARER_TOKEN` ein. Diesen hast du bei der Erstellung deiner App bekommen.

Projekt aus dem Projektordner ausführen:
```sh
node index.js
```
Nach dem Ausführen dieses Befehls solltest du eine positive Ausgabe in der Kommandozeile sehen.

Requests sich selbst zusammenbauen: https://developer.twitter.com/apitools/api?endpoint=%2F2%2Ftweets%2Fsearch%2Frecent&method=get