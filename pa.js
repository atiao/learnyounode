const dataLib = require('./libs/data');

dataLib.getUrl('https://houserentapp.58.com/center/get_house_list?os=android',buffer =>{
    console.log('success',buffer);
},()=>{
    console.log('error')
})