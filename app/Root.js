/**
 * Created by mac1012 on 2017/6/20.
 */
/*
* Provider：容器组件
* */
import React,{Component} from 'react'
import {configureStore} from './store/configure'
import App from './component/App'
import {Provider} from 'react-redux'

const store = configureStore()
export default class Root extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}