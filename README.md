# mongoose-crud

Access the API via http://localhost:3000

**List of books route:***

| Route      | HTTP   | Header(s) | Body                                                         | Description             |
| ---------- | ------ | --------- | ------------------------------------------------------------ | ----------------------- |
| /books     | GET    | none      | none                                                         | Find all books          |
| /books/:id | GET    | none      | none                                                         | Find a single book      |
| /books     | POST   | none      | isbn: String (Required),<br/>title: String (Required)<br/>author: String (Required)<br/>category: String (Required)<br/>stock: Number (Required) | Create a single book    |
| /books/:id | PUT    | none      | author: String (Required)                                    | Update book author name |
| /books/:id | PATCH  | none      | author: String (Required)                                    | Update book author name |
| /books/:id | DELETE | none      | none                                                         | Delete a single book    |



***List of members route:***

| Route        | HTTP   | Header(s) | Body                                                         | Description            |
| ------------ | ------ | --------- | ------------------------------------------------------------ | ---------------------- |
| /members     | GET    | none      | none                                                         | Find all members       |
| /members/:id | GET    | none      | none                                                         | Find a single user     |
| /members     | POST   | none      | name: String (Required),<br/>address: String (Required)<br/>zipcode: String (Required)<br/>email: String (Required)<br/>phone: String (Required) | Create a single member |
| /members/:id | PUT    | none      | zipcode: String (Required)                                   | Update member zipcode  |
| /members/:id | DELETE | none      | none                                                         | Delete a single member |

***List of transactions route:***

| Route             | HTTP   | Header(s) | Body                                                         | Description                            |
| ----------------- | ------ | --------- | ------------------------------------------------------------ | -------------------------------------- |
| /transactions     | GET    | none      | none                                                         | Find all transactions                  |
| /transactions/:id | GET    | none      | none                                                         | Find a single transaction              |
| /transactions     | POST   | none      | member: ObjectId (Required),<br />in_date: Date <br />out_date: Date (Required)<br />due_date: Date (Required)<br />fine: Number (Required) | Create a single transaction            |
| /transactions/:id | PUT    | none      | in_date: Date or <br />out_date: Date                        | Update transaction in_date or due_date |
| /transactions/:id | DELETE | none      | none                                                         | Delete a transaction                   |