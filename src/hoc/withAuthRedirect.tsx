import React from "react";
import {Navigate} from "react-router-dom";


export const withAuthRedirect=(Component: any)=>{

  class RedirectComponent extends React.Component<any, any> {
    render(){

      if(!this.props.isAuth) return <Navigate to={'/login'}/>
      return <Component {...this.props}/>
    }
  }
  return RedirectComponent
}

// export const withAuthRedirect=(Component: any)=>{
//
//   const RedirectComponent =(props:any)=>{
//     console.log(props)
//       if(!props.isAuth) return <Navigate to={'/login'}/>
//       return <Component {...props}/>
//
//   }
//   return RedirectComponent
// }
//
