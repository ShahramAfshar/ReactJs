import React from 'react'

function Function() {

  function  clickBtn(){
      console.log('i am fired');
      
  }

    return (
        <div>
            <button onClick={clickBtn}>Click Me!</button>
        </div>
    )
}

export default Function

