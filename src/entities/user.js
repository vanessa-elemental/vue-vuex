
/** USER **/


export default class User {
    email = String;
    password = String;
    repeatedPwd = String;
    rememberMe = Boolean;
 
    constructor(email, password, repeatedPwd, rememberMe) 
    {
      this.email = email;
      this.password = password;
      this.repeatedPwd = repeatedPwd;
      this.rememberMe = rememberMe;
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