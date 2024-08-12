import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      community: "a community for everyone.",
      trackworkouts1: "Track and Share",
      trackworkouts2: "Workouts",
      twpar: "Track your workouts with ease, and gain inspirations from other",
      fgtitle: "Fitness Guides",
      fgpar: "Well crafted fitness guides, for all levels!",
      workouts:"WORKOUTS",
      guides: "GUIDES",
      login:"LOGIN",
      welcome:"Welcome!",
      signup:"Sign Up",
      su1: "If you haven't!",
      username:"Username",
      password:"Password",
      bio:"Bio",
      cea:"Create an Account",
      aha:"Already have an account?",
      logout:"LOGOUT",
      cworkout:"CREATE WORKOUT",
      wtitle:"Workout Title",
      ename:"Exercise Name",
      sets:"Sets",
      reps:"Reps",
      load:"Load(Kg)",
      des:"Description",
      ae:"Add Exercise",
      sub:"Submit"
    }
  },
  zh: {
    translation: {
      community: "屬於大家的健身平台",
      trackworkouts1: "紀錄並分享訓練",
      trackworkouts2: "",
      twpar: "輕鬆紀錄訓練，並從別人的訓練獲取靈感",
      fgtitle: "健身手冊",
      fgpar: "適合各種程度的實用健身知識！",
      workouts:"訓練",
      guides: "健身手冊",
      login:"登入",
      welcome:"歡迎！",
      signup:"註冊帳號",
      su1: "",
      username:"帳號名稱",
      password:"密碼",
      bio:"個人簡介",
      cea:"建立新帳號",
      aha:"有帳號了？",
      logout:"登出",
      cworkout:"新增訓練",
      wtitle:"訓練標題",
      ename:"動作名稱",
      sets:"組數",
      reps:"次數",
      load:"重量（Kg）",
      des:"補充說明",
      ae:"新增動作",
      sub:"送出"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;