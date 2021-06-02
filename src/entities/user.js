
/** USER **/


export default class User {
    email = String;
    password = String;
    repeatedPwd = String;
 
    constructor(email, password, repeatedPwd) 
    {
      this.email = email;
      this.password = password;
      this.repeatedPwd = repeatedPwd;
    }

    getEmail()
    {
      return this.email;
    }

    getPassword()
    {
      return this.password;
    }
    
}