// ** Icon imports
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import data from "../../pages/dataresponse.json";
import { useEffect } from 'react';

const navigation = () => {
  const user = data

  useEffect(()=>{
    console.log("loading useEffect", user)
  })

  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: user.type == 'patient' ? '/patient' : '/doctor'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title:'Medical Records',
      icon:CubeOutline,
      path: user.type == 'patient' ? '/patient/view-phr' : '/doctor/view-records'
    }
    
  ]
}

export default navigation
