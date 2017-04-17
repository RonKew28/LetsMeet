# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app


## JSON API

### Users

* `POST /api/users` - create new user
* `PATCH /api/users` - update user information
* `GET /users/:id` - get user information for user's profile

### Session

* `POST /api/session` - sign in user
* `DELETE /api/session` - sing out user

### Groups

* `GET /api/groups` - accepts location, name, and category query params to fetch group search results
* `POST /api/groups` - create new group
* `GET /api/groups/:id` - get specific group information
* `PATCH /api/groups/:id` - update group information if user created group (?)
* `DELETE /api/groups/:id` - delete group if user created it (?)

### Events
* `GET /api/events` - gets all events (??)
* `POST /api/events` - create new event
* `GET /api/events/:id` - get specific event information
* `PATCH /api/events/:id` - update event information if user created group (?)
* `DELETE /api/events/:id` - delete event if user created it (?)

### RSVPs
* `GET /api/events/:id/rsvps`
* `POST /api/rsvps`
* `PATCH /api/rsvps/:id`

### Memberships
* `GET /api/groups/:id/members`
* `POST /api/members`
* `DELETE /api/members/:id`
