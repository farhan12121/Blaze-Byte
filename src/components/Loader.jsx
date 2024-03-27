import { ScaleLoader } from 'react-spinners';
const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-164px)]'>

            <ScaleLoader size={100} color="#36d7b7"></ScaleLoader>
        </div>
    );
};

export default Loader;