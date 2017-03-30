var chapters=document.getElementsByTagName('a');
var anchorContainer= document.createElement("div");
var anchorImage= document.createElement("img");
var anchor= document.createElement("div");

function removeHeaders(){
var head2 = document.getElementsByTagName('h2');
var head3 = document.getElementsByTagName('h3');
var head4 = document.getElementsByTagName('h4');

for(var i=0; i<head4.length; i++){
  var title= head4[i].innerHTML;
  var dotpos= 0;
  if(title.includes(".")){
     dotpos= getPosition(title,".",3);
  }
  var newTitle= title.substring(dotpos+1,title.length);
  head4[i].innerHTML= newTitle;
}

for(var i=0; i<head3.length; i++){
  var title= head3[i].innerHTML;
  var dotpos= 0;
  if(title.includes(".")){
     dotpos= getPosition(title,".",2);
  }
  var newTitle= title.substring(dotpos+1,title.length);
  head3[i].innerHTML= newTitle;
}

for(var i=0; i<head2.length; i++){
  var title= head2[i].innerHTML;
  var dotpos= 0;
  if(title.includes(".")){
     dotpos= getPosition(title,".",1);
  }
  var newTitle= title.substring(dotpos+1,title.length);
  head2[i].innerHTML= newTitle;
}
}

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

anchor.style= "position: fixed; right: 50px;top: 68px;";
var andBut= document.createElement('span');
andBut.style="height: 40px; width: 100px; background-color: grey; display: inline-block; margin-right: 5px; text-align: center; cursor: pointer; border-radius: 25px; margin: 10px 10px 10px 10px; padding-bottom: 15px;";
andBut.id="andBut";
anchor.id= "anchor";
var andTxt= document.createElement('p');
andTxt.style= "font-size: 13px; font-weight: bold; color: white;";
andTxt.innerHTML= "Android";

var iosTxt= document.createElement('p');
iosTxt.style= "font-size: 13px; font-weight: bold; color: white;";
iosTxt.innerHTML= "iOS";

var iosBut= document.createElement('span');
iosBut.appendChild(iosTxt);
andBut.appendChild(andTxt);
iosBut.style="height: 40px; width: 100px; background-color: #00b386; display: inline-block; margin-right: 5px; text-align: center; cursor: pointer; border-radius: 25px; margin: 10px 10px 10px 10px; padding-bottom: 15px; margin-left: 30px;";
iosBut.id="iosBut";
iosBut.onclick= function(){
  androidSelected= false;
  iosBut.style="height: 40px; width: 100px; background-color: #00b386; display: inline-block; margin-right: 5px; text-align: center; cursor: pointer; border-radius: 25px; margin: 10px 10px 10px 10px; padding-bottom: 15px; margin-left: 30px;";
  andBut.style="height: 40px; width: 100px; background-color: grey; display: inline-block; margin-right: 5px; text-align: center; cursor: pointer; border-radius: 25px; margin: 10px 10px 10px 10px; padding-bottom: 15px;";
}
andBut.onclick= function(){
  androidSelected= true;
  iosBut.style="height: 40px; width: 100px; background-color: grey; display: inline-block; margin-right: 5px; text-align: center; cursor: pointer; border-radius: 25px; margin: 10px 10px 10px 10px; padding-bottom: 15px; margin-left: 30px;";
  andBut.style="height: 40px; width: 100px; background-color: #00b386; display: inline-block; margin-right: 5px; text-align: center; cursor: pointer; border-radius: 25px; margin: 10px 10px 10px 10px; padding-bottom: 15px;";
};
anchor.id= "anchor";
anchorContainer.style= "background: url(../docs/assets/iosphone.png) no-repeat;padding: 63px 20px 100px 18px; width: 292px; height: 600px;";
anchorContainer.id= "anchorContainer";
anchorImage.id= "anchorImage";
anchorImage.src='';
anchor.appendChild(iosBut);
anchor.appendChild(andBut);
anchor.appendChild(anchorContainer);
var androidSelected= false;

