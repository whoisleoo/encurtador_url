import { prisma } from '../database/db.js'


export const postUrl = async function(req, res){
    const { shortUrl, longUrl } = req.body

    try{
        if(!shortUrl || !longUrl){
            return res.status(400).json({
                error: "Campos incompletos."
            })
        }

        if(!longUrl.includes("https://" || !longUrl.includes("http://"))){
            return res.status(400).json({
                error: "URL fornecida não apresenta https://"
            })
        }

        const alreadyExist = await prisma.url.findFirst({
            where: { shortUrl: shortUrl
            }
        })

        if(alreadyExist){
            return res.status(400).json({
                error: "esse encurtador já está sendo usado parceiro!"
            })
        }

        await prisma.url.create({
            data: {
                shortUrl: shortUrl.trim(),
                longUrl: longUrl.trim()
            }


            
        });
        res.status(200).json({
            message: "URL encurtada com sucesso",
            longUrl: longUrl,
            shortUrl: shortUrl,
            newUrl: `localhost:5173/${shortUrl}`
        })

    }catch(error){
        res.status(500).json({
            errorMessage: "ERRO interno no servidor.",
            errorType: error
        })
    }

}
