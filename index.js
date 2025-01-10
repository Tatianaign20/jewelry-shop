const inputEmail = document.querySelector('.footer__input')
const buttonSubmit = document.querySelector('.button_footer')

//ДЛЯ РЕАЛИЗАЦИИ ОТПРАВКИ НА СЕРВЕР
// const BASE_URL = ""; //Добавить ссылку для реализации отправки на сервер

// const headers = {
//     Authorization: " ",
//     "Content-Type": "application/json"
// };

// const handleResponse = (response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       return response.json()
//         .then(err => {
//           throw new Error(`Ошибка: ${err.message || err.statusText}`);
//         });
//     }
// };
// const getUserAPI = () => {
//     const userURL = BASE_URL;
//     return fetch(userURL, {
//       method: "GET",
//       headers
//     })
//     .then(handleResponse)
// };
  
// const sendUserAPI = (email) => {
//     const userURL = BASE_URL;
//     return fetch(userURL, {
//       method: "PATCH",
//       body: JSON.stringify({
//         email
//       }),
//       headers
//     })
//     .then(handleResponse)
// };
  
buttonSubmit.addEventListener('click', () => {
    console.log('Отправляемые данные:', {
        email: inputEmail.value
      });
    
    // const email = inputEmail.value;
    // sendUserAPI(email)
    // .then((email) => {
    //     getUserAPI(email);
    //     console.log(email);
    // })
    // .catch((error) => {
    //     console.log(error);
    // })
})
