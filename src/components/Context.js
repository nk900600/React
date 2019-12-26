import React from "react";


const UserContext =React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider , UserConsumer}
export default UserContext

// compenentname.contextType = UserContext
// then we have to  add
//  in div     {this.context}
// static contextTtpe= Usercontent ///only works with class methomns
// and can we used in only one child
//
//