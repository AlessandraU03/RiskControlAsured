import ChatAsse from "../molecules/ChatAsse";
import Header from "../molecules/header";
import Opciones from "../molecules/Opcione";
import Buton from "../atoms/Button";
import './SectionAssitente.css';

function SectionAssitente() {
    return (
        <>
       <Header />
            <div className="section-assistente">
                <div className="opciones">
                    <Opciones />
                </div>

                <div className="chat-container">
                    <ChatAsse />
                </div>

                <div className="button-container">
                    <Buton text="Cual es tu problema" className="button" />
                    <Buton text="Necesito asesoría" className="button" />
                    <Buton text="Necesito invertir" className="button" />
                </div>

                <div className="mensaje">
                    <p>Mensaje</p>
                </div>
            </div>
        </>
    )
}
export default SectionAssitente;