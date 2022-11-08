import axios from "axios";

//Rest is using to handle api securely

class RestService {
  // Login Function :-

  fetchSignUp(formData){

    const config = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
    };

    return  axios.post(
      "https://localhost:8000/auth/login",
      formData,
      config
      ).then(res => {
        const data = res;
        return data;
      }
    );
  };

  // Adding users from me :-

  fetchSignIn(formData) {
    const config = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
    };

    return  axios.post(
      "https://localhost:8000/auth/signup",
      formData,
      config
      ).then(res => {
        const data = res;
        return data;
      }
    );
  }

  // Password Resetting :- 
  
  resetPassword(formData) {
    const config = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      }
    };

    const Data = {
      password: formData.password,
      newPassword: formData.newPassword
    }

    return  axios.put(
      `https://localhost:8000/auth/resetPassword/${formData.username}`,
      Data,
      config
      ).then(res => {
        const data = res;
        return data;
      }
    );
  }
}

export default new RestService();
