document.addEventListener("DOMContentLoaded", function () {
  const btnClick = document.querySelector(".btnClick");
  const sidebar = document.querySelector(".sidebar");
  const bigImg = document.querySelector(".big");
  const lilImg = document.querySelector(".lil");
  const sideBody = document.querySelector(".sideBody");
  const sideContent = document.querySelector(".sideContent");
  const container = document.querySelector(".container");

  btnClick.addEventListener("click", function () {
    if (sidebar.style.width === "90px") {
      sidebar.style.width = "270px";
      bigImg.style.display = "block";
      lilImg.style.display = "none";
      btnClick.style.marginLeft = "270px";
      btnClick.style.transform = `scaleX(-1)`;
      sideBody.style.display = "none";
      sideContent.style.display = "flex";
      container.style.paddingLeft = "280px";
    } else {
      sidebar.style.width = "90px";
      bigImg.style.display = "none";
      lilImg.style.display = "block";
      btnClick.style.marginLeft = "95px";
      btnClick.style.transform = `scaleX(1)`;
      sideBody.style.display = "flex";
      sideContent.style.display = "none";
      container.style.paddingLeft = "100px";
    }
  });
});

var dashAs = document.querySelectorAll(".dashA");
var dropBtns = document.querySelectorAll(".dropbtn");
var dropContent = document.querySelector(".dropdown-content");

dashAs.forEach(function (dashA) {
  dashA.addEventListener("click", function () {
    var ul = dashA.nextElementSibling;
    if (ul.style.display === "flex") {
      ul.style.display = "none";
    } else {
      ul.style.display = "flex";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const flagsDiv = document.querySelector(".flagsDiv");
  const flags = document.querySelector(".flags");

  flagsDiv.addEventListener("click", function () {
    if (flags.style.display === "none") {
      flags.style.display = "flex";
    } else {
      flags.style.display = "none";
    }
  });
});
