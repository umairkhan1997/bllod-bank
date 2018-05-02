import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    
    userName: "",
    email:"",
  data:[],
  signData:[],    
  dataofDonor:[],
  bloodDonors:[]
    
}
export default (state= INITIAL_STATE,action)=>{
    switch(action.type){
   case ActionTypes.USERNAME:
   return({
       ...state,
       userName:action.payload.userName,
   })
   case ActionTypes.USERDATA:
   return({
       ...state,
       data:action.payload.data,
   })
   case ActionTypes.SINGIN:
   return({
       ...state,
       signData:action.payload.signData,
   })
   case ActionTypes.DATAOFDONOR:
   return({
       ...state,
       dataofDonor:action.payload.dataofDonor,
   })
   
        case ActionTypes.AVAILABLE_DONORS:
            return ({
                ...state,
                bloodDonors:action.payload,

            })
            case ActionTypes.SignOut:
            return ({
                ...state,
                userName: "",
                password: ""
            })
   case ActionTypes.FACEBOOK_LOGIN:
   return({
       ...state,
       email: action.payload.email,
       displayName: action.payload.displayName,
       uid: action.payload.uid,
       photo: action.payload.photoUrl
    //    email:;
    //
   })

   default:
   return state;
   }
}