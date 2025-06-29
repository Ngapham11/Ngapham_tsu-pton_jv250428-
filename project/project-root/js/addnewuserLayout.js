//lay thong tin email va passwprd tren local ve js
let users = JSON.parse(localStorage.getItem(`users`)) || [];

//tinh nang them doi tuong
//click vao usercode se tu dong tao ra code
let userCode = document.getElementById(`userCode`);
let codeNumber = userCode.addEventListener("click", function () {
  userCode.value = Math.floor(Math.random() * 1000);

  let Add = document.getElementById(`Add`);
  Add.addEventListener(`click`, function (e) {
    e.preventDefault();
    //truy van cac input sang js

    let userName = document.getElementById(`userName`).value;
    let password = document.getElementById(`password`).value;
    let Role = document.getElementById(`Role`).value;
    let birthday = document.getElementById(`birthday`).value;
    let email = document.getElementById(`email`).value;
    let checkbox1 = document.getElementById(`Status1`).value;
    let checkbox2 = document.getElementById(`Status2`).value;

    console.log(birthday);

    //dieu kien trong cac o input
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    //thong bao loi neu nhap khong dung cu phap

    let errorEmail = document.getElementById(`errorEmail`);
    let errorUserName = document.getElementById(`errorUserName`);
    let errorPassword = document.getElementById(`errorPassword`);
    errorEmail.innerText = ``;
    errorUserName.innerText = ``;
    errorPassword.innerText = ``;
    let isValid = true;
    if (!emailRegex.test(email)) {
      errorEmail.innerText = `Email khong hop le`;
      isValid = false;
    }
    if (!usernameRegex.test(userName)) {
      errorUserName.innerText = `Username khong hop he`;
      isValid = false;
    }
    if (!passwordRegex.test(password)) {
      errorPassword.innerText = `Password khong hop le`;
      isValid = false;
    }
    //neu dung thi tao mot doi tuong moi va luu vao mang users
    if (isValid) {
      let newUsers = {
        userCode: Number(userCode.value),
        userName: userName,
        password: password,
        Role: Role,
        birthday: birthday,
        email: email,
        checkbox: checkbox1,
        checkbox: checkbox2,
      };
      users.push(newUsers);
      console.log(users);
      localStorage.setItem(`users`, JSON.stringify(users));
    }
    //rerset lai noi dung trong o input
    document.getElementById(`userCode`).value = ``;
    document.getElementById(`userName`).value = ``;
    document.getElementById(`password`).value = ``;
    document.getElementById(`Role`).value = ``;
    document.getElementById(`birthday`).value = ``;
    document.getElementById(`email`).value = ``;
    document.getElementById(`Status1`).value = ``;
    document.getElementById(`Status2`).value = ``;
  });
});
//an Back de quay lai trang management
let Back = document.getElementById(`Back`);
Back.addEventListener(`click`, function () {
  window.location.href = `http://127.0.0.1:5500/project-root/pages/Dashboard.html`;
});
