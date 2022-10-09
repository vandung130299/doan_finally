import React from 'react'
import { Layout } from '../Layout/Layout'
import { FlashSale } from '../Page/FlashSale/FlashSale'
import { HomeSlide } from '../Page/HomeSlide/HomeSlide'
import { ListBrand } from '../Page/ListBrand/ListBrand'
import { FeaturedPhone } from '../Page/FeaturedPhone/FeaturedPhone'

/**
* @author
* @function HomePage
**/

export const HomePage = (props) => {
    return (
        <Layout>
            <HomeSlide />
            <FlashSale />
            <ListBrand />
            <FeaturedPhone />
        </Layout>
    )

}