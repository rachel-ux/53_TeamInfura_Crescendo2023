// ** Icon imports
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'

const navigation = () => {

  


  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/patient'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      title:'Medical Records',
      icon:CubeOutline,
      path: '/patient/view-phr'
    }
    
  ]
}

export default navigation
