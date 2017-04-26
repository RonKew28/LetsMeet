import React from 'react';
import { createRsvp, deleteRsvp } from '../../actions/event_actions';
import { createMembership } from '.../.../actions/group_actions';

class EventRsvp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { attendeeIds: this.props.attendeeIds, memberIds: this.props.memberIds };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleUnconfirm = this.handleUnconfirm.bind(this);
    this.handleGroupJoin = this.handleGroupJoin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({attendeeIds: nextProps.attendeeIds, memberIds: this.props.memberIds});
  }

  handleUnconfirm {
    this.props.deleteRsvp(this.props.eventId).
  }

}
