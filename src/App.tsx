import React, { useEffect, useState }  from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import Layout from './shared/Layout/Layout'
import Header from './shared/Header/Header'
import Content from './shared/Content/Content'
import CardsList from './shared/CardsList/CardsList'
import Dropdown from './shared/Dropdown/Dropdown'
import { useToken } from './hooks/useToken'
import {TokenContext} from './shared/context/TokenContext'
import {UserContextProvider} from './shared/context/userContext'
import { commentContext } from './shared/Content/commentContext'
import { Provider } from 'react-redux'
import { createStore, Reducer } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'


export type RootState = {
    commentText:string
}
 const initialState:RootState = {
    commentText:'adsfsvsa'
}
const rootReducer:Reducer<RootState> =(state = initialState,action)=>{
    return state
} 
const store = createStore(rootReducer, composeWithDevTools())


 function AppComponent() {

    const[commentValue, setCommentValue] = useState('') 
    const [token] = useToken() 
   const CommentProvider = commentContext.Provider
    const TokenContextProvider = TokenContext.Provider
    
    return (
        <Provider store={store}>
<CommentProvider value={{value:commentValue,
        onChange:setCommentValue}}>
            <TokenContextProvider value={token}>
           <UserContextProvider > 
           

<Layout>
           
<Header/>
<Content>
<CardsList/>
</Content> 
<br/>
<Dropdown button={<button>Test</button>}>
    <ul><li>1</li></ul>
</Dropdown> 
        </Layout>

        
          
        
           </UserContextProvider>

       </TokenContextProvider>

        </CommentProvider> 

        </Provider>
        

 



 


         
        
       
       
    )
}

export const App= hot(()=>  <AppComponent/>)

