import express from 'express'

const app = express()

app.get('/', (req,res) => res.send('<h1>[R2] My Service</h1>'))

app.listen(8080, () => console.log('Listeing...'))

/**
 * 
 * docker login
 * 
 * docker tag simpleapi arturoverbel/simpleapi:1.0.0
 * 
 * docker push arturoverbel/simpleapi:1.0.0
 * 
 * docker run -it -p 8080:8080 --name simplecontainer -d arturoverbel/simpleapi:1.0.0
 * 
 * 
 */