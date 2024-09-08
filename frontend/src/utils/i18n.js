import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as a3 from "./guide_content/lower_home"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      community: "a community for everyone.",
      trackworkouts1: "Track and Share",
      trackworkouts2: "Workouts",
      twpar: "Track your workouts with ease, and gain inspirations from other people's workouts!",
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
      sub:"Submit",
      guideintro: "Working Out isn't Difficult!",
      guideintrop: "Here, you can find guides on fitness knowledges for all levels. These guides will help you through your fitness journey!",
      a3t:a3.title_en,
      a3a:a3.author,
      a3p1: a3.p1,
      a3p2: a3.p2,
      a3p3: a3.p3,
      a3p4: a3.p4,
      a3p5: a3.p5,
      a3p6: a3.p6,
      a3p7: a3.p7,
      a3p8: a3.p8,
      a3p9: a3.p9,
      a3p10: a3.p10,
      a3p11: a3.p11,
      a3t2:a3.t2,
      a3t6:a3.t6,
      a3t9:a3.t9,
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
      sub:"送出",
      guideintro: "訓練並不困難",
      guideintrop: "這裡有適合各種程度的健身手冊，幫助你打造最適合自己的訓練。",
      a3t:a3.title_zh,
      a3a:a3.author,
      a3p1: a3.p1z,
      a3p2: a3.p2z,
      a3p3: a3.p3z,
      a3p4: a3.p4z,
      a3p5: a3.p5z,
      a3p6: a3.p6z,
      a3p7: a3.p7z,
      a3p8: a3.p8z,
      a3p9: a3.p9z,
      a3p10: a3.p10z,
      a3p11: a3.p11z,
      a3t2: a3.t2z,
      a3t6: a3.t6z,
      a3t9: a3.t9z
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