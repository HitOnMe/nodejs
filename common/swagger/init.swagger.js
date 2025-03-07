import { application } from "express"
import pathSwagger from './profile.swagger.js'
const swagger = {
   
    openapi: "3.1.1",
    info: {
        title: 'figma',
        description: "Optional multiline or single-line description in [CommonMark]",
        version: "1.0.0"
    },
    servers: [{
        url: "http://localhost:5000",
        description: "Optional server description, e.g. Main (production) server"
    }],
    components:{
        securitySchemes: 
            {
                ApiKeyAuth:
                {
                    type: "apiKey",
                    in: "header",
                    name: "X-API-KEY"
                }
            }
    },
    paths: {
       ...pathSwagger.auth,
       ...pathSwagger.image,
       ...pathSwagger.comment
    },
}


export default swagger