// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from '@mui/material/Table'
import Trophy from 'src/views/dashboard/Trophy'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import { useEffect, useState } from 'react'
// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Link from 'next/link'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/router'

const rows = [
  {
    age: 27,
    status: 'revoked',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com'
  }
]

const statusObj = {
  revoked: { color: 'error' },
  granted: { color: 'success' }
}

const PatientDashboard = () => {
  const [user, setUser] = useState({
    email: 'email',
    firstName: 'rachel',
    lastName: 'lastName',
    age: 'age',
    password: 'password',
    bloodgroup: 'bloodgroup',
    medicalData: {
      diagonsis: [
        {
          name: 'name',
          description: 'description',
          doctor: 'doctoremail',
          timestamp: 'timestamp',
          documentUploaded: ['hash']
        }
      ],
      records: [
        {
          name: 'rachel',
          timestamp: 'timestamp'
        }
      ]
    }
  })

  useEffect(()=>{
    if(window){
      console.log(JSON.parse(localStorage.getItem("user")))
      setUser(JSON.parse(localStorage.getItem("user")))
    }
  },[])

  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Trophy name={user.firstName} />
        </Grid>
        <Grid item xs={12} md={8}>
        <Card>
      <CardHeader
        title='PHR Information'
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <Avatar sx={{ boxShadow: 3, marginRight: 4, color: 'common.white', backgroundColor: `primary.main` }}>
          
          </Avatar>
          </IconButton>
        }
        subheader={
          <Typography variant='body2'>
           
              This data is displayed to everyone who views your profile
          
            😎 on our platform
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
       <Grid item md={12}>
       <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
              Age:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                23 years
              </Box>
            </Typography>
       </Grid>
            <br></br>
            <Grid item md={12}>
       <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
              Bloodgroup:{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                O+
              </Box>
            </Typography>
       </Grid>
           <Grid item md={12}>
           </Grid>
        </Grid>
      </CardContent>
    </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <TableContainer>
              <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                      <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                          <Typography variant='caption'>{row.designation}</Typography>
                        </Box>
                      </TableCell>
                     
                      <TableCell>{row.date}</TableCell>
                     
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={statusObj[row.status].color}
                          sx={{
                            height: 24,
                            fontSize: '0.75rem',
                            textTransform: 'capitalize',
                            '& .MuiChip-label': { fontWeight: 500 }
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default PatientDashboard
