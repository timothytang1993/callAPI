const app = Vue.createApp({
  data() {
    return {
      submit: "submit",

      eng: "english",
      tch: "traditional chinese",
      sch: "simplified chinese",

      weatherPredict: "Local Weather Forecast",
      weatherPredictIn9: "9-day Weather Forecast",
      weatherReport: "Current Weather Report",
      wealtherWarning: "Weather Warning Summary",
      warningInfo: "Weather Warning Information",
      specialWealtherTips: "Special Weather Tips",
    };
  },
  methods: {
    translateToEng() {
      this.submit = "submit";

      this.eng = "english";
      this.tch = "traditional chinese";
      this.sch = "simplified chinese";

      this.weatherPredict = "Local Weather Forecast";
      this.weatherPredictIn9 = "9-day Weather Forecast";
      this.weatherReport = "Current Weather Report";
      this.wealtherWarning = "Weather Warning Summary";
      this.warningInfo = "Weather Warning Information";
      this.specialWealtherTips = "Special Weather Tips";
    },
    translateToTch() {
      this.submit = "提交";

      this.eng = "英文";
      this.tch = "繁體中文";
      this.sch = "簡體中文";

      this.weatherPredict = "本港地區天氣預報";
      this.weatherPredictIn9 = "九天天氣預報";
      this.weatherReport = "本港地區天氣報告";
      this.wealtherWarning = "天氣警告一覽";
      this.warningInfo = "詳細天氣警告資訊";
      this.specialWealtherTips = "特別天氣提示";
    },
    translateToSch() {
      this.submit = "提交";

      this.eng = "英文";
      this.tch = "繁体中文";
      this.sch = "简体中文";

      this.weatherPredict = "本港地区天气预报";
      this.weatherPredictIn9 = "九天天气预报";
      this.weatherReport = "本港地区天气报告";
      this.wealtherWarning = "天气警告一览";
      this.warningInfo = "详细天气警告资讯";
      this.specialWealtherTips = "特别天气提示";
    },
  },
});

app.mount("#app");
