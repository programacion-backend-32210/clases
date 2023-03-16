
fetch('http://127.0.0.1:8080/api/orders')
    .then(result => result.json())
    .then(json => {

        console.log(json)

        const fragment = documeznt.createDocumentFragment()

        json.result.forEach(order => {
            const div = document.createElement('div')
            const priceParagraph = document.createElement('p')
            const statusParagraph = document.createElement('p')
            const numberParagraph = document.createElement('p')

            priceParagraph.innerHTML = `total de la ordern: ${order.totalPrice}`
            statusParagraph.innerHTML = `Status: ${order.status}`
            numberParagraph.innerHTML = `Order Number: ${order.number}`

            div.appendChild(numberParagraph)
            div.appendChild(priceParagraph)
            div.appendChild(statusParagraph)

            fragment.appendChild(div)
            
        });

        const orderContainer = document.getElementById('orders')
        orderContainer.appendChild(fragment)

    })