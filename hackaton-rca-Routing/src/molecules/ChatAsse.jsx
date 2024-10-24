import './ChatAsse.css'
import Img from '../atoms/Img';
function ChatAsse() {
    const messages = [
        { sender: "Asistente", text: "Hola, ¿cómo puedo ayudarte?" },
        { sender: "Usuario", text: "Necesito asesoría." },
        { sender: "Asistente", text: "Claro, ¿en qué área necesitas apoyo?" },
        { sender: "Usuario", text: "Inversiones." },
    ];

    return (
        <div className="chat-container">
            <div className="chat-box">
                <div className="chat-header">
                    <button classname="w-11 h-10">
                    <Img classname="w-11 h-10"  src="./2.png"/>

                    </button>
                    <h2 className="chat-title">Asistente</h2>
                    <button>
                                           <Img classname="w-11 h-10" src="./3.png" />
 
                    </button>
                </div>
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.sender === "Usuario" ? 'user' : 'assistant'}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ChatAsse