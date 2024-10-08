document.getElementById('submitBtn').addEventListener('click',()=>{
    let mailValue = document.getElementById('mailText').value;
    let passValue = document.getElementById('PassText').value;
    
    fetch('/dev/login',{method:'POST',
        headers:{},
        body:JSON.stringify({mail:mailValue,pass:passValue})

    }).then(res => {
        if(res.status===200){
            return res.json();
        }else{
            alert('paralo veya sifre hatali');
        }
    }).then(data => {
      const token =  data.token
      document.cookie = 'token='+token+';';
      window.location.href='/anasayfa';
      })
    })