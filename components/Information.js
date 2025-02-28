import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Information = () =>{

    return(
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
                    height: '9rem',
                    background: '#252A40',
                    flexDirection: 'row',
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
                        width: '50%',
                        fontSize: '2.5rem',
                        marginLeft: '5%',
                        
                        alignItems: 'center'
                    }}
                >
                    We’re farmers, purveyors, and eaters of
                </Typography>


                <Typography
                    sx={{
                        display:'flex',
                        fontFamily: 'Inter',
                        fontWeight: 300,
                        letterSpacing: '0rem',
                        color: 'white',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '0rem'
                    }}
                >
                    Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus.
                </Typography>


                
            </Box>
        </>
    )
}

export default Information;