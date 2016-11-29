// contents of this file referenced from Jason's React todo app solution:
// https://github.com/jasonseminara/react_to-do/tree/solution3

// add index as key to corresponding event
function indexByKeyName(arr, keyName) {
  return arr.reduce((obj, el) => {
    obj[el[keyName]] = el;
    return obj;
  }, {});
}

export default class AjaxAdapter{
  // executes fetch call to api/events and returns data as json
  static getAllEvents() {
    return fetch('/api/events')
    .then((r) => {
      return r.json();
    })
    .then(data => indexByKeyName(data, 'id'));
  }

  // return events for specified user
  static getEventsForUser(user) {
    return fetch(`/api/${user}`)
    .then((r) => {
      return r.json();
    })
    .then(data => indexByKeyName(data, 'id'));
  }

  static addEvent(newEvent) {
    // console.log('newevent..', newEvent);
    return fetch('/api/events', {
      method:  'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newEvent)
    })
      .then(r => r.json());
  }

  static deleteEvent(id) {
    return fetch(`/api/events/${id}`, {
      method:  'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Methods': 'DELETE',
      },
    }).then(r => r.json());
  }
}
