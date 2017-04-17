# Component Hierarchy

 **AppContainer**
 * HeaderSignedOut/HeaderSignedIn
 * FooterSignedOut/FooterSignedIn

**AuthFormContainer**
* AuthForm
  * UserSignUp
  * UserSignIn

**WelcomeContainer**
* IntroCover
* CategoriesIndex
  * CategoryItem

**HomeContainer**
* SearchBarContainer
  * SearchBar
* SearchResultsContainer
  * GroupSearchResultsIndex
    * GroupSearchResultItem
  * EventSearchResultsContainer
    * EventSearchResultItem

**GroupFormContainer**
* GroupForm

**EventFormContainer**
* EventForm

**GroupContainer**
* GroupEventsIndex
  * GroupEventIndexItem
* GroupInfoSidebar
* WhatsNewSidebar
* GroupToolbar

**EventContainer**
* EventDetails
* AttendanceInformationSidebar

**UserProfileContainer**
* UserProfile

**CalendarContainer**
* CalendarIndex
 * CalendarIndexItems

# Routes

Path | Component
:---:|:---:
"/" | "App"
"signup" | "AuthFormContainer"
"/signin" | "AuthFormContainer"
"/home" | "HomeContainer"
"/home/groups" | "GroupsContainer"
"/new-group" | "GroupFormContainer"
"/home/groups/:groupId" | "GroupContainer"
"/group/:groupid/new-event" | "EventFormContainer"
"/home/event/:eventId" | "EventContainer"
"/search" | "SearchContainer"
"/user/:userId" | "UserProfileContainer"
