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

export const searchGroups = (search) => {
  return $.ajax({
    method: 'GET',
    url: '/api/groups/search?search=${search}'
  });
};

export const createMembership = (groupId, userId) => {
  return $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/memberships`,
    data: { membership: { group_id: groupId, member_id: userId } }
  });
};

export const deleteMembership = (groupId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups/${groupId}/memberships`
  });
};
