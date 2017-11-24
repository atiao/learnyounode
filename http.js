// const http = require('http');

// const urllib = require('url');
// let urlobj = urllib.parse(url);
// let req = http.request('http://bj.58.com/house.shtml?', res => {
// 	console.log('success');
// 	console.log('res.statusCode');
// 	let arr = [];
// 	res.on('data', buffer => {
// 		arr.push(buffer);
// 	});
// 	res.on('end', () => {
// 		let b = Buffer.concat(arr);
// 		console.log('接受完成' + b.length);
// 		console.log(b.toString());
// 	});
// });

// req.end();

// req.on('error', err => {
// 	console.log('faild');
// 	console.log(err);
// })

const http = require('http');
const https = require('https');
const url = require('url');

function getUrl(sUrl, success, error) {
    let obj = url.parse(sUrl);
    let mod = null;
    if(obj.protoclo == 'http:'){
        mod = require('http');
    }else{
        mod = require('https');
    }
    let req = mod.request(sUrl,res=>{
        if(res.statusCode == 200) {
            let arr = [];
            res.on('data', buffer => {
                console.log('buffer1',buffer);
                arr.push(buffer);
            });
            res.on('end',()=>{
                console.log('buffer',Buffer);
                let b = Buffer.concat(arr);
                success && success(b);
            })
        }else{
            console.log('cuo',status.Code);
            err && error();
        }
    });
    req.on('error',err=>{
        console.log('出错',err);
        error && error(err);
    });

    req.end();
}

getUrl('https://www.tmall.com/', buffer=>{
    console.log('成',buffer);
},()=>{
    console.log('败')
})