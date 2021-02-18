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
 function AppComponent() {
     
    const [token] = useToken()
   
    return (
       <TokenContext.Provider value={token}>
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

       </TokenContext.Provider>
       
    )
}

export const App= hot(()=><AppComponent/>)
