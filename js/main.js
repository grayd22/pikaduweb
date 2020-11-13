// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQll6lp2rKbHy-08A_GAomwDGKl36CiVo",
  authDomain: "pikadu-ed285.firebaseapp.com",
  databaseURL: "https://pikadu-ed285.firebaseio.com",
  projectId: "pikadu-ed285",
  storageBucket: "pikadu-ed285.appspot.com",
  messagingSenderId: "176312953462",
  appId: "1:176312953462:web:4e35df18627e0717a8cd57"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('firebase', firebase);
// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 


const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');
const exitElem = document.querySelector('.exit');
const editElem= document.querySelector('.edit');
const editContainer = document.querySelector('.edit-container');
const editUsername = document.querySelector('.edit-username');
const editPhotoURL = document.querySelector('.edit-photo');
const userAvatarElem = document.querySelector ('.user-avatar');
const postsWrapper = document.querySelector('.posts');
const buttonNewPost = document.querySelector('.button-new-post');
const addPostElem = document.querySelector('.add-post'); //форма поста 

const listUsers = [
  {
    id: '01',
    email: 'maks@mail.com',
    password: '12345',
    displayName: 'maks',
    photo: 'https://i.pinimg.com/originals/3f/bb/d7/3fbbd7a479d80c7f2fd52238182e7601.jpg'
  },
  {
    id: '02',
    email: 'kate@mail.com',
    password: '123456',
    displayName: 'kate'
  }
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
   if (!regExpValidEmail.test(email)) {
      alert('email не валиден');
      return;
    }
    
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден')
    }

  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert ('email не валиден');
      return;
    }

    if (!email.trim() || !password.trim()) {
      alert ('Введите данные')
      return;
    }

    if (!this.getUser(email)) {
      const user = {email, password, displayName: email.split('@')[0] };
      listUsers.push(user);
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    
    if (userPhoto) {
      this.user.photo = userPhoto; 
    }
    
    handler();
  },

  getUser(email) {
    return listUsers.find(item => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  } 
};

