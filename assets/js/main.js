// form field animations
const fieldWrappers = document.querySelectorAll('.form-group');
const fields = document.querySelectorAll('.form-field input');
fieldWrappers.forEach(f => {
  f.addEventListener('click', e => f.querySelector('input').click());
});
fields.forEach(f => {
  f.addEventListener('focus', e => {
    let fieldWrapper = e.target.closest('.form-group');
    fieldWrapper.classList.add('active');
    fieldWrapper.classList.add('visited');
    fieldWrapper.classList.remove('empty');
  });
  f.addEventListener('blur', e => {
    let fieldWrapper = e.target.closest('.form-group');
    fieldWrapper.classList.remove('active');
    if (!e.target.value.trim()) {
      fieldWrapper.classList.add('empty');
    }
    console.log('input blured!');
  });
});

// Switch language
const dictionary = {
  en: {
    language: 'AR',
    welcomeText: 'Welcome member!',
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    noAccount: "Don't have an account?",
  },
  ar: {
    language: 'EN',
    welcomeText: 'أهلا بك عزيزى',
    email: 'البريد الالكترونى',
    password: 'الرقم السرى',
    rememberMe: 'تذكرنى',
    forgotPassword: 'نسيت كلمة المرور؟',
    signIn: 'تسجيل الدخول',
    signUp: 'إنشاء حساب',
    noAccount: 'ليس لديك حساب؟',
  },
};
const toggleBtn = document.querySelector('.language-switcher-btn');
const loginWrapper = document.querySelector('.login-wrapper');
const dictionaryElements = document.querySelectorAll(
  '*[data-dictionary-word-id]'
);
let isArabic = false;
let lang = 'en';
toggleBtn.addEventListener('click', e => {
  isArabic = !isArabic;
  if (isArabic) {
    loginWrapper.classList.add('arabic');
    lang = 'ar';
  } else {
    loginWrapper.classList.remove('arabic');
    lang = 'en';
  }
  dictionaryElements.forEach(el => {
    el.innerText = dictionary[lang][el.getAttribute('data-dictionary-word-id')];
  });
});
