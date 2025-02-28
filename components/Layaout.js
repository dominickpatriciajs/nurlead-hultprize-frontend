import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';

const Layaout = () =>{


    return (
        <>
        <head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Newsreader&display=swap" rel="stylesheet" />
        </head>

            <Box
            sx={{
                    display: 'flex',
                    width:'100%',
                    height: '33rem',
                    background: 'linear-gradient(#252A40, #CB6BE6)',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
            }}
            >

                <Typography
                   
                    sx={{
                        display:'flex',
                        fontWeight: 400,
                        fontFamily: 'Newsreader',
                        letterSpacing: '0rem',
                        color: 'white',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '27%',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        marginLeft: '37%',
                        marginTop: '4rem'
                    }}
                >
                    We’re farmers, purveyors, and eaters of organically grown food.
                </Typography>


                <Typography
                    sx={{
                        display:'flex',
                        fontFamily: 'Inter',
                        fontWeight: 300,
                        letterSpacing: '0rem',
                        color: 'white',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '0rem'
                    }}
                >
                    eslogan
                </Typography>


                <Typography
                    sx={{
                        display:'flex',
                        fontFamily: 'Inter',
                        fontWeight: 700,
                        letterSpacing: '0rem',
                        color: 'white',
                        alignItems: 'center',
                        textAlign: 'center',
                        width: '100%',
                        justifyContent: 'center',
                        mt:4
                    }}
                >
                    ¿Qué quieres aprender?
                </Typography>

                
                <Box sx={{display:'flex', justifyContent: 'center',}}>
                    <Button variant="contained" sx={{backgroundColor:'#2B2E42', borderRadius:'5rem', fontSize:'1.4rem'}}>Únete Gratis</Button>        
                </Box>

            </Box>
        </>
    )
}

export default Layaout;
