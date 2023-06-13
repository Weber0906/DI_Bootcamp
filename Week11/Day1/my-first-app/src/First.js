import './First.css'
import FirstClass from './Firstclass'
import React from 'react'

const First = () => {
    const users = [{
        name:'Nikolas',
        email:'ddd@gmail.com',
        id: 1
    },
    {
        name:'Mary',
        email:'aaa@gmail.com',
        id:2
    },
    {
        name:'Bob',
        email:'bbb@gmail.com',
        id:3
    }]
const styling = {
    textAlign: 'center',
    display: 'inline-block',
    padding: '20px',
    border: '1px solid black'

}
    const returnusers = users.map((item, i) => {
        return(
            <div key={i} style={{
                textAlign: 'center',
                display: 'inline-block',
                padding: '20px',
                border: '1px solid black',
            }}>
                <h4 className="title">{item.name}</h4>
                <p>{item.email}</p>
            </div>
        )
})
    return (
        <div>
            <h1>Hello,  </h1>
            {returnusers}
            <FirstClass/>
            {/* <h1>My First React component!!</h1>
            <h2>Made in june 2023</h2> */}
           
        </div>
    )
}

export default First