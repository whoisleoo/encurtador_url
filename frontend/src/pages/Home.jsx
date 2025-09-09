import api from '../services/api.js'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react';



function Home(){
    const inputShortUrl = useRef();
    const inputLongUrl = useRef();
    const [inputError, setInputError] = useState('');
    const [inputSuccess, setInputSuccess] = useState('');
     const [displayText, setDisplayText] = useState('Copy your link!')
     const [generatedUrl, setGeneratedUrl] = useState(null);


    

    const HandleEncurtador = async function(e){
        e.preventDefault()
        setInputError('');
        setInputSuccess('');
        try{

            const response = await api.post('/url', {
                shortUrl: inputShortUrl.current.value,
                longUrl: inputLongUrl.current.value
            });
            setInputSuccess('URL encurtada com sucesso!')
            setGeneratedUrl(response.data.newUrl);
            inputShortUrl.current.value = '';
            inputLongUrl.current.value = '';
        
        }catch(error){
           if(error.response && error.response.data){
        const mensagem = error.response.data.error || 'Erro interno do servidor.'
        setInputError(mensagem);

        if(error.response && error.response.data.erros_encontrados){
        const erros = error.response.data.erros_encontrados.join('.  ');
        setInputError(erros);
        }else{
        setInputError(mensagem)
      }
      }
            console.log(`Algo muito errado aconteceu lol ${error}`)
        }
    }



    const ErrorMessage = ({message}) => {
    if(!message){
     return null
    } 
    return(
    <div className='backdrop-blur-md text-md text-red-500 py-2 rounded-lg'>
      {message}
    </div>
    )
  }

   const SuccessMessage = ({message}) => {
    if(!message){
     return null
    } 
    return(
    <div className='backdrop-blur-md text-green-500 px-4 py-3 rounded-lg mb-4'>
      {message}
      <div className='pt-2'>
      <span className={` cursor-pointer ${displayText == 'Copied!' ? 'text-gray-200 border-gray-200 ' : 'text-white border-b-1'}`}  onClick={() => (handleCopy(`http://${generatedUrl}`))}>{displayText}</span>
      </div>
    </div>
    )
  }

    const handleCopy = async (text) => {

      try {
        await navigator.clipboard.writeText(text);
        setDisplayText('Copied!')
        setTimeout(() => {
            setDisplayText('Copy your link!')
        }, 2000);

    
      } catch (error) {
        console.error('Failed to copy text:', error);
      }
    };

    return(
        <section className="min-h-screen bg-black text-white overflow-hidden">
          <div className="justify-center py-20">
            <div className="justify-center mb-20">
                <h1 className="text-6xl font-bold hover:translate-y-0.5 transition-all duration-600 cursor-pointer mb-3 floating" >
                    Encurtar <p className="text-green-400 inline">URL</p>
                </h1>
                <span className="text-md text-gray-500 font-bold" >
                    Encurte sua <p className="inline text-green-400">URL</p> profissionalmente.
                </span>
            </div>
            <div className="w-auto flex justify-center">
                <form className="border border-green-400 rounded p-10 w-100" onSubmit={HandleEncurtador}>
                    <div className="font-bold mb-10 text-2xl" >
                        <h1>Comece aqui</h1>
                        </div>
                    <div className=" border border-gray-700 rounded p-2 mb-4 hover:border-green-400 transition-colors duration-300 text-start">
                    <input type="text" placeholder="https://www.seusite.com" className="p-1 border-none outline-0" ref={inputLongUrl}></input>
                    </div>
                    <div className=" border border-gray-700 rounded p-2 mb-10 hover:border-green-400 transition-colors duration-300 text-start">
                    <input type="text" placeholder="Encurtador" className="p-1 border-none outline-0" ref={inputShortUrl}></input>
                    </div>
                    <button className="bg-green-400 w-auto p-5 rounded font-bold text-black hover:bg-black hover:text-green-400 hover:border hover:border-green-400 transition-all duration-400">Encurtar URL</button>
                    <ErrorMessage message={inputError} />
                    <SuccessMessage message={inputSuccess}/>
                </form>
                
            </div>
          </div>
        </section>
    )
}




export default Home