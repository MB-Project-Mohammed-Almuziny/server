# server

## used library

- express
- cors
- morgan
- dotenv
- mongoose
- bcrypt
- jsonwebtoken

## Backend routes

- user routes
  | HTTP Method | URL | Permissions | Request Body | Success status | Error Status | Description |
  | ----------- | ----- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
  | POST | `/register` | Public | {username, password} | 201 | 401 | create new user |
  | post | `/logIn` | Public | { nameOrEmail, password } | 200 | 400, 404 | check if user is exists then return token with user information |
  | POST | `/user/verify/:id` |Public | (empty) | 200 | 400 | verifying user account |
  | POST | `/forgetPass` | Public | { email } | 200 | 400 | send reset password link to the user email |
  | post | `/setPass` | Public | { newPassword } | 200 | 400 | reset user password to new password |

- role routes
  | HTTP Method | URL | Permissions | Request Body | Success status | Error Status | Description |
  | ----------- | ----- | --------------------------- | ------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
  | POST | `/createRole` | Private `Authentication & Authorization` | { role, permissions } | 201 | 400 | create new role |
  | GET | `/getRole` | Private `Authentication & Authorization`| { name, email, password, role } | 200 | 400 | show all role in the database |

## Models

- user model

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

- course model

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

- chate model

| key      | type             | options  | default value |
| -------- | ---------------- | -------- | ------------- |
| user1    | Schema <user>    | required | n/a           |
| user2    | Schema <user>    | required | n/a           |
| messages | array of objects | required | n/a           |

## Diagrams

### ER Diagrams

 <img src="./ER-digram.drawio.png" alt="ER Diagram" />
### UML Diagrams

 <img src="./server-UML.drawio.png" alt="UML Diagram" />

## Links

### Trello

[Link to trello board](https://trello.com/mbprojectmohammedalmuziny)
