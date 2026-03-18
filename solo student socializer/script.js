const otherStudents = [
    { name: "Divya", skills: "java, react" },
    { name: "Karthik", skills: "python, flask" },
    { name: "Sneha", skills: "html, css" },
    { name: "Arjun", skills: "python, java" }
  ];
  
  let index = 0;
  let yourSkills = localStorage.getItem("studentSkills");
  
  function loadCard() {
    if (index >= otherStudents.length) {
      document.getElementById("swipeCard").innerHTML = "<h2>No more students</h2>";
      return;
    }
  
    const student = otherStudents[index];
    document.getElementById("swipeCard").innerHTML = `
      <h2>${student.name}</h2>
      <p>Skills: ${student.skills}</p>
      <button onclick="like()">👍 Follow</button>
      <button onclick="skip()">👎 Skip</button>
    `;
  
    document.getElementById("chatBox").style.display = "none";
  }
  
  function like() {
    const student = otherStudents[index];
    const match = student.skills.split(", ").some(skill =>
      yourSkills.includes(skill.trim())
    );
  
    if (match) {
      document.getElementById("matchName").innerText = student.name;
      document.getElementById("chatBox").style.display = "block";
      alert("🎉 Skills match! Follow Request Sent.");
    } else {
      alert("Liked, but skills don't match.");
      index++;
      loadCard();
    }
  }
  
  function skip() {
    index++;
    loadCard();
  }
  
  function sendMessage() {
    const msg = document.getElementById("message").value;
    if (msg) {
      alert("Message Sent: " + msg);
      document.getElementById("message").value = "";
      index++;
      loadCard();
    } else {
      alert("Type something before sending!");
    }
  }
  
  window.onload = loadCard;
  