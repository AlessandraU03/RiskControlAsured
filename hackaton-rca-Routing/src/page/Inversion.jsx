import Header from "../molecules/header";
import CryptoList from "../organisms/CryptoList";
import Opciones from "../molecules/Opcione";


function Inversion() {
    return (
        <>
        <Header></Header>
        <Opciones></Opciones>
        <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
            <div className="w-full max-w-5xl"> 
                <h1 className="text-3xl font-bold mb-4">Comprar Cripto</h1> 
                <div className="flex justify-between">
                    <CryptoList />
                    
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Inversion;
