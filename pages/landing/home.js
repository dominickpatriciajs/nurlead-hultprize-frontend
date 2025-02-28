import Dividerpage from '../../components/DividerPage';
import Layaout from '../../components/Layaout';
import Navbar from '../../components/Navbar';
import Coursespage from '../../components/Coursespage'
import Information from '../../components/Information';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <div style={{display:'flex',  flexDirection: 'column', justifyContent: 'space-evenly', width: '100%'}}>
                <Layaout></Layaout>
                <Dividerpage></Dividerpage>
                <Coursespage></Coursespage>
                <Information></Information>

            </div>
        </>
    );
};

export default HomePage;