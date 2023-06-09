import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardWithCollapse from 'src/views/cards/CardWithCollapse'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import AvatarGroup from '@mui/material/AvatarGroup'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import { useState } from 'react'
import TextField from '@mui/material/TextField'
import TableContainer from '@mui/material/TableContainer'

import Modal from '@mui/material/Modal'

const statusObj = {
  revoked: { color: 'error' },
  granted: { color: 'success' }
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}
const rows = [
  {
    age: 27,
    status: 'revoked',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    diagnosis: 'diagnosis',
    description: 'description'
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'granted',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    diagnosis: 'diagnosis',
    description: 'description'
  }
]

const ViewRecords = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)



  const handleRedirect = () =>{

  }
  return (
    <ApexChartWrapper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Grid container>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Medical Diagnosis Details
            </Typography>
            <br></br>
            <br></br>
            <br></br>
            <Grid container spacing={[5, 0]}>
              <Grid item md={6}>
                <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                  Name:{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    23 years
                  </Box>
                </Typography>
              </Grid>
              <br></br>
              <Grid item md={6}>
                <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                  Doctor Name:{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    O+
                  </Box>
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                  Timestamp:{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    O+
                  </Box>
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography sx={{ fontWeight: 500, marginBottom: 3 }}>
                  Description:{' '}
                  <Box component='span' sx={{ fontWeight: 'bold' }}>
                    O+
                  </Box>
                </Typography>
              </Grid>
              <Grid item>
                <Grid item>
                    <br></br>
                </Grid>
              <Typography sx={{ fontWeight: 900, marginBottom: 3 }}>
                  Medical Records
                  
                </Typography>
              </Grid>
              <Grid item md={12}>
                <TableContainer>
                  <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Date</TableCell>
                        
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                          <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                              <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>
                                {row.name}
                              </Typography>
                             
                            </Box>
                          </TableCell>
                          <TableCell>{row.date}</TableCell>
                          <TableCell>
                            <Button component='a' onClick={handleRedirect} variant='contained' sx={{ px: 5.5 }}>
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      <Grid container spacing={6}>
        <Grid item xs={12} md={8}>
          <Card sx={{ position: 'relative' }}>
            <CardMedia sx={{ height: '12.625rem' }} image='/images/cards/background-user.png' />
            <Avatar
              alt='Robert Meyer'
              src='/images/avatars/1.png'
              sx={{
                width: 75,
                height: 75,
                left: '1.313rem',
                top: '10.28125rem',
                position: 'absolute',
                border: theme => `0.25rem solid ${theme.palette.common.white}`
              }}
            />
            <CardContent>
              <Box
                sx={{
                  mt: 5.75,
                  mb: 8.75,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h6'>Rachel Sequeira</Typography>
                  <Typography variant='caption'>Mumbai, Maharashtra</Typography>
                </Box>
                <Button variant='contained'>Diagnose</Button>
              </Box>
              <Box
                sx={{
                  gap: 2,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                  18 mutual friends
                </Typography>
                <AvatarGroup max={4}>
                  <Avatar src='/images/avatars/8.png' alt='Alice Cobnb' />
                  <Avatar src='/images/avatars/7.png' alt='Jeffery Warner' />
                  <Avatar src='/images/avatars/3.png' alt='Howard Lloyd' />
                  <Avatar src='/images/avatars/2.png' alt='Bettie Dunn' />
                  <Avatar src='/images/avatars/4.png' alt='Olivia Sparks' />
                  <Avatar src='/images/avatars/5.png' alt='Jimmy Hanson' />
                  <Avatar src='/images/avatars/6.png' alt='Hallie Richards' />
                </AvatarGroup>
              </Box>
              <Grid container>
                <Grid item xs={12} md={12}>
                  <TableContainer>
                    <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Diagonsis</TableCell>

                          <TableCell>Description</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map(row => (
                          <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                            <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>
                                  {row.name}
                                </Typography>
                                <Typography variant='caption'>{row.designation}</Typography>
                              </Box>
                            </TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.diagnosis}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>
                              <Button component='a' onClick={handleOpen} variant='contained' sx={{ px: 5.5 }}>
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      
    </ApexChartWrapper>
  )
}

export default ViewRecords
