const signin = function () {
    const users = JSON.parse(localStorage.getItem('users'))
    const mapUsers=[users]

    const email = document.getElementById('signInInputEmail').value
    const password = document.getElementById('signInInputPassword').value

    console.log(users,'users')

    users?.forEach(user => {
        if (user.email == email) {
            console.log(users,'users')
            if (user.password == password) {
                localStorage.setItem('authenticated-user', JSON.stringify(user))
                alert('User Signin Successfully');
                
            
            }
            else {
                alert('Password is incorrect');
                
            }
        }else if (user.email != email) {
            console.log('not at this index')
        
        }

    });

   
}

const btnSignIn = document.getElementById('btnSignIn')
btnSignIn.addEventListener('click', signin)