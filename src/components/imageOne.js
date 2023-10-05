import { Parallax } from 'react-parallax';
import img1 from '../img/main.jpg'


const imageOne = () => (
    <Parallax className='image' bgImage={img1} strength={500}>
        <div className='Content'>
            {/* <span className='img-txt' style={{color:'grey',fontSize:100}}>
        Programming world!
    </span> */}
        </div>
        <div>
            <h3 style={{ color: 'white' }}>Back to programming world!</h3>

        </div>
    </Parallax>
);

export default imageOne