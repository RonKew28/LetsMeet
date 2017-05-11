# LetsMeet

Check out a live version of LetsMeet here: [LetsMeet Live][letsmeet]

[letsmeet]: https://lets-meet-app.herokuapp.com/

LetsMeet is a full-stack web application inspired by Meetup. The application allows users can join groups that they are interested in and participate in events. It utilizes Ruby on Rails with a PostgreSQL database on the backend, and React.js with a Redux architectural framework on the frontend.
Go on the website, find people who share similar passions, and [LetsMeet!][letsmeet].

## Features and Implementation

### Groups and Events show pages
The show pages for individual groups and events contain a great deal of functionality. Both types of pages contain a Group Side Bar with basic information about the group, as well as a Group Navigation Bar. By toggling different buttons on the Group Navigation Bar, the user can view different components, such as a list of the Group's upcoming events and a list of the Group's members. These are rendered in the main show area on the page. Depending on the type of user that is viewing the page, a different set of buttons will render on the right side of the Group Navigation Bar (for example, a user who is not a member of a Group would see a button to join the group, whereas a creator of a group would see a button to edit the group). The events route is nested under its corresponding group's route, allowing the main event show component to render as a separate component, without having to rerender the Group Nav and Side Bars. The Redux cycle guarantees that these various components can rendered separately on the screen while simultaneously allowing for a rich and seamless user experience.

### Search Bar
Upon logging in, users are directed to the search page. Here, users can search for groups and upcoming events. Search is implemented using the pg_search gem, which searches the names and descriptions of the events and groups tables in the database. The search returns groups and events that match the input that the user entered in the search bar. Users can toggle between the Groups button and Calendar button to view either groups or a list of upcoming events that match the specified criteria. Clicking on an item on the search results page directs the user to the respective Group or Event show page.


### Future Directions for the Project
In addition to the features I have already implemented, there are a couple more features that I would like to add to this project in the future. The next steps are outlined below.

* ***Location-based Search:*** Users will be able to search for groups and events based on their location. This feature will be implemented using the Google Geocoder API.
One of the core features of Meetup is the ability to search for Meetups that are near your location. I plan to continue to implement search functionality into my project. A user will be able to search by location as well as event name and category name.
* ***Live Chat*** Users will be able to communicate with each other in real time via a messaging feature.
* ***Custom Group and Event Recommendations*** Users will be able to view Group and Event recommendations based on their search activity.
