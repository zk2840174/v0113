

import axios from 'axios'
import useMemberInfo from "@/store/useMemberInfo";


const authAxios = axios.create()

const refreshFetch = async () => {

  const memberInfo = useMemberInfo()

  const member = memberInfo.getInfo().value

  const res = await axios.post('http://localhost:8080/api/member/refresh', member)

  if(res.data.msg ==='Expired'){
    return Promise.reject()
  }

  const resValue = res.data



  console.log('refreshed...............................', resValue)

  memberInfo.setInfo({...resValue})


  return Promise.resolve(() => resValue.access)

}


authAxios.interceptors.request.use((config) => {

  const memberInfo = useMemberInfo()

  const member = memberInfo.getInfo().value



  console.log('req fulfilled')

  const authHeader =  {'Authorization': `Bearer ${member.access}`}

  config.headers = authHeader

  return config

}, (error) => {

  console.log('req result', error)
})


authAxios.interceptors.response.use((response) => {

  console.log('res fulfilled')

  return response

}, async (err) => {

  const { config } = err

  console.log('res reject')

  const {data} = await err.response

  if(data.MSG === 'ExpiredJwt') {
    console.log("need to refresh....................")

    try {
      const res = await refreshFetch()

      const authHeader = {'Authorization': `Bearer ${res()}`}

      config.headers = authHeader

      console.log("refn.............................")
      console.log(config)

      return axios(config)

    }catch(e) {

      return Promise.reject("ReLogin")
    }

  }else {


    return Promise.reject(err);
  }


})

export default authAxios
