import React from 'react';
import './EventForm.css'

export default function EventForm(props) {
  const closeModal=()=>{
    const wrapper = document.getElementsByClassName('eventFormWrapper')[0].style.display="none";

// window.onclick = function(event) {
//     if (event.target == wrapper) {
//         wrapper.style.display = "none";
//     }
// }
  }

  const handleSubmit = (event) => {
    // stop the event from leaving the form
    event.preventDefault();
    const myForm = event.target;
// console.log('myForm is..', myForm);
    props.addEvent(
      myForm.eventTitle.value,
      myForm.eventDescription.value,
      myForm.eventUrl.value
    );
    return false;
  };

  return (
    <div className="eventFormWrapper">
    <div className="innerWrap">
    <h1>Add Event</h1>

    <form className="form-inline" onSubmit={handleSubmit}>

      <div className="form-group">


        <input type="text" className="form-control input-lg" name="eventTitle" placeholder="Event Name" />
      </div>

      <div className="form-group">

        <input type="text" className="form-control input-lg2" name="eventDescription" placeholder="Event Description" />
      </div>

      <div className="form-group">

        <input type="text" className="form-control input-lg3" name="eventUrl" placeholder="Event Url" />
      </div>

      <button type="submit" className="btn btn-danger btn-lg" onClick={props.addEvent}>Add Event</button>
    </form>

    </div>
    </div>
  );
}
