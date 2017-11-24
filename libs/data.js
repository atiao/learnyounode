const url = require('url');

exports.getUrl = function (sUrl, success, error) {
    let obj = url.parse(sUrl);
    _req(sUrl);
    function _req(sUrl) {
        let mod = null;
        if (obj.protocol == 'http:') {
            mod = require('http');
        } else {
            mod = require('https');
        }
        let req = mod.request(sUrl, res => {
            if (res.statusCode == 200) {
                let arr = [];
                res.on('data', buffer => {
                    console.log('buffer1', buffer);
                    arr.push(buffer);
                });
                res.on('end', () => {
                    console.log('buffer', Buffer);
                    let b = Buffer.concat(arr);
                    success && success(b);
                })
            }else if(res.statusCode == 301 || res.statusCode == 302){
                _req(res.heatders['location']);
            } else {
                console.log('cuo', status.Code);
                err && error();
            }
        });
        req.on('error', err => {
            console.log('出错', err);
            error && error(err);
        });
    
        req.end();
    }
}
