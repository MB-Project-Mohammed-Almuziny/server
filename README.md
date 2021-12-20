# server

## used library

- express
- cors
- morgan
- dotenv
- mongoose
- bcrypt
- jsonwebtoken

## Models

- users model

| key        | type            | options          | default value |
| ---------- | --------------- | ---------------- | ------------- |
| name       | String          | required, unique | n/a           |
| email      | String          | required, unique | n/a           |
| password   | String          | required         | n/a           |
| roles      | Schema <roles>  | required         | n/a           |
| isBocked   | Boolean         | n/a              | false         |
| headline   | String          | n/a              | n/a           |
| about      | String          | n/a              | n/a           |
| course     | Schema <course> | n/a              | n/a           |
| enrole     | Schema <course> | n/a              | n/a           |
| lessons    | Array           | n/a              | n/a           |
| isVerified | Boolean         | n/a              | false         |

- roles model

| key  | type   | options          | default value |
| ---- | ------ | ---------------- | ------------- |
| role | String | required, unique | n/a           |

- courses model

| key         | type              | options  | default value |
| ----------- | ----------------- | -------- | ------------- |
| title       | String            | required | n/a           |
| about       | String            | required | n/a           |
| description | String            | required | n/a           |
| creator     | Schema <user>     | required | n/a           |
| category    | String            | required | n/a           |
| comments    | Schema <comment>  | n/a      | n/a           |
| reviews     | Schema <review>   | n/a      | n/a           |
| questions   | Schema <question> | n/a      | n/a           |
| isBocked    | Boolean           | n/a      | false         |

- comments model

| key         | type            | options  | default value |
| ----------- | --------------- | -------- | ------------- |
| creator     | Schema <user>   | required | n/a           |
| description | String          | required | n/a           |
| reference   | Schema <course> | required | n/a           |
| isBocked    | Boolean         | n/a      | false         |

- reviews model

| key         | type            | options  | default value |
| ----------- | --------------- | -------- | ------------- |
| creator     | Schema <user>   | required | n/a           |
| description | String          | required | n/a           |
| rating      | Number          | required | n/a           |
| reference   | Schema <course> | required | n/a           |
| isBocked    | Boolean         | n/a      | false         |

- questions model

| key         | type            | options  | default value |
| ----------- | --------------- | -------- | ------------- |
| creator     | Schema <user>   | required | n/a           |
| description | String          | required | n/a           |
| reference   | Schema <course> | required | n/a           |
| isBocked    | Boolean         | n/a      | false         |

- chats model

| key      | type             | options  | default value |
| -------- | ---------------- | -------- | ------------- |
| user1    | Schema <user>    | required | n/a           |
| user2    | Schema <user>    | required | n/a           |
| messages | array of objects | required | n/a           |

## ER Diagrams

 <img src="./ER-digram.drawio.png" alt="ER Diagram" />

## Routes

- User routes
  | HTTP Method | URL | Permissions | Request Body | Success status | Error Status | Description |
  | ----------- | ----- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
  | POST | `/register` | Public | { name, password, email } | 201 | 401 | create new user |
  | post | `/logIn` | Public | { nameOrEmail, password } | 200 | 400, 404 | check if user is exists then return token with user information |
  | POST | `/user/verify/:id` |Public | n/a | 200 | 400 | verifying user account |
  | POST | `/forgetPass` | Public | { email } | 200 | 400 | send reset password link to the user email |
  | post | `/setPass` | Public | { newPassword } | 200 | 400 | reset user password to new password |
  | PUT | `/:userId` | Private `Authentication` | { name or headline or about or avatar or password } | 200 | 400 | change user info or password or avatar |
  | GET | `/info/:userid` | Private `Authentication` | n/a | 200 | 400 | get user information |
  | PUT | `/block/:courseId` | Private `Authentication & Authorization` | n/a | 200 | 400 | block a user by id |

- Role routes
  | HTTP Method | URL | Permissions | Request Body | Success status | Error Status | Description |
  | ----------- | ----- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
  | POST | `/createRole` | Private `Authentication & Authorization` | { role } | 201 | 400 | create new role |
  | GET | `/getRole` | Private `Authentication & Authorization`| n/a | 200 | 400 | show all role in the database |

- Course routes
  | HTTP Method | URL | Permissions | Request Body | Success status | Error Status | Description |
  | ----------- | ----- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
  | GET | `/` | Public | n/a | 200 | 400 | get all courses |
  | POST | `/` | Private `Authentication` | { Title, About, Description } | 201 | 400 | create new course |
  | GET | `/search/:term` | Public | n/a | 200 | 400 | get courses by search term |
  | GET | `/category/:category` | Public | n/a | 200 | 400 | get courses by category |
  | GET | `/:courseId` | Public | n/a | 200 | 400 | get courses by id |
  | POST | `/addcomment` | Private `Authentication` | { creator, description, reference } | 201 | 400 | add new comment to a course |
  | PUT | `/:courseId` | Private `Authentication` | { title or about or description } | 200 | 400 | update a course |
  | POST | `/addLesson` | Private `Authentication` | { lesson } | 201 | 400 | add new lesson to a course |
  | PUT | `/block/:courseId` | Private `Authentication & Authorization` | n/a | 200 | 400 | block a course by id |

- Comments routes
  | HTTP Method | URL | Permissions | Request Body | Success status | Error Status | Description |
  | ----------- | ----- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
  | GET | `/:commentId` | Private `Authentication` | n/a | 200 | 400 | get comment by id |
  | PUT | `/block/:commentId` | Private `Authentication & Authorization` | n/a | 200 | 400 | block a course by id |

## UML Diagrams

 <img src="./server-UML.drawio.png" alt="UML Diagram" />

## Links

### Git

[Client repository Link](https://github.com/MB-Project-Mohammed-Almuziny/client)

[Server repository Link](https://github.com/MB-Project-Mohammed-Almuziny/server)

[Deployed App Link](http://heroku.com/)

### Trello

[Link to trello board](https://trello.com/mbprojectmohammedalmuziny)
