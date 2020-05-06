import firebase from './firebase.js'

export const SET_PROJECTS = "SET_PROJECTS";

export const fetchData = () => {
    const db = firebase.firestore();
    const projects = db.collection('Portfolio').get();
  
    return dispatch => {
        projects
        .then(response => {
          console.log(response)
          var tempArray = []
          response.forEach(doc => {
            console.log(doc.data())
            tempArray.push(doc.data())
            console.log(tempArray)
          })
          console.log(tempArray)
          dispatch({ type: SET_PROJECTS, payload: tempArray });
        })
    };
  }