document.getElementById("changeColor").addEventListener("click", function() {
  const postElements = document.getElementById("postList").getElementsByTagName("li");
  for(list of postElements) {
      list.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  } 
});

document.getElementById("sideNavButton").addEventListener("click", function() {
  console.log('Hello world');
  document.getElementById("mysidenav").style.width = 300;
});

 document.getElementById("closeSideNavButton").addEventListener("click", function() {
   document.getElementById("mysidenav").style.width = 0 ;
});


