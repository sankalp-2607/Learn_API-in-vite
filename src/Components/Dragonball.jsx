import React from 'react'

const Dragonball = (data) => {
    const descriptions = {
        1: "Goku is a Saiyan raised on Earth, known for his cheerful nature and love of fighting.",
        2: "Vegeta, the Prince of all Saiyans, is proud, powerful, and constantly seeking to surpass Goku.",
        3: "Piccolo, a wise and powerful Namekian, started as an enemy but became a key ally.",
        4: "Bulma is a brilliant scientist and inventor. From creating the Dragon Radar to time machines, her genius often saves the Z Fighters.",
        5: "Frieza is a ruthless galactic emperor feared across the universe for his tyranny and incredible power. His hatred for Saiyans fuels his actions.",
        6: "Zarbon is Frieza’s elite warrior, known for his elegance, vanity, and terrifying transformation that reveals his true strength.",
        7: "Dodoria is one of Frieza’s top enforcers, known for his brute strength, short temper, and ruthless nature. Despite his size, he's a dangerous fighter.",
        8: "Captain Ginyu is the flamboyant leader of the Ginyu Force, known for his loyalty to Frieza and his signature Body Change technique.",
        9: "Cell is a bio-engineered villain who absorbs others to achieve his perfect form.",
        10: "Gohan is Goku’s son, a scholar with hidden powers that rival the strongest fighters"
    };



    return (
        <div className='border-2 h-[30rem] w-[16rem] m-2 flex justify-center items-center rounded-3xl  shadow-2xl inset-shadow-sm inset-shadow-black '>

            <div className='w-full h-full rounded-3xl z-2'>
                <div className='border-b-2 border-b-amber-900 h-[50%] w-full bg-white relative rounded-t-3xl'>
                    <img className='rounded-t-3xl absolute t-4' src="https://web.dragonball-api.com/images-compress/89980.webp" alt="" />
                    <img className='absolute hover:scale-110 transition-all duration-600 ease-in-out h-80 left-4 z-3' src={data.data.image} alt="" />
                </div>
                <div className='h-[50%] bg-[#3d3e43] pl-4 pt-4'>
                    <div className='absolute z-200'>
                        <div className='relative group w-fit'>
                            <p className='text-neutral-50 text-2xl font-bold cursor-pointer'>
                                {data.data.name}
                            </p>

                            {/* Tooltip on Hover */}
                            {descriptions[data.data.id] && (
                                <div className='absolute left-0 mt-2 w-60 bg-gray-900 text-white text-sm p-2 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30'>
                                    {descriptions[data.data.id]}
                                </div>
                            )}
                        </div>

                        <p className='text-yellow-500 text font-bold'>{data.data.race + " - " + data.data.gender}</p>
                        <p className='text-white  font-bold'>Base KI: </p>
                        <p className='text-yellow-500 text font-bold'>{data.data.ki}</p>
                        <p className='text-white  font-bold'>Total KI: </p>
                        <p className='text-yellow-500 text font-bold'>{data.data.maxKi}</p>
                        <p className='text-white font-bold'>Affiliation: </p>
                        <p className='text-yellow-500 text font-bold'>{data.data.affiliation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dragonball