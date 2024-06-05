import { ArrowUpRightIcon, BeakerIcon, BoltIcon, UserIcon } from '@heroicons/react/24/outline'

interface CarCardProps {
    name: string;
    brand: string;
    model: string;
    price: number;
    url: string;
    power: number;
    type: string;
    placeNumber: number;
}
const CarCard: React.FC<CarCardProps> = ({ name, brand, model, price, url, power, type, placeNumber }) => {
    return (
        <div className="flex bg-[rgb(55,57,72)] text-white rounded-2xl w-[31/*  */vw] h-[12vw]">
            <img className="w-44 object-cover rounded-l-2xl" src={url} alt="Car image" />
            <ul className="py-3 px-5">
                <li className="text-xs mb-4">
                    <h4 className="">{name}</h4>
                    <p className="">{brand} - {model}</p>
                </li>
                <li>
                    <ul className="justify-center text-xs">
                        <li className="flex items-center gap-1 mb-0.5">
                            <BoltIcon className="w-4" />
                            <p>{power} kW</p>
                        </li>
                        <li className="flex items-center gap-1 mb-0.5">
                            <BeakerIcon className="w-4" />
                            <p>{type}</p>
                        </li>
                        <li className="flex items-center gap-1">
                            <UserIcon className="w-4" />
                            <p>{placeNumber} seats</p>
                        </li>
                    </ul>
                </li>
                <li className="flex mt-4">
                    <p className="text-sm font-medium">{price} Ar</p>
                    <button className="flex text-xs mt-0.5 ml-8 hover:underline">View details <ArrowUpRightIcon className="w-3 mt-1 ml-1" /></button>
                </li>
            </ul>
            <div>
            </div>
        </div>
    )
}

export default CarCard