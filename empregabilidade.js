// const idade = prompt('Digite sua idade')
const date = new Date
const year = date.getFullYear()
const yearOfBorn = prompt('Que ano vc nasceu?')

if(year - yearOfBorn >= 18){
    console.log('Você pode votar esse ano')
}else{
    console.log('Você não pode votar esse ano')
}