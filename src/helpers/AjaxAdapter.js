function indexByKeyName(arr, keyName) {
  return arr.reduce((obj, el) => {
    obj[el[keyName]] = el;
    return obj;
  }, {});
}

export default class AjaxAdapter{
  static getAllEvents() {
    return fetch('./api/events')
    .then((r) => {
      console.log(r.json());
      r.json();
    })
    .then((data) => {
      indexByKeyName(data, 'id')});
  }

  static addEvent(newTask) {
    return fetch('/events', {
      method:  'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newEvent)
    })
      .then(r => r.json());
  }

  static deleteTask(id) {
    return fetch(`/events/${id}`, {
      method:  'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(r => r.json());
  }
}
