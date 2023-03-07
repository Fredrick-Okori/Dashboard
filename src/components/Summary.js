import React from 'react'
import { Grid, Typography, Stack } from '@mui/material'
import { BarChartOutlined, DashboardCustomizeOutlined, DashboardOutlined, GridViewOutlined } from '@mui/icons-material'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

export default function Summary() {
    return (
        <>
            <Grid 
                
              style={{display: 'flex', flexDirection: 'row', marginTop:'10px', gap: '1rem' }}  
            >
                <Grid xs={12} style={{  backgroundColor: 'rgb(25, 118, 210)' }}>
                    <Stack spacing={2}>
                        <Grid style={{ display: 'flex', flexDirection: 'row',  padding: '10px', gap: '1rem' }} >
                            <Grid>
                                <DashboardOutlined style={{fontSize: '60px', color: '#ffff'}} />
                            </Grid>
                            <Grid style={{color: '#fff'}}>
                                <span>Themes</span><br/>
                                <span style={{fontSize: '30px'}}>37</span>
                            </Grid>
                             
                            
                        </Grid>

                    </Stack>
                </Grid>

                <Grid xs={12} style={{ backgroundColor: 'rgb(253, 2, 2)' }}>
                    <Stack spacing={2}>
                        <Grid style={{ display: 'flex', flexDirection: 'row', padding: '10px', gap: '1rem' }} >
                            <Grid>
                                <BarChartOutlined style={{ fontSize: '60px', color: '#ffff' }} />
                            </Grid>
                            <Grid style={{ color: '#fff' }}>
                                <span>Themes</span><br />
                                <span style={{ fontSize: '30px' }}>37</span>
                            </Grid>


                        </Grid>

                    </Stack>
                </Grid>
            </Grid>
           
        </>
    )
}