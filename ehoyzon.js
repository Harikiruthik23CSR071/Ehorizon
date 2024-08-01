const body = document.querySelector("body"),
     sidebar = body.querySelector(".sidebar"),
     toggle = body.querySelector(".togimg"),
     toggle1= body.querySelector(".toggle"),
     searchBtn = body.querySelector(".search-box"),
     modeSwitch = body.querySelector(".slider"),
     modeText = body.querySelector(".mode-text");

     toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
     });

     toggle1.addEventListener("click", () =>{
      sidebar.classList.toggle("close");
   });
     
     modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("theme");
     });