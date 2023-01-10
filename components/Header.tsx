import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { Grid, Link, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import React from 'react';

// import { ReactComponent as Logo } from '../img/logo.svg'
// import { MenuHeader } from 'react-icons/fa';

const SearchIconWhite = () => {
    return <SearchIcon sx={{ color: '#b01a4d' }}></SearchIcon>;
};

const LiveTvIconBig = () => {
    return <LiveTvIcon sx={{ fontSize: '55px', color: 'black' }}></LiveTvIcon>;
};

export default function Header() {
    return (
        <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{
                background: 'linear-gradient(135deg, #374049 50%, #495159 50%);',
                padding: '10px 30px 10px 50px',
                font: 'Source Sans Pro,sans-serif',
            }}
        >
            <Link href='/' style={{ textDecoration: 'none' }}>
                <Grid item>
                    {/* <Image width={108} height={60} alt=" " src={RMovie} /> */}
                    <LiveTvIconBig></LiveTvIconBig>
                    <Typography sx={{ fontSize: '15px', color: '#b01a4d', font: 'Monaco' }}>
                        RMovie
                    </Typography>
                </Grid>
            </Link>
            <Link href={'/contact'}>
                <button className='background-color: rgb(176, 26, 77); text-white py-3 px-6 rounded text-sm mt-4'>CONTACT US</button>
            </Link>
        </Grid>
    );
}
