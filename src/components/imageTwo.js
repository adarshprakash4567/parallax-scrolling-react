import { Parallax } from 'react-parallax';
import programming from '../img/programming.jpg'


const imageOne = () => (
    <Parallax className='image'  bgImage={programming}  strength={500}>
   <div className='Content'>
    <span className='img-txt'>
        Programming world!
    </span>
   </div>
    </Parallax>
);

export default imageOne