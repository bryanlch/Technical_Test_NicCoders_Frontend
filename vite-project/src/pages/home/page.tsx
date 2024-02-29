import ButtonStandard from '../../components/buttons/button-standard';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigateTo = useNavigate();

    const handleInit = () => {
        navigateTo('/list');
    }
    return (
        <>
            <div className='w-full h-fit flex justify-center items-center mt-10  '>
                <div className='bg-[#AED6F9] shadow-xl w-4/5 h-2/5 rounded-lg '>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                        <div className="h-full flex items-center p-10">
                            <div className='grid grid-flow-row'>
                                <div className='my-5 text-center text-white'>
                                    <h1 className='text-4xl font-bold my-3'>¡Bienvenido!</h1>
                                    <p className='text-lg'>Personajes de rick and morty</p>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='grid grid-cols-2 gap-3 md:w-80'>
                                        <ButtonStandard children={"Mostrar personajes"} onClick={handleInit} />
                                        <ButtonStandard children={"About"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="./public/img/logo.jpg"
                                alt="test"
                                className="h-3/5 md:h-4/5 mx-auto rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}