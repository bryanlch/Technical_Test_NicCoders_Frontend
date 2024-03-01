import ButtonStandard from '../../components/buttons/button-standard';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigateTo = useNavigate();

    const handleInit = () => {
        navigateTo('/character');
    }
    return (
        <>
            <div className='w-full h-screen flex justify-center items-center  '>
                <div className='bg-[#02AFC5] shadow-xl w-4/5 max-w-[1300px] max-h-[550px] rounded-lg '>
                    <div className=' grid grid-cols-1 md:grid-cols-2 '>
                        <div className="h-full flex justify-center items-center p-10">
                            <div className='grid grid-flow-row'>
                                <div className='my-5 text-center text-white'>
                                    <h1 className='text-4xl font-bold my-3'>¡Bienvenido!</h1>
                                    <p className='text-lg'>Personajes de rick and morty</p>
                                </div>
                                <div className='flex justify-center '>
                                    <div className='grid grid-cols-2 gap-3 md:w-80'>
                                        <ButtonStandard children={"Mostrar personajes"} onClick={handleInit} />
                                        <ButtonStandard children={"Favoritos"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end ">
                            <img
                                src="./public/img/_34bb7b89-e5b4-4d09-ac34-f1ce539ec0de.jpg"
                                alt="test"
                                className="h-auto max-h-[550px] rounded-md  "
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}