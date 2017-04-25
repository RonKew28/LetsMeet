import React from 'react';
import { Link, withRouter } from 'react-router';
import { hashHistory } from 'react-router';

class EditEventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.event.id,
      name: this.props.event.name,
      location_name: this.props.event.location_name,
      location_address: this.props.event.location_address,
      date: this.props.event.date,
      time: this.props.event.time,
      description: this.props.event.description
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventDelete = this.handleEventDelete.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.eventId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.event !== newProps) {
      this.setState({
        id: newProps.event.id,
        name: newProps.event.name,
        location_name: newProps.event.location_name,
        location_address: newProps.event.location_address,
        date: newProps.event.date,
        time: newProps.event.time,
        description: newProps.event.description
      });
    }
  }

  handleEventDelete(e) {
    e.preventDefault();
    this.props.deleteEvent(this.state.id);
    hashHistory.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEvent = this.state;
    this.props.updateEvent(newEvent)
      .then((result) => {
        this.props.router.push(`events/${result.event.id}`);
      });
  }

  render() {
    return (

      <div className="new-group-container">
        <div className="group-form-header">
            <h3>Want to edit your event?!</h3>
            <h4>No problem. Edit your details below.</h4>
        </div>
        <div className="new-group-form">
          <form onSubmit={this.handleSubmit}>

            <div className="step">
              <label className="group-form-question">
              What's the address of your event?
              </label>
              <input type="text" placeholder="Please enter a location name"
                     value={this.state.location_name}
                     onChange={this.update("location_name")}/>
              <input type="text" placeholder="Please enter a location address"
                     value={this.state.location_address}
                     onChange={this.update("location_address")}/>
            </div>

            <div className="step">
              <label className="group-form-question">
                What date will the event be held?
              </label>
              <input type="date" placeholder="Please select a date"
                value={this.state.date}
                onChange={this.update("date")}/>
              <input type="time" placeholder="Please select a time"
                value={this.state.time}
                onChange={this.update("time")}/>
              <br/>
            </div>

            <div className="step">
              <label className="group-form-question">
                Give a name for your event!
              </label>
              <input type="text" placeholder="Please enter a name"
                value={this.state.name} onChange={this.update("name")}/>
              <br/>
            </div>

            <div className="step" id="step-four">
              <label className="group-form-question">
                Please give some details about your event.
              </label >
              <input type="text" placeholder="Please enter event details"
                value={this.state.description}
                onChange={this.update("description")}/>
            </div>

              <div>
                <input className="red-button"
                       id='new-group-submit'
                       type="submit"
                       value="Update Event" />
              </div>
              <button
                onClick={this.handleEventDelete}
                className='red-button'>
                DELETE EVENT
              </button>
              <br />
              <button
                onClick={this.navigateToSearch}
                className='cancel-button'>
                Cancel
              </button>
            </form>

            <div>
            </div>
          </div>
        </div>
      );
    }
  }

  export default withRouter(EditEventForm);
