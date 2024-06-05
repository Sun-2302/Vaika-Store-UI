"use client";
import BrandCard from "./components/BrandCard"
import CarCard from "./components/CarCard"
import NavBar from "./components/NavBar"


function landingPage() {
    return (
        <div className="bg-[url('/car1.jpg')] bg-contain">
            <div className="bg-black bg-opacity-65">
                <NavBar />
                <div className="flex flex-col text-white items-center pt-40 pb-72">
                    <p className="text-sm mb-2">find cars for sale near you</p>
                    <p className="font-semibold text-4xl">Find Your Perfect Car</p>
                </div>
                <div className="bg-slate-100 pt-16 pb-10 rounded-t-[70px]">
                    <h1 className="text-2xl ml-44 mb-5 font-semibold">Explore Our Premium Brands</h1>
                    <div className="flex justify-center gap-8">
                        <BrandCard name="Mercedes Benz" icon="/mercedes-benz.svg" />
                        <BrandCard name="Ford" icon="/ford.svg" />
                        <BrandCard name="Renault" icon="/renault.svg" />
                        <BrandCard name="Peugeot" icon="/peugeot.svg" />
                        <BrandCard name="Volkswagen" icon="/volkswagen.svg" />
                        <BrandCard name="Citroën" icon="/citroen.svg" />
                    </div>
                </div>
                <div className="flex flex-col pt-12 pb-16 pl-44 bg-white overflow-x-auto">
                    <h1 className="text-2xl mb-5 font-semibold">🔥 Popular cars</h1>
                    <div className="flex gap-5">
                        <CarCard url="/R8.jpeg" name="Audi R8" brand="Audi" model="Coupé V10 GT RWD 2023" price={20_000_000} power={456} type="Diesel" placeNumber={5} />
                        <CarCard url="/R8.jpeg" name="Audi R8" brand="Audi" model="Coupé V10 GT RWD 2023" price={20_000_000} power={456} type="Diesel" placeNumber={5} />
                    </div>
                </div>
                {/*Footer With Contact*/}
                <div>
                
                </div>
            </div>

        </div>

    )
}

export default landingPage