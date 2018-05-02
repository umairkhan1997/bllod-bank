import ActionTypes from '../constant/constant';
// import history from '../../History';
// import createBrowserHistory from 'history/createBrowserHistory'
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()
import history from '../../history';
// const hsitory = createBrowserHistory()
import firebase from 'firebase';

// Initialize Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAGNWNES-au5caqvz9CrgZpp9ZpKRKyrwI",
  authDomain: "react-redux-todo-app-97036.firebaseapp.com",
  databaseURL: "https://react-redux-todo-app-97036.firebaseio.com",
  projectId: "react-redux-todo-app-97036",
  storageBucket: "react-redux-todo-app-97036.appspot.com",
  messagingSenderId: "933300246240"
};
  firebase.initializeApp(config);


export function submit(data) {
  firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then(function (result) {
      console.log(result)
    })
    .catch(function (error) {
      console.log(error)
    });
  firebase.database().ref('/').child('Sing Up Email and PasswordSi').push(data);
  return dispatch => dispatch({ type: "USERDATA", payload: data })

}

export function signIn(user) {
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(function (result) {
      console.log(result)

    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  firebase.database().ref('/').child('Sing In Email and Password').push(user);
  return dispatch => dispatch({ type: 'SINGIN', payload: user })
  // history.push('/Usermain');

}

export function sendingData(userInfo) {
  let database = firebase.database().ref('/').child("dataOfDonor/" + userInfo.blood);
  database.push(userInfo);
  return dispatch => dispatch({ type: 'DATAOFDONOR', payload: userInfo });
}



export function availableDonors(bloodDonors) {

  return {
    type: 'AVAILABLE_DONORS',
    payload: bloodDonors
  }
  console.log()
}

export function facebookSignin(){
  return
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      history.push('/select')
      dispatch => dispatch({ type: 'FACEBOOK_LOGIN', payload: user });
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  
   
  
}


export function requestBlood(bloodRequest) {

  return (dispatch) => {

    var donorsCanDonate = [];
    var donorsArray = [];
    switch (bloodRequest) {
      case "A+":
        donorsCanDonate.push(['A+', 'O+', 'A-', 'O-']);

        break;

      case "B+": {
        donorsCanDonate.push(['B+', 'O+', 'B-', 'O-']);
        break;
      }
      case "AB+": {
        donorsCanDonate.push(['AB+', 'AB-', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-']);
        break;
      }
      case "O+": {
        donorsCanDonate.push(['O+', 'O-']);
        break;
      }
      case "A-": {
        donorsCanDonate.push(['A-', 'O-']);
        break;
      }
      case "B-": {
        donorsCanDonate.push(['B-', 'O-']);
        break;
      }
      case "AB-": {
        donorsCanDonate.push(['AB-', 'O-', 'A-', 'B-']);
        break;
      }
      case "O-": {
        donorsCanDonate.push(['O-']);
        break;
      }


    }
    // firebase.database().ref('/').child("dataOfDonor/").once('value', (data) => {
    //   let obj = data.val();
    //   // console.log(obj)
    //   for (var prop in obj) {
    //     // console.log(prop);
    //     // console.log(obj[prop]);

    //     for (var key in obj[prop]) {
    //       for (var i = 0; i < donorsCanDonate.length; i++) {
            
    //         console.log(donorsCanDonate[i]);
    //         for (var j = 0; j < donorsCanDonate[i].length; j++) {
    //           // console.log(donorsCanDonate[i][j]);
    //           if (donorsCanDonate[i][j] === obj[prop][key].blood) {
    //             console.log(obj[prop][key], "obj[prop]")

    //             donorsArray.push(obj[prop][key]);
    //           }
    //         }
    //       }
    //     }

    //   }
    //   console.log(donorsArray)
    // });
    // dispatch(availableDonors(donorsArray));
    donorsCanDonate.map((v, i) => {
      return v.map((value, index) => {

        console.log(v);
        firebase.database().ref('/').child("dataOfDonor/" + value).on('value', (data) => {
          let obj = data.val();
          console.log(obj);
          for (var prop in obj) {


            console.log(obj[prop].email);
            donorsArray.push(obj[prop]);
            console.log(donorsArray);



          }
        });
        dispatch(availableDonors(donorsArray));
      });
    });
  }
}

export function SignOut(){
 
    return dispatch => dispatch({type: SignOut})
  
}