var filterListAndroid= [];
var filterListIos= [];

setInterval(function(){
  if(window.location.href.includes("COMPONENTS.html")){
    if(window.location.href.includes("#Components") || window.location.href.includes("#Ref")){
    anchorImage.style= "width: 0px; height: 0px;"
  }
    if(window.innerWidth < 1650)
    {
      document.getElementsByClassName('page-wrapper')[0].style.width= '60%';
    }
    else if(window.innerWidth > 1650)
    {
      document.getElementsByClassName('page-wrapper')[0].style.width= '75%';
    }
  }
  if(androidSelected){
    anchorContainer.style= "background: url(../docs/assets/android.png) no-repeat; padding: 42px 0px 68px 10px; width: 292px; height: 600px;"
  } else if(!androidSelected){
    anchorContainer.style= "background: url(../docs/assets/iosphone.png) no-repeat;padding: 63px 20px 100px 15px; width: 292px; height: 600px;";
  }
  var nowHref= window.location.href;
  if(nowHref.includes("CUSTOMIZE.html")){
    $('#goTop').hide();
    $('.navigation-next').hide();
    $('.navigation-prev').hide();
  }
  if(nowHref.includes("COMPONENTS.html")){
    $('#goTop').hide();
    $('.navigation-next').hide();
      $('.navigation-prev').hide();
  var hash= nowHref.indexOf("#");
  var length= nowHref.length;
  var pointer= nowHref.substring(hash+1,length);
  this.setImage(pointer);
}
},200);

function setImage(pointer){
  if(androidSelected){
    for(var i=0;i< filterListAndroid.length;i++){
      if(filterListAndroid[i].alt.includes(pointer)){

        if(anchorImage.src !== filterListAndroid[i].src){
          anchorImage.src= filterListAndroid[i].src;
          anchorImage.style="width: 270px; height: 470px"
          anchorContainer.appendChild(anchorImage);
      }
      }
    }
  }
  else if(!androidSelected){
  for(var i=0;i< filterListIos.length;i++){
    if(filterListIos[i].alt.includes(pointer)){

      if(anchorImage.src !== filterListIos[i].src){
        anchorImage.src= filterListIos[i].src;
        anchorImage.style="width: 256px; height: 453px"
        anchorContainer.appendChild(anchorImage);
    }
    }
  }
}
}

require(['gitbook', 'jQuery'], function(gitbook, $) {
    gitbook.events.bind("page.change", function(e, config) {
      removeHeaders();
      $('#book-search-input').hide();
      $('.navigation-prev').hide();
      $('#anchors-navbar').hide();
      $('#goTop').hide();
      var and=0;
      var ios=0;
      var list=document.getElementsByTagName("img");
      for(var i=0; i< list.length; i++){
        if(list[i].alt.includes("Preview")){
          list[i].style.display= "none";
          if(list[i].alt.includes("android")){
            filterListAndroid[and]= list[i];
            and++;
          }
          else if(list[i].alt.includes("ios")){
          filterListIos[ios]= list[i];
            ios++;
          }
        }
      }


      if(window.location.href.includes("COMPONENTS.html")){
        if(anchorImage.src != '' && anchorImage.src != undefined){
        $('.page-wrapper').append(anchor);
        $("#anchor").show();
      }
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("COMPONENTS.html")){
          chapters[i].style.display= "inherit";
        }
      }
    }
    else if(!(window.location.href.includes("COMPONENTS.html"))){
      $("#anchor").hide();
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("COMPONENTS.html") && !(chapters[i].href.includes('#Components'))){
          chapters[i].style.display= "none";
        }
      }
    }
    if(window.location.href.includes("CUSTOMIZE.html")){
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("CUSTOMIZE.html")){
          chapters[i].style.display= "inherit";
        }}
    }
    else if(!(window.location.href.includes("CUSTOMIZE.html"))){
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("CUSTOMIZE.html") && !(chapters[i].href.includes('#Customize'))){
          chapters[i].style.display= "none";
        }}
    }
  });
});
