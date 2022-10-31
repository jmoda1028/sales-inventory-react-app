// import axios from '../util/api'

// const login = (email, password) => {
//     return axios
//     .post('login/', { email: email, password: password,})
//     .then(res => {
//             const dataaa = res.data
//             const token = res.data.access_token;
//             localStorage.setItem('token', token);
//             const {detail} = res.data;
//             const user = res.data;
//             console.log(detail);
            
//             //GET ROLE
//             axios.get(`profile_view/?email=${email}`)
//             .then(res => {
//                 //GET USER DETAILS
//                 const user = res.data;
                
//                 console.log(user);
                

//                 user.map(user => {
//                     const role = user.role__name;
//                     const userId = user.id;
//                     const firstName = user.first_name;
//                     const lastName = user.last_name;
//                     localStorage.setItem('role', role);
//                     localStorage.setItem('userId', userId);
//                     localStorage.setItem('firstName', firstName);
//                     localStorage.setItem('lastName', lastName);
//             })
//         });

//             return res.data;
    
//         })

// }

// const authService = {
//     login,
//   };

// export default authService;