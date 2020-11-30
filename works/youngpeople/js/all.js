// 手機介面選單
let menuButton = document.querySelector('.mobileButton');
let menuStatus = document.querySelector('.menu').classList.contains('menuDropdown')
menuButton.addEventListener("click", function(){
        document.querySelector('.mobileButton p:nth-of-type(1)').classList.toggle('menuP1')
        document.querySelector('.mobileButton p:nth-of-type(2)').classList.toggle('menuP2')
        document.querySelector('.mobileButton p:nth-of-type(3)').classList.toggle('menuP3')
        document.querySelector('.menu').classList.toggle('menuDropdown')
})


// 手機介面選單收起
function menuCollapse() {
  document.querySelector('.mobileButton p:nth-of-type(1)').classList.remove('menuP1')
  document.querySelector('.mobileButton p:nth-of-type(2)').classList.remove('menuP2')
  document.querySelector('.mobileButton p:nth-of-type(3)').classList.remove('menuP3')
  document.querySelector('.menu').classList.remove('menuDropdown')
}


// 回頂端按鈕
function scrollToTop(){
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
}
let last_scroll_position = 0;
window.addEventListener('scroll',function(e){
let goTopBTN = document.querySelector('.goTop');
let last_scroll_position = window.scrollY;
  if(last_scroll_position>=400){
    goTopBTN.classList.add('goTopShow');
  } else {
    goTopBTN.classList.remove('goTopShow');
    goTopBTN.classList.remove('navFix');
  }
})




// 老師所有課程收合展開
let allClassButton = document.querySelectorAll('.classDropdown');
let allClassFrame = document.querySelectorAll('.classDropdownFrame');
for(let i=0; i<allClassButton.length; i++){
  allClassButton[i].addEventListener("click", function(){
    allClassButton[i].lastChild.classList.toggle('classDropdownActive')
    for(let j=0; j<allClassFrame.length; j++){
      if(i==j){
        allClassFrame[j].classList.toggle('classDropdownFrameActive')
      }
    }
  })
}


// 聯絡我們
let formName = document.querySelector('.contactForm1');
let formMail = document.querySelector('.contactForm2');
let formTxt = document.querySelector('.contactForm3');
let nameAlert = document.querySelector('.contactName');
let mailAlert = document.querySelector('.contactMail');
let txtAlert = document.querySelector('.contactTxt');
let send = document.querySelector('.contactBTN');
send.addEventListener('click',sendMail);
function sendMail(){
  if(formName.value==="" && formMail.value==="" && formTxt.value===""){
    nameAlert.textContent = "! 請輸入您的稱呼";
    mailAlert.textContent = "! 請輸入您的信箱";
    txtAlert.textContent = "! 請輸入留言";
  }else if(formName.value==="" && formMail.value==="" && formTxt.value!=""){
    nameAlert.textContent = "! 請輸入您的稱呼";
    mailAlert.textContent = "! 請輸入您的信箱";
    txtAlert.textContent = "";
  }else if(formName.value==="" && formMail.value!="" && formTxt.value!=""){
    nameAlert.textContent = "! 請輸入您的稱呼";
    mailAlert.textContent = "";
    txtAlert.textContent = "";
  }else if(formName.value!="" && formMail.value==="" && formTxt.value!=""){
    nameAlert.textContent = "";
    mailAlert.textContent = "! 請輸入您的信箱";
    txtAlert.textContent = "";
  }else if(formName.value==="" && formMail.value!="" && formTxt.value===""){
    nameAlert.textContent = "! 請輸入您的稱呼";
    mailAlert.textContent = "";
    txtAlert.textContent = "! 請輸入留言";
  }else if(formName.value!="" && formMail.value==="" && formTxt.value===""){
    nameAlert.textContent = "";
    mailAlert.textContent = "! 請輸入您的信箱";
    txtAlert.textContent = "! 請輸入留言";
  }else if(formName.value!="" && formMail.value!="" && formTxt.value===""){
    nameAlert.textContent = "";
    mailAlert.textContent = "";
    txtAlert.textContent = "! 請輸入留言";
  }else if(formName.value!="" && formMail.value!="" && formTxt.value!=""){
    let google_name = about.FormNameNum;
    let google_mail = about.FormMailNum;
    let google_txt = about.FormTxtNum;
    let formData = {
      google_name : formName.value,
      google_mail : formMail.value,
      google_txt : formTxt.value,
    };
    $.ajax({
      type: 'POST',
      url: about.googleForm,
      data: formData,
      contentType: 'application/json',
      dataType: 'jsonp',
      complete: function() {
        alert('表單已送出');
        //以下加入表單文字到網頁
        let newDOM = document.createElement('p');
        let newContent = document.createTextNode('已送出留言：'+formTxt.value);
        newDOM.appendChild(newContent);
        document.querySelector('.content').appendChild(newDOM);
        //以下清空輸入框
        formName.value="";
        formMail.value="";
        formTxt.value="";
      }
    });
  }
}