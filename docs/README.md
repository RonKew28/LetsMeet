
# LetsMeet

[LetsMeet link (heroku)][heroku]

[Meetup link][meetup]

<!-- need to change heroku link to actual link of LetsMeet -->
[heroku]: https://www.heroku.com
[meetup]: https://www.meetup.com


## Minimum Viable Product

LetsMeet is a single page web application inspired by Meetup, built using Ruby on Rails and React/Redux. By the end of week 9, this web app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data, and sufficient CSS styling:

- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Hosting on Heroku
- [ ] Groups and joining groups
- [ ] Events and RSVPs
- [ ] Calendar (on group page)
- [ ] Search by location and group info (name, description)
- [ ] **BONUS**: Categories
- [ ] **BONUS**: Calendar (for all groups in search results)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [Sample State][sample-state]
* [DB Schema][schema]

[wireframes]: ./wireframes/
[components]: ./component-hierarchy.md
[api-endpoints]: ./api-endpoints.md
[sample-state]: ./sample-state.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)
**Objective:** Functioning rails project with front-end Authentication. This includes a welcome page when there is no current user, sign up and sign in pages, and a homepage for signed in users.

### Phase 2: Groups model, API, and components (2 days)
**Objective:** Groups can be created, read, edited (by creator of group), and destroyed (by creator of group) through the API. Users can also join groups. Creator of group can assign the group to one or more categories.

### Phase 3: Events model, API, and components (2 days)
**Objective:** Events can be created, read, edited (by creator of event), and destroyed (by creator of event) through the API. Members of the group can RSVP to events.

### Phase 4: Calendars (1 day)
**Objective:** Group show page has a calendar that lists all upcoming events. User can toggle between viewing both upcoming and previous events.

### Phase 5: Search by location and group information (name and description) (2 days)
**Objective:** User can search by category, group name, group description, and location.

### Bonus features (TBD)

- [ ] Calendar (for all groups in search results)
- [ ] Group members can leave comments on events
