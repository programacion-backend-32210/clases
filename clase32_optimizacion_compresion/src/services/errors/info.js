export const generateUserErrorInfo = user => {
    return `
    Uno o mas properties estan incompletos o son invalidos.
    Lista de properties obligatgories:
        - first_name: Must be a string. (${user.first_name})
        - last_name: Must be a string. (${user.last_name})
        - email: Must be a string. (${user.email})
    
    `
}