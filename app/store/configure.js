/**
 * Created by mac1012 on 2017/6/20.
 */
/*applyMiddleware：
*           中间件:个人理解异步执行的中间操作即为中间件,正常情况下,store.dispatch只接受对象参数,不接受函数,这时就需要中间件发送action
*           redux-thunk:返回一个函数代替action对象
*           redux-Promise： Store.dispatch接受Promise对象作为参数
*           redux-logger:日志中间件
* createStore：创建store,将reducers放入store进行管理,管理数据传入组件
*
* redux整个流程:
* */
import {createStore,applyMiddleware} from  'redux'
import  reducers from '../reducers/index'
import {logger} from 'redux-logger'
export function configureStore() {


    const  store = createStore(reducers,applyMiddleware(logger))

    return store;
}
