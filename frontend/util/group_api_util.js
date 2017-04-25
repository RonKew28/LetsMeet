export const fetchGroups = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/groups/',
  });
};

export const fetchGroup = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/groups/${id}`,
  });
};

export const createGroup = (group) => {
  return $.ajax({
    method: 'POST',
    url: '/api/groups',
    data: { group }
  });
};

export const updateGroup = (group) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/groups/${group.id}`,
    data: { group }
  });
};

export const deleteGroup = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/groups/${id}`,
  });
};

export const createMembership = (membership) => {
  $.ajax({
    method: 'POST',
    url: `api/memberships/`,
    data: { membership }
  });
};

export const deleteMembership = (id) => {
  $.ajax({
    method: 'DELETE',
    url: `api/memberships/${id}`,
  });
};
