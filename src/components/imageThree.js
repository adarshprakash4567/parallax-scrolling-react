import { Parallax } from 'react-parallax';
import programming1 from '../img/programming2.jpg'


const imageOne = () => (
    <Parallax className='image' bgImage={programming1} strength={500}>
        <div className='Content'>
            <span className='img-txt'>
                Programming world!
            </span>
        </div>
    </Parallax>
);

export default imageOne