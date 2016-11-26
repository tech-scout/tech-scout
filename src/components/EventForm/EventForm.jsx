import React from 'react';

export default function EventForm(props) {
  const handleSubmit = (event) => {
    // stop the event from leaving the form
    event.preventDefault();
    const myForm = event.target;
    console.log(myForm);
    props.addEvent(
      myForm.eventTitle.value,
      myForm.eventDescription.value,
      myForm.eventUrl.value
    );
    return false;
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>

      <div className="form-group">
        <label className="sr-only" htmlFor="eventTitle">Event Title</label>
        <input type="text" className="form-control input-lg" name="eventTitle" placeholder="Event Title" />
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor="eventDescription">Event Description</label>
        <input type="text" className="form-control input-lg" name="eventDescription" placeholder="Event Description" />
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor="eventUrl">Event Url</label>
        <input type="text" className="form-control input-lg" name="eventUrl" placeholder="Event Url" />
      </div>

      <button type="submit" className="btn btn-danger btn-lg">Add Event</button>
    </form>
  );
}
