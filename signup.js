let chkusers = JSON.parse(localStorage.getItem('users'))
const allUsers= []
// console.log(users,'users')


const signup =  function () {
     let users2 =  chkusers? JSON.parse(localStorage.getItem('users')):[]

     const username = document.getElementById('signUpInputName').value 
     const email = document.getElementById('signUpInputEmail').value 
     const password = document.getElementById('signUpInputPassword').value

     const user = {
        username,
        email,
        password
     }

     console.log(users2)
     if (user !== null){
          console.log('condition 1')
          allUsers?.push(user, ...users2)
          console.log(allUsers,'allusers')
      }

   //   else {
   //        console.log('condition 2')
   //        allUsers.push(user)
   //     }


       localStorage.setItem('users' , JSON.stringify(allUsers))
       alert('User Signup Successfully')
}

const btnSignUp = document.getElementById('btnSignUp')
btnSignUp.addEventListener('click', signup)

