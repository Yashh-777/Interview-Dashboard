import React from 'react'

export function getmails() {
    return new Promise(function(resolve, reject){
      apiActionWithToken({
        method: 'GET',
        url : 'https://gmail.googleapis.com/gmail/v1/users/me/messages'
      })
      .then(response=>{
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
  

export default abc