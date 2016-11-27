import React from 'react';

export default function EventForm(props) {
  const handleSubmit = (event) => {

    // stop the event from leaving the form
    event.preventDefault();
    const myForm = event.target;

    props.addEvent(
      myForm.EventTitle.value,
      myForm.EventDescription.value,
      myForm.url.value
    );
    console.log(myForm.EventTitle.value);
    return false;
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>

      <div className="form-group">
        <label className="sr-only" htmlFor="eventName">Event Name</label>
        <input type="text" className="form-control input-lg" name="EventTitle" placeholder="Event Name" />
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor="EventDesc">Event Description</label>
        <input type="text" className="form-control input-lg" name="EventDescription" placeholder="Event Description" />
      </div>

      <div className="form-group">
        <label className="sr-only" htmlFor="EventUrl">Event Url</label>
        <input type="text" className="form-control input-lg" name="url" placeholder="Event Url" />
      </div>

      <button type="submit" className="btn btn-danger btn-lg" onClick={props.addEvent}>Add Event</button>
    </form>
  );
}
