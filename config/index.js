xport const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx443e85f3a4ce0891",
    // 公众号appSecret
    appSecret: "e0a371544847aa4fab7c4faae6bcc0a3",
    // 模板消息id
    templateId: "dp9JsRT0-Rdfvge5JwglG4boEcX4uI82FIhaTL3oisg",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [onUQj53rotpTxHIQ1f8uSdxEyw8s],
     
    // 信息配置
    // 所在省份
    province: "河南",
    // 所在城市
    city: "新乡",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "宝宝", "year": "2001", "date": "04-27", "type": 'new'},
    ],

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
