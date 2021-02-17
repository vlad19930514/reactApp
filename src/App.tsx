import React from 'react'
import './main.global.css'
import { hot } from 'react-hot-loader/root'
import Layout from './shared/Layout/Layout'
import Header from './shared/Header/Header'
import Content from './shared/Content/Content'
import CardsList from './shared/CardsList/CardsList'
import Dropdown from './shared/Dropdown/Dropdown'

function AppComponent() {
    return (
       
        <Layout>
            <Header/>
            <Content>
            <CardsList/>
            </Content>
            <br/>
            <Dropdown button={<buttn>Test</buttn>}>
                <ul><li>1</li></ul>
            </Dropdown>
        </Layout>
    )
}

export const App= hot(AppComponent)
