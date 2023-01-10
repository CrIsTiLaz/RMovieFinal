import { Grid } from '@mui/material';
import MasterCard from 'img/mastercard.png';
import Paypal from 'img/paypal.png';
import Visa from 'img/visa.png';
import Image from 'next/image';
import React from 'react';
// const MyImage = () => {
//   return <Image src={SafeShoppingImage} alt="Picture of the author" />;
//
export default function Bottom() {
    return (
        <Grid
            container
            justifyContent="space-between"
            // alignItems="center"
            sx={{
                padding: '40px 16px 40px 16px',
            }}
        >
            <Grid sx={{ color: '#798D92', fontSize: '13px' }}>
                © 2022 RMovie Toate drepturile rezervate
            </Grid>
            <Grid sx={{ display: 'display-flex', marginLeft: '30px' }}>
                <Grid sx={{ border: '1px solid #d3e1e4' }}>
                    <Image width={52} height={32} alt=" " src={MasterCard} />
                </Grid>
                <Grid sx={{ border: '1px solid #d3e1e4' }}>
                    <Image width={52} height={32} alt=" " src={Visa} />
                </Grid>
                <Grid sx={{ border: '1px solid #d3e1e4' }}>
                    <Image width={52} height={32} alt=" " src={Paypal} />
                </Grid>
            </Grid>
        </Grid>
    );
}
