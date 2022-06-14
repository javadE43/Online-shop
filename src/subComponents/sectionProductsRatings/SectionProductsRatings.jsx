import React from 'react'

import { Grid } from '@mui/material'
import { TopRatings } from '../topRatings/TopRatings'
import { FeaturedBanner } from '../featuredBanner/FeaturedBanner'



export const SectionProductsRatings = () => {
  return (
    <>
        <Grid container spacing={3}>
            <Grid item lg={6} sm={12} xs={12}><TopRatings/></Grid>
            <Grid item lg={6} sm={12} xs={12}><FeaturedBanner/></Grid>
        </Grid>
    </>
  )
}
