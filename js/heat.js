
  document.querySelector('body').onclick = function(ev) {
    heatmapInstance.addData({
      x: ev.pageX,
      y: ev.pageY,
      value: 9,
      radius: 20
    });
  
  };
  var heatmapInstance = h337.create({
    container: document.querySelector('body'),
    backgroundColor: 'rgba(0,0,0,.55)',
    blur: 0.95,
    gradient: {
      '.60': 'blue',
      '.78': 'red',
      '.95': 'white'
    },
  
    maxOpacity: .7,
    minOpacity: .3
  });
  let token,dataLeg;
  axios.post(`http://localhost:3080/users/auth`,{
    username:'log@google.com',
    password:'123'
  }).then(
    res =>{
      token = res.data.access_token;
      axios.get(`http://localhost:3080/products/03232a5c-0078-4888-bca7-4fda41b1298c`,
      {
        headers: {
          'Authorization': 'Bearer ' + res.data.access_token,
          'Content-Type': 'application/json'
        }
      }).then( res =>{
        console.log(res.data);
        dataLeg = res.data;
        if(res.data[window.location.host+window.location.pathname]){
          console.log(1);
          heatmapInstance.setData(res.data[window.location.host+window.location.pathname]);
        }
      })
    }
  )
  window.addEventListener('beforeunload', function (e) {
    dataLeg[window.location.host+window.location.pathname] = heatmapInstance.getData();
    var json = JSON.stringify(dataLeg);
    var xhr = new XMLHttpRequest();
    xhr.open('PUT',`http://localhost:3080/products/03232a5c-0078-4888-bca7-4fda41b1298c`,true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.send(json);
  
    e.preventDefault();
    var confirmationMessage = "";
    (e || window.event).returnValue = confirmationMessage;
    return 'Youre leaving';
  }, false);