const setPosts = {
  allPosts: [
    {
      title: 'Заголовок поста',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags:['свежее','новое','горячее','мое','случайность'],
      author: {displayName: 'maks', photo: 'https://i.pinimg.com/originals/3f/bb/d7/3fbbd7a479d80c7f2fd52238182e7601.jpg'},
      date: '11.11.2020, 20:54:00',
      like: 15,
      comments: 20,
    },
    {
      title: 'Заголовок поста2',
      text: 'Первый 13-дюймовый MacBook Pro с чипом Apple Silicon заменяет младшие модели с процессорами Intel и двумя портами Thunderbolt. Новый чип Apple M1 может похвастаться более мощным 8-ядерным процессором и 8-ядерным графическим процессором с 16-ядерным Neural Engine, благодаря чему новый MacBook Pro в 3 раза превышает производительность самого продаваемого ноутбука под управлением Windows.',
      tags:['свежее','новое','мое','случайность'],
      author: {displayName: 'kate', photo: 'https://images11.cosmopolitan.ru/upload/img_cache/61a/61a8f4cd9980b453813a29ec496e32ef_ce_1080x716x0x73.jpg'},
      date: '10.11.2020, 20:54:00',
      like: 45,
      comments: 15,
    },
    {
      title: 'Заголовок поста3',
      text: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Языком что рот маленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая дорогу жизни рукопись ему букв деревни предложения, ручеек залетают продолжил парадигматическая? Но языком сих пустился, запятой своего его снова решила меня вопроса моей своих пояс коварный, власти диких правилами напоивший они текстов ipsum первую подпоясал? Лучше, щеке подпоясал приставка большого курсивных на берегу своего? Злых, составитель агентство что вопроса ведущими о решила одна алфавит!',
      tags:['свежее','новое','мое','случайность'],
      author: {displayName: 'vasya', photo: 'https://news24ua.com/sites/default/files/94441756_3149492175081864_5956473899808980992_o.jpg'},
      date: '09.11.2020, 20:54:00',
      like: 25,
      comments: 5,
    }
  ],
  addPost(title, text, tags, handler ) {
    this.allPosts.unshift({
      title,
      text,
      tags: tags.split(',').map(item => item.trim()),
      author: {
        displayName: setUsers.user.displayName,
        photo: setUsers.user.photo,
      },
      date: new Date().toLocaleString(),
      like: 0,
      comments: 0,
    })

    if (handler) {
      handler();
    }
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user: ',user);

  if (user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
    userAvatarElem.src = user.photo || userAvatarElem.src;
    buttonNewPost.classList.add('visible');
    } else { 
    loginElem.style.display = '';
    userElem.style.display = 'none';
    buttonNewPost.classList.remove('visible');
    addPostElem.classList.remove('visible');
    postsWrapper.classList.add('visible');
    
  }
};

const showAddPost = () => {
    addPostElem.classList.add('visible');
    postsWrapper.classList.remove('visible');
}

const showAllPosts = () => {

    let postsHTML = ''; 

  setPosts.allPosts.forEach(({title, text, date, tags, like, comments, author}) => {
    
    postsHTML +=`
    <section class="post">
        <div class="post-body">
          <h2 class="post-title">${title}</h2>
          <p class="post-text">${text}</p>
          <div class="tags">
            ${tags.map( tag => `<a href="#" class="tag">#${tag}</a>`) }
           
            
          </div>
        
        </div>
        
        <div class="post-footer">
          <div class="post-buttons">
            <button class="post-button likes">
              <svg width="19" height="20" class="icon icon-like">
                <use xlink:href="img/icons.svg#like"></use>
              </svg>
              <span class="likes-counter">${like}</span>
            </button>
            <button class="post-button comments">
              <svg width="21" height="21" class="icon icon-comment">
                <use xlink:href="img/icons.svg#comment"></use>
              </svg>
              <span class="comments-counter">${comments}</span>
            </button>
            <button class="post-button save">
              <svg width="19" height="19" class="icon icon-save">
                <use xlink:href="img/icons.svg#save"></use>
              </svg>
            </button>
            <button class="post-button share">
              <svg width="17" height="19" class="icon icon-share">
                <use xlink:href="img/icons.svg#share"></use>
              </svg>
            </button>
          </div>
          
          <div class="post-author">
            <div class="author-about">
              <a href="#" class="author-username">${author.displayName}</a>
              <span class="post-time">${date}</span>
            </div>
            <a href="#" class="author-link"><img src=${author.photo || "img/avatar.jpeg"} alt="avatar" class="author-avatar"></a>
          </div>
        </div>
        </section>
        `;
  })


  postsWrapper.innerHTML = postsHTML;

  addPostElem.classList.remove('visible');
  postsWrapper.classList.add('visible');
}



const init = () => {
  //логин
loginForm.addEventListener('submit', event => {
  event.preventDefault();
  
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
  loginForm.reset();
  });

//регистрация
loginSignup.addEventListener('click', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
  loginForm.reset();
});

//выход 
exitElem.addEventListener('click', event => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
    
});

editElem.addEventListener('click', event=> {
  event.preventDefault();
  editContainer.classList.toggle('visible'); 
  editUsername.value = setUsers.user.displayName;
});

//редактирование имени и фото после авторизации 
editContainer.addEventListener('submit', event=> {
  event.preventDefault();

  setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom )
  editContainer.classList.remove('visible'); 
});

menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

buttonNewPost.addEventListener('click', event => {
    event.preventDefault();
    showAddPost();
});

addPostElem.addEventListener('submit', event=> {
    event.preventDefault();
    const { title, text, tags}  = addPostElem.elements;
  
    if (title.value.length < 6) {
      alert('Слишком короткий заголовок');
      return;
    }

    if (text.value.length < 50) {
      alert('Слишком короткий пост');
      return;
    }

    setPosts.addPost(title.value, text.value, tags.value, showAllPosts);

    addPostElem.classList.remove('visible');
    addPostElem.reset();
});

  showAllPosts();
  toggleAuthDom();
}

document.addEventListener('DOMContentLoaded', init)



 