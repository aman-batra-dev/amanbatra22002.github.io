import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuhRPu5jPSaFCbJu7oTw3osYe6SA19YiI",
  authDomain: "chaitanya-64f51.firebaseapp.com",
  projectId: "chaitanya-64f51",
  storageBucket: "chaitanya-64f51.appspot.com",
  messagingSenderId: "468045542779",
  appId: "1:468045542779:web:234ccbeb8468291fd039de",
  measurementId: "G-5Y3HLRCKWR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
let Submit  = document.getElementById("form");
Submit.addEventListener("submit", (e) => {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  try {
    const docRef = addDoc(collection(db, "complaints"), {
      email: email,
      name: name,
      subject: subject,
      message: message
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  alert("Your complaint has been submitted. Thank you!");  
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("message").value = "";
});

async function submitForm()
{
  
}
  