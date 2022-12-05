## Pages
- Start
- ChooseLobby
- JoinLobby
- ChooseTopic
- CreateUser
- Game
- GameEnd

## Components
- UsernameForm
- JoinLobbyForm
- Leaderboard
- Topic
- Difficulty
- AnswerBox
__________
Pages connect to
Start -> CreateUser -> Room/Waiting room? -> Lobby -> Game -> GameEnd

Pages have a comp of...
Start
- Rockets

CreateUser
- UsernameForm

Room
- JoinLobbyForm
- CreateLobby -> has category & difficulty comp -> leaderboard comp in difficulty

Lobby
- 

Game (start game)
- AnswerBox

GameEnd
