/*
  之前的请求地址【现在已经无效了】: http://wthrcdn.etouch.cn/weather_mini
  有效的请求地址: http://ajax-api.itheima.net/api/weather
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
*/

let app = new Vue({
    el: "#app",
    data: {
        city: '',
        weatherList: []
    },
    methods: {
        searchWeather: function () {
            // console.log('天气查询');
            // console.log(this.city)
            // 调用接口
            // 保存this
            var that = this
            axios.get("http://ajax-api.itheima.net/api/weather?city="+this.city)
                .then(function (response) {
                    // console.log(response
                    console.log(response.data.data.forecast)
                    that.weatherList = response.data.data.forecast
                })
                .catch(function (err) {})
        }
    }
})