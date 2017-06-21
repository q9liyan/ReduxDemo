/**
 * Created by mac1012 on 2017/6/20.
 */
/*
* reducer:由state对象结构和action动作组成,根据传入的Action和旧state对象,返回一个新的state
*          根据action.type更新state
* */
import * as TYPES from '../action/types'

const initialState = {
    count:0
};

export  function calulate(state = initialState,action) {
    switch (action.type){
        case TYPES.INCREASE:
            return {
                ...state,
                count:action.count
            };
        case TYPES.DECREASE:
            return {
                ...state,
                count:action.count
            };
        default:
                return state;
    }
}

