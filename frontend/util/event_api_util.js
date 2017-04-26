export const fetchEvents = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/events',
  });
};

export const fetchEvent = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/events/${id}`,
  });
};

export const createEvent = (event) => {
  return $.ajax({
    method: 'POST',
    url: '/api/events',
    data: { event }
  });
};

export const updateEvent = (event) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: { event }
  });
};

export const deleteEvent = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}`,
  });
};

export const createRsvp = (eventId, memberId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/events/${eventId}/rsvps`
  });
};

export const deleteRsvp = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/events/${id}/rsvps`
  });
};
