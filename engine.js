var chapters=document.getElementsByTagName('a');
var anchorContainer= document.createElement("div");
var anchorImage= document.createElement("img");
var anchor= document.createElement("div");
var bookBody = document.getElementsByClassName('book-body');
var currentHeight= 0;
var currentWidth= 0;


//   Remove Header number appended by plugin
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
        if(title.includes("-headref")){
          // console.log(head2[i],"header");
          head2[i].style= "font-size: 0%";
        }
        var dotpos= 0;
        if(title.includes(".")){
           dotpos= getPosition(title,".",1);
        }
        var newTitle= title.substring(dotpos+1,title.length);
        head2[i].innerHTML= newTitle;
      }
  }
// Helps removeHeaders function
  function getPosition(string, subString, index) {
     return string.split(subString, index).join(subString).length;
  }

// Two buttons for anchor element.
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

//onClick set androidSelected active
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

// Style anchor and its chilren
anchor.id= "anchor";
  anchor.style= "position: fixed; right: 50px;top: 78px;";
anchorContainer.style= "background: url(https://docs.nativebase.io/docs/assets/iosphone.png) no-repeat;padding: 63px 20px 100px 18px; width: 292px; height: 600px;";
anchorContainer.id= "anchorContainer";
anchorImage.id= "anchorImage";
anchorImage.src='';

//append all children to anchor
anchor.appendChild(iosBut);
anchor.appendChild(andBut);
anchor.appendChild(anchorContainer);
var androidSelected= false;

// Will hold our image urls in a filtered manner
var filterListAndroid= [];
var filterListIos= [];

// Check for URL changes every 200ms
setInterval(function(){
  currentHeight= window.innerHeight;
  currentWidth= window.innerWidth;
  if(currentHeight> 830){
    anchor.style= "position: fixed; right: 50px;top: 178px";
  }
  else if(currentHeight< 830 && currentHeight> 725){
    anchor.style= "position: fixed; right: 50px;top: 88px";
  }
  else if(currentHeight< 725){
    anchor.style= "position: fixed; right: 50px;top: 80px";
  }

  if(currentWidth < 600){
    anchor.style= "position: relative;margin:0 auto;float:none; text-align:center;display:none";
    if(androidSelected){
      anchorContainer.style= "background: url(https://docs.nativebase.io/docs/assets/android.png) no-repeat; padding: 42px 0px 20px 10px; width: 292px; height: 600px; background-position:center;text-align:center;margin:0 auto"
    } else if(!androidSelected){
      anchorContainer.style= "background: url(https://docs.nativebase.io/docs/assets/iosphone.png) no-repeat;padding: 63px 20px 20px 15px; width: 292px; height: 600px; background-position:center;text-align:center;margin:0 auto";
    }




  }
  if(window.location.href.includes("Components.html")){
    if(window.location.href.includes("#Components") || window.location.href.includes("#ref-components")){
    anchorImage.style= "width: 0px; height: 0px;"
  }
    if(window.innerWidth < 1650)
    {
      document.getElementsByClassName('page-wrapper')[0].style.width= '70%';
    }
    else if(window.innerWidth > 1650)
    {
      document.getElementsByClassName('page-wrapper')[0].style.width= '75%';
    }
  }

  // Set Anchor background Phone image with button changes
  if(currentWidth > 830){

  if(androidSelected){
    anchorContainer.style= "background: url(https://docs.nativebase.io/docs/assets/android.png) no-repeat; padding: 42px 0px 68px 10px; width: 292px; height: 600px;"
  } else if(!androidSelected){
    anchorContainer.style= "background: url(https://docs.nativebase.io/docs/assets/iosphone.png) no-repeat;padding: 63px 20px 100px 15px; width: 292px; height: 600px;";
  }
}

  // Hide useless buttons for our big pages
  var nowHref= window.location.href;
  if(nowHref.includes("Customize.html")){
    $('#goTop').hide();
    $('.navigation-next').hide();
    $('.navigation-prev').hide();
  }
  if(nowHref.includes("Example.html") || nowHref.includes("Examples.html")){
    $('#goTop').hide();
    $('.navigation-next').hide();
    $('.navigation-prev').hide();
  }
  if(nowHref.includes("Components.html")){
    $('#goTop').hide();
    $('.navigation-next').hide();
      $('.navigation-prev').hide();

  // Fetch Image ID from URL and set respective image
  var hash= nowHref.indexOf("#");
  var length= nowHref.length;
  var pointer= nowHref.substring(hash+1,length);
  this.setImage(pointer);
}
},200);

// set image according to pointer received.
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
      // Useless buttons removed appended by plugins
      $('#book-search-input').hide();
      $('.navigation-prev').hide();
      $('#anchors-navbar').hide();
      $('#goTop').hide();
      var and=0;
      var ios=0;

       // Making summary.md image clickable
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("http://nativebase.io/")){
          chapters[i].style= "height: 80px";
        }
      }

      // Populate our filter image arrays
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

    // set anchor visible for Components page
      if(window.location.href.includes("Components.html")){
        if(anchorImage.src != '' && anchorImage.src != undefined){
        $('.page-wrapper').append(anchor);
        $("#anchor").show();
      }

      // Also show children from summary table
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("Components.html")){
          chapters[i].style.display= "inherit";
        }
      }
    }
    // Remove anchor for other pages
    else if(!(window.location.href.includes("Components.html"))){
      $("#anchor").hide();
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("Components.html") && !(chapters[i].href.includes('#Components'))){
          chapters[i].style.display= "none";
        }
      }
    }
    // Display children from summary table
    if(window.location.href.includes("Customize.html")){
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("Customize.html")){
          chapters[i].style.display= "inherit";
        }}
    }
   // Hide children from summary table
    else if(!(window.location.href.includes("Customize.html"))){
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("Customize.html") && !(chapters[i].href.includes('#Customize'))){
          chapters[i].style.display= "none";
        }}
    }
    // Display children from summary table
    if(window.location.href.includes("Examples.html") || window.location.href.includes("Example.html")){
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("Example.html")){
          chapters[i].style.display= "inherit";
        }}
    }
    // Hide children from summary table
    else if(!(window.location.href.includes("Examples.html")) && !(window.location.href.includes("Example.html"))){
      for(var i=0; i< chapters.length; i++){
        if(chapters[i].href.includes("Example.html")){
          chapters[i].style.display= "none";
        }}
    }
  });
});
