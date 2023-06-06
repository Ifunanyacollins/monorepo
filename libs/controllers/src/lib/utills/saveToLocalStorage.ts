
type USER  = {
   token:string;
   email:string;
   role:string;
   tokenExpiryDate:string 
}
export function saveToLocalStorage(user:USER) {
    const {token,tokenExpiryDate,email,role} = user
    localStorage.setItem("authToken",token)
    localStorage.setItem('authEmail', email)
    localStorage.setItem('authTokenExp', tokenExpiryDate)
    localStorage.setItem("role",role)
}

export default saveToLocalStorage;