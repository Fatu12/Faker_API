const faker = require("faker");
const express = require('express')
const app = express()
const port = 3000;
// console.log(faker.datatype.uuid());
// console.log(faker.phone.phoneNumber())
// console.log(faker.name.firstName())
// console.log(faker.name.lastName())

// users object 
const userObject =()=>({
    _id :faker.datatype.uuid(),
    password:faker.internet.password(),
    email:faker.internet.email(),
    firstName :faker.name.firstName(),
    lastName :faker.name.lastName(), 
    phoneNumber:faker.phone.phoneNumber()
})
console.log(userObject())
// company object
const companyObject = ()=>({
    _id:faker.datatype.uuid(),
    name:faker.company.companyName(),
    street:faker.address.streetName(),
    city:faker.address.cityName(),
    zipCode:faker.address.zipCode(),
    country:faker.address.country()
})
console.log(companyObject())
// Create an api route "/api/users/new" that returns a new user
app.get("/api/users/new ", (_req,res) => {
    const newUser = newUserInfo();
    //  let user = new User();
    res.json(newUser)
    console.log(newUser)
    
});



// // Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (_req,res)=>{
    const  newCompany = newCompanyInfo();
    res.json({company})
})
// Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (_req,res)=>{
    const  newCompany = newCompanyInfo();
    const NewUser = newUsers();
    res.json({newCompany,newUser})
})





app.listen(port,()=>console.log(`Listening on port: ${port}`))



