const firebaseConfig = {
    apiKey: "AIzaSyC8Yn92BRWaUw6KElX5UIdIa4RjPdxYESg",
    authDomain: "usana-bc-tracker-signup.firebaseapp.com",
    projectId: "usana-bc-tracker-signup",
    storageBucket: "usana-bc-tracker-signup.appspot.com",
    messagingSenderId: "605379613292",
    appId: "1:605379613292:web:b50b8d185c2d20db82fe49"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

                                                                                                                        // Initialize auth state listener
                                                                                                                        window.addEventListener("DOMContentLoaded", () => {
                                                                                                                                auth.onAuthStateChanged((user) => {
                if (user) {
                        console.log("User logged in:", user.uid);
                        const uid = user.uid;

                    db.collection("users").doc(uid).get()
    .then((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const username = data.username || "User";
            document.getElementById("greeting").innerText = `Hi, ${username}!`;
        }
        // Hide loader after username is set and inventory is loaded
        loadInventory().then(() => {
            document.getElementById("loader").style.display = "none";
        });
    })
                                .catch((error) => {
                                        console.error("Error getting user data:", error);
                                });
                } else {
                        console.warn("No user is logged in. Redirecting...");
                        window.location.href = "index.html";
                }
        });
});



document.addEventListener("DOMContentLoaded", () => {
    // Function to handle logout
    const handleLogout = () => {
        auth.signOut()
            .then(() => window.location.href = "index.html")
            .catch(error => {
                console.error("Logout failed:", error);
                alert("Logout error. Check console.");
            });
    };

    // Attach to both buttons
    document.getElementById("sidebarLogoutBtn")?.addEventListener("click", handleLogout);
    document.getElementById("topbarLogoutBtn")?.addEventListener("click", handleLogout);
});


