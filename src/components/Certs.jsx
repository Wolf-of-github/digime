import grecert from '../assets/gre.png'
import toefl from '../assets/toefl.png'
import cet from '../assets/cet.png'

const Certs = () => {
    return(
    
    <div className='mt-16'>
        

        <div className="flex text-2xl font-bold text-gray-100 font-mono text-justify">
            Competitive Exams
        </div>
        
        <div className="flex h-80 gap-5 mb-24 mt-8">
            <div className='w-full'>
                <img src={grecert} alt="Image 1" className=" object-cover" />
            </div>
            <div className='w-full'>
                <img src={toefl} alt="Image 1" className=" object-cover" />
            </div>
            <div className='w-full'>
                <img src={cet} alt="Image 1" className=" object-cover" />
            </div>
        </div>
    </div>
    );
}
export default Certs;