# bot-ux basic guide
### The bot state-container independent of any platform

This is a bot state container build with the intent to be highly upgradeable and reusable for
every bot endeavour. It is completely independent of the bot platform used.
This framework is highly dependent of the state of the user maintained in a db.

As of right now though, I have built this framework for the intent of Facebook messenger platform.

### Basic Overview

Recieve message -> Find action -> Execute action -> new userState -> new message -> save userState -> send message

Description of each process:

Recieve message: Straight Forward. A webhook, live polling response to the server with the latest message recieved by the bot.

Action: A method that takes a message and updates the userState to reflect the state after the message has been sent.

Find Action: With a message recieved, map the message to the correct action that would update correctly the userState to reflect the userState after this message. It is filtered through the userState and finally down to the message type.

Execute Action: After finding the correct action, execute the action and return the new state created by the action.

New UserState: the updated userState should have all the neccesary information to help generate the next message to send to the user.

New Message: With the new userState, generate a new message in response to this new userState, here you can make API calls, and really any async actions. 
