
export const selectGroup = ({ groups }, id) => {
   const group = groups[id];
   return group;
};

export const groupsArray = (groups) => {
  let arr = [];
  if (groups) {
    let keys = Object.keys(groups);
    keys.forEach( (key) => arr.push(groups[key]))
  }
  return arr;
};


export const selectEvent = ({ events }, id) => {
   const event = events[id];
   return event;
};

export const eventsArray = ({ events }) => (
  Object.keys(events).map(key => events[key])
);
