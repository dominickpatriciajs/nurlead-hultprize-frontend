import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardModel1 from './Cards/CardModel1';

const Coursespage = () =>{

    return (
        <>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"/>
        </head>
            <Box
            sx={{
                    display: 'flex',
                    width:'94%',
                    height: '40rem',
                    background: 'white',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    ml:'3%', mr:'3%' 
            }}
            >
            

                <Typography
                    sx={{
                        display:'flex',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        letterSpacing: '0rem',
                        color: '#CB6BE6',
                        ml:'3%',
                        textAlign: 'center',
                        width: '97%',
                        marginTop: '0rem'
                    }}
                >
                    APRENDE HACIENDO
                </Typography>

                <Typography
                    sx={{
                        display:'flex',
                        fontFamily: 'Open Sans',
                        fontWeight: 300,
                        letterSpacing: '0rem',
                        color: 'black',
                        ml:'3%',
                        textAlign: 'center',
                        width: '97%',
                        marginTop: '0rem'
                    }}
                >
                    Accede a los mejores cursos online para creativos. Interactúa con los mejores profesionales y descubre todos los secretos del sector.
                </Typography>


                <div
                    style={{
                        display: 'flex',
                        width:'100%',
                        height: '30rem',
                        background: 'white',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        mt:'2rem'
                    }}
                >

                    <CardModel1></CardModel1>
                    <CardModel1></CardModel1>
                    <CardModel1></CardModel1>
                    <CardModel1></CardModel1>
                </div>

                
            </Box>
        </>
    )
}

export default Coursespage;

