import React from 'react'
import Banner from '@/components/Banner/Banner'
import How_Work from '@/components/How_Work/How_Work'
import Video from '@/components/Video/Video'
import Location from '@/components/Location/Location'
import Patnered from '@/components/Patnered/Patnered'
import Services from '@/components/Services/Services'
import Explore from '@/components/Explore/Explore'
import Better from '@/components/Better/Better'
import Works from '@/components/Works/Works'
import Faqs from '@/components/Faqs/Faqs'
import Vendor from '@/components/Vendor/Vendor'


export default function page() {
    return (

        <>
            <Banner />
            <How_Work />
            <Video />
            <Location />
            <Patnered />
            <Services />
            <Explore />
            <Better />
            <Faqs />
            <Works />
            <Vendor />

        </>
    )
}
