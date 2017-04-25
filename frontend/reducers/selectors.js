
export const selectGroup = ({ groups }, id) => {
   const group = groups[id] || {};
   return group;
};

export const groupsArray = ({ groups }) => (
  Object.keys(groups).map(key => groups[key])
);

export const selectEvent = ({ events }, id) => {
  debugger
   const event = events[id] || {};
   return event;
};

export const eventsArray = ({ events }) => (
  Object.keys(events).map(key => events[key])
);
