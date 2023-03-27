import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const List=["All","Live","Cricket","Motivation","Dance","Drama","Magic","Cooking","Swimming","Movie","Series","Academy","Scroll","Binge","Love","Mixes","K-Drama","Computer","React Js","Akshay Saini","Beauty","SkinCare","Ayurveda","shikakai","HairCare","Slim","Sports"]
  return (
    <div className='flex'>
        {/* <Button name="All"/>
        <Button name="Live"/>
        <Button name="Game"/>
        <Button name="Soccer"/>
        <Button name="Cricket"/>
        <Button name="Cookiing"/>
        <Button name="Dance"/>
        <Button name="Singing"/> */}
        {List.map((item)=>
            <Button name={item} key={item}/>
        )}
    </div>
  )
}

export default ButtonList