// 用户管理
export const state = () => ({
    // 采用接口返回的数据结构
    userInfo: {
        token: "",
        user: {},
    },
}) 

export const mutations = {
    setUserInfo(state,data){
        state.userInfo = data;
    },
    // 清除
    cleanUserInfo(state,info){
        if(process,browser){
            localStorage.removeItem('userInfo')
        }
        state.userInfo = {}
    }
};

export const actions = {
    login({commit},data){

        return this.$axios({
            url:'/accounts/login',
            method:'POST',
            data: data
        }).then(res=>{
            commit('setUserInfo',res.data)
            return data
        })
    }
};