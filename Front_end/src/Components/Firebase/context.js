import React from 'react';

const FirebaseContext = React.createContext (null);
/*createContext creates two components, a provider and a consumer.  
The provider component is used to create a Firebase instance
at the top level of React component tree and consumer component 
is used to retrieve the Firebase instance 
if it is needed in the React component.*/

export default FirebaseContext;
