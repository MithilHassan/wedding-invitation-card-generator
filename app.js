const form1 = document.getElementById("form");
const form3 = document.getElementById("form3");
const form5 = document.getElementById("form5");
const start = document.querySelector(".start");
const step1 = document.querySelector(".step1");
const step2 = document.querySelector(".step2");
const step3_1 = document.querySelector(".step3_1");
const step3_2 = document.querySelector(".step3_2");
const step4 = document.querySelector(".step4");
const step5 = document.querySelector(".step5");
const step6 = document.querySelector(".step6");
const step7 = document.querySelector(".step7");
const step8 = document.querySelector(".step8");
const Intro1 = document.querySelector(".step4 .option1");
const Intro2 = document.querySelector(".step4 .option2");
const Intro3 = document.querySelector(".step4 .option3");
const invitationIntro = document.getElementsByName("intro");
const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const radios = document.getElementsByName("radio");
const weddingTones = document.getElementsByName("wedding-tone");
const reception = document.getElementsByName("reception");
const title1 = document.querySelector(".step3_2 .title");
const title2 = document.querySelector(".step4 .title");
const error = document.querySelector(".error");
const time = document.getElementById("time");
const venue = document.getElementById("venue");
const city = document.getElementById("city");
const formFill = document.querySelector(".formFill");
function getName(obj) {
  if (obj.name === "name1") {
    localStorage.setItem("name1", obj.value);
  }
  if (obj.name === "name2") {
    localStorage.setItem("name2", obj.value);
  }
}
function getParentsName(obj) {
  if (obj.name === "name1") {
    localStorage.setItem("parent1", obj.value);
  }
  if (obj.name === "name2") {
    localStorage.setItem("parent2", obj.value);
  }
}
function goToStart() {
  start.style.display = "block";
  step1.style.display = "none";
  step8.style.display = "none";
}
function goToStep1() {
  start.style.display = "none";
  step1.style.display = "block";
  step2.style.display = "none";
}
form1.addEventListener("submit", setUserData);
function goToStep2() {
  if ((name1.value.length > 0, name2.value.length > 0)) {
    step1.style.display = "none";
    step2.style.display = "block";
    step3_1.style.display = "none";
    step3_2.style.display = "none";
  }
}
function setUserData(e) {
  const name1 = localStorage.getItem("name1");
  const name2 = localStorage.getItem("name2");
  option1.innerText = name1 + " and " + name2 + ".";
  option2.innerText = name1 + "'s Parents.";
  option3.innerText = name2 + "'s Parents.";

  e.preventDefault();
}

let checked = false;
radios.forEach((radio) => {
  radio.addEventListener("click", checkStatus);
  function checkStatus(e) {
    checked = e.target.checked;
    localStorage.setItem("index", e.target.dataset.index);
  }
});

function goToStep3() {
  const index = localStorage.getItem("index");
  const name1 = localStorage.getItem("name1");
  const name2 = localStorage.getItem("name2");
  if (checked === true) {
    step2.style.display = "none";
    error.style.display = "none";
    if (index === "2" || index === "3" || index === "6") {
      step3_1.style.display = "none";
      step3_2.style.display = "block";
    } else {
      step3_1.style.display = "block";
      step3_2.style.display = "none";
    }
  } else {
    error.style.display = "block";
  }
  if (index === "2") {
    title1.innerText = "List the names of " + name1 + "'s Parents";
  }
  if (index === "3") {
    title1.innerText = "List the names of " + name2 + "'s Parents";
  }
  if (index === "6") {
    title1.innerText = "Custom Hosts";
  }
}
function goToStep3_1() {
  step3_2.style.display = "none";
  step3_1.style.display = "block";
  step4.style.display = "none";
}
let tone = false;

weddingTones.forEach((tones) => {
  tones.addEventListener("click", checkTones);
  function checkTones(e) {
    tone = e.target.checked;
    localStorage.setItem("option", e.target.dataset.index);
  }
});

form3.addEventListener("submit", setTone);
function goToStep4() {
  if (tone === true) {
    step3_1.style.display = "none";
    step3_2.style.display = "none";
    step4.style.display = "block";
    step5.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

function setTone(e) {
  e.preventDefault();
  const name1 = localStorage.getItem("name1");
  const name2 = localStorage.getItem("name2");
  const tone = localStorage.getItem("option");
  if (tone === "1") {
    title2.innerText = "Choose Your Casual Invitation Intro";
    Intro1.innerText = "Join us for the wedding of " + name1 + " and " + name2;
    Intro2.innerText =
      "You're invited to the wedding celebration of " + name1 + " and " + name2;
    Intro3.innerText =
      "With joy, you are invited to the marriage of " + name1 + " and " + name2;
  }
  if (tone === "2") {
    title2.innerText = "Choose Your Formal Invitation Intro";

    Intro1.innerText =
      "The honor of your presence is requested at the marriage of " +
      name1 +
      " and " +
      name2;
    Intro2.innerText =
      name1 +
      " and " +
      name2 +
      " invite you to celebrate with friends and family as they unite in marriage";
    Intro3.innerText =
      "You are cordially invited to the wedding of " + name1 + " and " + name2;
  }
}
function goToStep5() {
  step4.style.display = "none";
  step5.style.display = "block";
  step6.style.display = "none";
}
function goToStep6() {
  step5.style.display = "none";
  step6.style.display = "block";
  step7.style.display = "none";
}
function goToStep7() {
  step6.style.display = "none";
  step7.style.display = "block";
  step8.style.display = "none";
}

invitationIntro.forEach((intro) => {
  intro.addEventListener("click", selectIntro);
  function selectIntro(e) {
    localStorage.setItem("intro", e.target.nextElementSibling.innerText);
  }
});
function getDate(obj) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(obj.value).toLocaleDateString("en-US", options);
  localStorage.setItem("date", date);
}
form5.addEventListener("submit", venueInfo);

function venueInfo(e) {
  let venueInfo = {
    time: time.value,
    venue: venue.value,
    city: city.value,
  };
  localStorage.setItem("venueInfo", JSON.stringify(venueInfo));
  e.preventDefault();
}

reception.forEach((rcpt) => {
  rcpt.addEventListener("click", setReception);
  function setReception(e) {
    localStorage.setItem("reception", e.target.nextElementSibling.innerText);
    console.log(e.target.nextElementSibling.innerText);
  }
});
const form7 = document.getElementById("form7");

function goToStep8() {
  // step7.style.display = "none";
  step8.style.display = "block";
  const name1 = localStorage.getItem("name1");
  const name2 = localStorage.getItem("name2");
  const intro = localStorage.getItem("intro");
  const date = localStorage.getItem("date");
  const reception = localStorage.getItem("reception");
  // const parent1 = localStorage.getItem("parent1");
  // const parent2 = localStorage.getItem("parent2");
  const Venue = JSON.parse(localStorage.getItem("venueInfo"));
  formFill.innerHTML = `<p class="subtitle">${intro}</p>
  <h1>${name1}</h1>
  <p class="line">and</p>
  <h1>${name2}</h1>
  <div>
  <p>${date}</p>
  <p>${Venue.time}</p>
  </div>
  <div>
  <p>${Venue.venue}</p>
  <p>${Venue.city}</p>
  </div>
  <p>${reception}</p>
  `;
}
function generatePdf() {
  html2pdf().from(formFill).save();
}
