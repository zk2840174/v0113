import {defineStore} from "pinia";
import {ref} from "vue";


const useMemberInfo = defineStore('useMemberInfo', () => {

  const memberInfo = ref( {mid:null, access:null, refresh: null})

  const setInfo = (mid, access, refresh) => {

    memberInfo.value.mid = mid
    memberInfo.value.access = access
    memberInfo.value.refresh = refresh

    localStorage.setItem("mid", mid)
    localStorage.setItem("access", access)
    localStorage.setItem("refresh", refresh)

  }

  const getInfo = () => {

    if(memberInfo.value.mid){
      return memberInfo
    }

    memberInfo.value = {
      mid: localStorage.getItem("mid"),
      access: localStorage.getItem("access"),
      refresh: localStorage.getItem("refresh"),
    }

    return memberInfo
  }

  return {memberInfo, setInfo, getInfo}

})

export default useMemberInfo
