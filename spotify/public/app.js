var app = function(){
  var url = "https://api.spotify.com/v1/search?q=christmas&type=album"
  makeRequest(url, requestComplete);

// var searchQuery = document.getElementById("search-details");
// searchQuery.addEventListener("enter",requestText);

}
  var makeRequest = function(url,callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
  }
 
    var requestComplete = function(){
    if(this.status !== 200) return;
    var jsonString = this.responseText;
    var text = JSON.parse(jsonString);
     addSearchText(text);
  // populateList(countries);


   }
    var addSearchText = function(text){
    var ul = document.getElementById("search-details");
    ul.innerHTML = ""

    var li = document.createElement("li");
    li.innerText =  text.albums.items[0]["album_type"];
    ul.appendChild(li);

    var li = document.createElement("li");
    li.innerText =   text.albums.items[0].artists[0].href;
    ul.appendChild(li);
   


   var li = document.createElement("li");
   li.innerText =   text.albums.items[0].artists[0].name;
   ul.appendChild(li);
   var li = document.createElement("li");


    li.innerHTML =  '<img src ="' + text.albums.items[0].images[0].url +  '" width = '+text.albums.items[0].images[0].width+' height ='+text.albums.items[0].images[0].height+'  />';
   // '<img src="'+imageUrl+'" width = "65px" height = "35px"/>'
     ul.appendChild(li);
}


window.addEventListener('load', app);