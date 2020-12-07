import axios from "axios";

const baseDomain = process.env.VUE_APP_BASE_URL || "https://tekiii.com";
const baseURL = `${baseDomain}/wp-json/wp/v2/`;

const httpsClient = axios.create({
  baseURL,
  timeout: 70000, // indicates, 5000ms ie. 5 second
  headers: {
    "Content-Type": "application/json"
  }
});

// Adding token to request using interceptors
// httpsClient.interceptors.request.use(
//   config => {
    
//     let token = localStorage.getItem("key");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// httpsClient.interceptors.response.use((response) => {
//   return response;
// },
// (error) => {
//     if(error.response.status !== 401){
//       return Promise.reject(error);
//     }else {
      
//       const data = {
//         refresh_token: localStorage.getItem("refresh_token"),
//         user_id:store.state.user.user.id
//       }
//       console.log(data)
//       store.dispatch('refreshTokenAction', data)
//     }
// });

export default httpsClient;
