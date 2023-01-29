var axios = require("axios");
var qs = require("qs");

class GmailAPI2 {
  
  getAcceToken = async () => {
    var data = qs.stringify({
      client_id:
        "819179062308-g6qerci5oh30sf8qh28kmlaiqgcaf627.apps.googleusercontent.com",
      client_secret: "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",
      refresh_token:
        "1//0ge3swKpiUg_KCgYIARAAGBASNwF-L9Irdx2YL0aqfw4oUF2IpK3FBbRiiNHOeOXkouR0z49Zsx0KmK-yu95L-h6BJnJiMPZJ2IE",
      grant_type: "refresh_token",
    });
    var config = {
      method: "post",
      url: "https://accounts.google.com/o/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "accept-encoding": "*",
      },
      data: data,
    };

    var accessToken = "";

    await axios(config)
      .then(async function (response) {
        accessToken = await response.data.access_token;
        console.log("Access Token" + accessToken);
      })
      .catch(function (error) {
        console.log(error);
      });

    return accessToken;
  };

  

  getmails() {
    return new Promise(function(resolve, reject){
      ({
        method: 'GET',
        url : 'https://gmail.googleapis.com/gmail/v1/users/me/messages'
      })
      .then(response=>{
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}


module.exports = new GmailAPI2();
