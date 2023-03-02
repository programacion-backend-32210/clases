
class ToyModel {
    constructor() {
        this.db = []
    }

    getAll = () => {
        return this.db
    }

    create = data => {
        this.db.push(data)

        return {
            newData: data,
            result: true
        }
    }

    update = (id, data) => {
        
    }
}

export default ToyModel