export const validarLink = function(link){
    const httpsRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

    return httpsRegex.test(link);
}



export const validarUrl = function (req, res, next){
    const { shortUrl, longUrl } = req.body
    const erros = []; 

    if(!shortUrl) erros.push("Encurtador não especificado.");
    if(!longUrl) erros.push("Link não especificado.");

    
    if(longUrl && !validarLink(longUrl)){ 
        erros.push("Link digitado é inválido.");
    };
    if(shortUrl && shortUrl.length > 10 ){ 
        erros.push("Encurtador deve conter menos de 10 caracteres.")
    };
    
    next(); 
    };
