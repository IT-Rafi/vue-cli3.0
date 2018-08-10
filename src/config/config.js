let host = "",host1="";

//配置多个不同域标识
let location={
    a:"reg",
    b:"api"
}
if(window.location.hostname.indexOf('localhost') > -1){
    
    for(let key in location){
        // console.log(location[key])
        if(/(reg)/.test(location[key])){
            host = "/xrf/"
        }else{
            host1 = "/wa/"
        }
    }
  
}else{
  
  host = ""//正式环境地址
  host1 = ""//正式环境地址
}

let api={
    login:host+"wapreg/checklogin.aspx?format=json&encode=no",
    nr:host1+"api/tradeinfo/queryLimit",
}
export {
    api
}