document.getElementById("changeColor").addEventListener("click", function() {
  const postElements = document.getElementById("postList").getElementsByTagName("li");
  for(list of postElements) {
      list.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  } 
});
