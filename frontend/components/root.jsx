import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import FooterContainer from './footer/footer_container';
import WelcomePage from './welcome_page/welcome_page';
import GroupFormContainer from './groups/group_form_container';
import GroupShowContainer from './groups/group_show_container';
import EditGroupContainer from './groups/edit_group_container';
import EventShowContainer from './events/event_show_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
    replace('/login');
    }
  };
  return(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={WelcomePage} />
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/create" component={ GroupFormContainer } />
        <Route path='groups/:groupId' component={GroupShowContainer}
               onEnter={_ensureLoggedIn}/>
        <Route path='groups/:groupId/edit' component={EditGroupContainer}       onEnter={_ensureLoggedIn} />
        <Route path='events/:eventId' component={EventShowContainer} />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
