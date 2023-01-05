import fs from 'fs'

class PokeFile {

    constructor(filename) {
        this.filename = filename
    }

    getAll = () => {
        const promesa = fs.promises.readFile(this.filename, 'utf-8')
            .then(contenido => {
                return JSON.parse(contenido)
            })
        
        return promesa
    }

}

export default PokeFile