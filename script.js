




                    window.addEventListener("load", () => {
                        setTimeout(() => {
        document.getElementById("loading-screen").style.animation = "fadeOut 0.5s forwards";
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("app-content").style.display = "block";
        }, 500); // Ensures the fade-out animation completes before hiding
    }, 1000);
});




document.querySelectorAll(".binary-input").forEach(input => {
    input.addEventListener("input", function () {
        let value = parseInt(this.value) || 0;
        this.value = Math.max(0, Math.min(5000, value));
    });
});




document.querySelectorAll(".editable-input").forEach(input => {
    input.addEventListener("focus", function () {
        this.select(); // Select all text when focused
    });
    
    input.addEventListener("input", function () {
        let value = parseInt(this.value) || 0; // Default to 0 if empty
            value = Math.max(0, Math.min(5000, value)); // Restrict between 0 and 5000
            this.value = value; // Update input field to reflect constraints
            
            updateTreeValues(); // Recalculate and update binary structure
            });
            });
            
            function updateTreeValues() {
                // Implement logic to recalculate and update nodes properly
            }
            
            document.querySelectorAll(".left-table-input").forEach(input => {
                input.addEventListener("focus", function () {
                    this.select(); // Select all text when clicked
                });
                
                input.addEventListener("blur", function () {
                    if (this.value.trim() === "") {
                        this.value = 0; // Set to 0 if empty when clicking away
                            }
                            updateTreeValues(); // Ensure the right-side nodes update
                            });
                            
                            input.addEventListener("input", function () {
                                let value = parseInt(this.value) || 0; // Default to 0 if empty
                                    value = Math.max(0, Math.min(5000, value)); // Restrict between 0 and 5000
                                    this.value = value; // Enforce the constraint in real-time
                                    updateTreeValues(); // Update the binary structure
                                    });
                                    });
                                    
                                    document.querySelectorAll("#bc-table td[contenteditable='true']").forEach(cell => {
                                        cell.addEventListener("focus", function () {
                                            let range = document.createRange();
                                            let selection = window.getSelection();
                                            
                                            if (this.childNodes.length > 0) {
                                                range.selectNodeContents(this);
                                                selection.removeAllRanges();
                                                selection.addRange(range);
                                            }
                                                });
                                                
                                                cell.addEventListener("input", function () {
                                                    let selection = window.getSelection();
                                                    let range = selection.getRangeAt(0);
                                                    let cursorPosition = range.startOffset;
                                                    
                                                    let value = this.innerText.replace(/\D/g, ""); // Keep only numbers
                                                    
                                                    if (this.innerText !== value) {
                                                        alert("Only numbers are allowed!");
                                                    }
                                                        
                                                        value = value.replace(/^0+/, "") || "0"; // Remove leading zeros, default to "0"
                                                        
                                                        if (parseInt(value) > 5000) {
                                                            value = "5000"; // Enforce max limit of 5000
                                                        }
                                                            
                                                            this.innerText = value;
                                                            this.dataset.edited = "true";
                                                            
                                                            // Restore cursor position
                                                            if (this.childNodes.length > 0) {
                                                                range.setStart(this.childNodes[0], Math.min(cursorPosition, value.length));
                                                                range.setEnd(this.childNodes[0], Math.min(cursorPosition, value.length));
                                                                selection.removeAllRanges();
                                                                selection.addRange(range);
                                                            }
                                                                
                                                                updateTree();
                                                                });
                                                                
                                                                cell.addEventListener("paste", function (event) {
                                                                    event.preventDefault();
                                                                    let pasteText = (event.clipboardData || window.clipboardData).getData("text").replace(/\D/g, "");
                                                                    
                                                                    pasteText = pasteText.replace(/^0+/, "") || "0"; // Remove leading zeros, default to "0"
                                                                    if (parseInt(pasteText) > 5000) {
                                                                        pasteText = "5000"; // Enforce max limit of 5000
                                                                    }
                                                                        
                                                                        document.execCommand("insertText", false, pasteText);
                                                                        });
                                                                        
                                                                        cell.addEventListener("keydown", function (event) {
                                                                            if (event.key === "Enter") {
                                                                                event.preventDefault();
                                                                            }
                                                                                });
                                                                                });
                                                                                
                                                                                                            
                                                                                                                        document.addEventListener("DOMContentLoaded", function () {
                                                                                                                            const maxPoints = 5000; // Maximum value allowed
                                                                                                                            
                                                                                                                            function updateNodeValues() {
                                                                                                                                let tbc1Left = Math.min(
                                                                                                                                    parseInt(document.querySelector("#bc-table tr:nth-child(2) td:nth-child(2)").textContent) || 0,
                                                                                                                                    maxPoints
                                                                                                                                );
                                                                                                                                let tbc1Right = Math.min(
                                                                                                                                    parseInt(document.querySelector("#bc-table tr:nth-child(2) td:nth-child(3)").textContent) || 0,
                                                                                                                                    maxPoints
                                                                                                                                );
                                                                                                                
                                                                                                                                let tbc2Left = Math.min(
                                                                                                                                    parseInt(document.querySelector("#bc-table tr:nth-child(3) td:nth-child(2)").textContent) || 0,
                                                                                                                                    maxPoints
                                                                                                                                );
                                                                                                                                let tbc2Right = Math.min(
                                                                                                                                    parseInt(document.querySelector("#bc-table tr:nth-child(3) td:nth-child(3)").textContent) || 0,
                                                                                                                                    maxPoints
                                                                                                                                );
                                                                                                                                let tbc3Left = Math.min(
                                                                                                                                    parseInt(document.querySelector("#bc-table tr:nth-child(4) td:nth-child(2)").textContent) || 0,
                                                                                                                                    maxPoints
                                                                                                                                );
                                                                                                                                let tbc3Right = Math.min(
                                                                                                                                    parseInt(document.querySelector("#bc-table tr:nth-child(4) td:nth-child(3)").textContent) || 0,
                                                                                                                                    maxPoints
                                                                                                                                );
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                                                                
                                                                                
                                                                                                                                
                                                                                                                                let bc2Left = Math.min(parseInt(document.querySelector("#input-left-002").value) || 0, maxPoints);
                                                                                                                                let bc2Right = Math.min(parseInt(document.querySelector("#input-right-002").value) || 0, maxPoints);
                                                                                                                                let bc3Left = Math.min(parseInt(document.querySelector("#input-left-003").value) || 0, maxPoints);
                                                                                                                                let bc3Right = Math.min(parseInt(document.querySelector("#input-right-003").value) || 0, maxPoints);
                                                                                                                                
                                                                                                                                // Corrected summing logic
                                                                                                                                let totalLeft = Math.min(tbc1Left + bc2Left + bc2Right, maxPoints);
                                                                                                                                let totalRight = Math.min(tbc1Right + bc3Left + bc3Right, maxPoints);
                                                                                                                                
                                                                                                                                // Update nodes
                                                                                                                                document.getElementById("left-001").textContent = totalLeft;
                                                                                                                                document.getElementById("right-001").textContent = totalRight;
                                                                                                                                document.getElementById("left-002").textContent = tbc2Left+bc2Left;
                                                                                                                                document.getElementById("right-002").textContent = tbc2Right+bc2Right;
                                                                                                                                document.getElementById("left-003").textContent = tbc3Left+bc3Left;
                                                                                                                                document.getElementById("right-003").textContent = tbc3Right+bc3Right;
                                                                                                                            }

                                    
                                                                                                                            // Attach event listeners to all editable inputs
                                                                                                                            document.querySelectorAll("#bc-table td[contenteditable='true']").forEach(cell => {
                                                                                                                                cell.addEventListener("input", updateNodeValues);
                                                                                                                            });
                                                                                                                            
                                                                                                                            document.querySelectorAll(".binary-input").forEach(input => {
                                                                                                                                input.addEventListener("input", updateNodeValues);
                                                                                                                            });
                                                                                                                            
                                                                                                                            updateNodeValues(); // Initialize values on load
                                                                                                                        });




                                                                                function calculateIncome() {
                                                                                    const minSmallSide = 125; // Minimum required to be counted
                                                                                    const commissionRate = 0.2; // 20% commission
                                                                                    
                                                                                    // Get all left and right values
                                                                                    let left1 = parseInt(document.getElementById("left-001").textContent) || 0;
                                                                                    let right1 = parseInt(document.getElementById("right-001").textContent) || 0;
                                                                                    let left2 = parseInt(document.getElementById("left-002").textContent) || 0;
                                                                                    let right2 = parseInt(document.getElementById("right-002").textContent) || 0;
                                                                                    let left3 = parseInt(document.getElementById("left-003").textContent) || 0;
                                                                                    let right3 = parseInt(document.getElementById("right-003").textContent) || 0;
                                                                                    
                                                                                    // Get the smaller side from each node
                                                                                    let small1 = Math.min(left1, right1);
                                                                                    let small2 = Math.min(left2, right2);
                                                                                    let small3 = Math.min(left3, right3);
                                                                                    
                                                                                
                                                                                    
                                                                                    
                                                                                    
                                                                                    // Only add values that meet the minimum requirement
                                                                                    let totalSmallSides = 0;
                                                                                    if (small1 >= minSmallSide) totalSmallSides += small1;
                                                                                        if (small2 >= minSmallSide) totalSmallSides += small2;
                                                                                            if (small3 >= minSmallSide) totalSmallSides += small3;
                                                                                                
                                                                                                // Calculate income (20% of total valid small side) with two decimal places
                                                                                                let totalIncome = parseFloat((totalSmallSides * commissionRate).toFixed(2));
                                                                                                
                                                                                                // Determine rank
                                                                                                let rank = "No Rank";
                                                                                                if (totalIncome >= 4000) rank = "Diamond Director Rank";
                                                                                                else if (totalIncome >= 3000) rank = "Emerald Director Rank";
                                                                                                else if (totalIncome >= 2000) rank = "Ruby Director Rank";
                                                                                                else if (totalIncome >= 1000) rank = "Silver Director Rank";
                                                                                                else if (totalIncome >= 800) rank = "Bronze Director Rank";
                                                                                                else if (totalIncome >= 600) rank = "Director Rank";
                                                                                                else if (totalIncome >= 400) rank = "Achiever Rank";
                                                                                                else if (totalIncome >= 200) rank = "Builder Rank";
                                                                                                else if (totalIncome >= 100) rank = "Believer Rank";
                                                                                                else if (totalIncome >= 50) rank = "Sharer Rank";
                                                                                                    
                                                                                                    // Update the UI
                                                                                                    document.querySelector(".income-value").textContent = `$${totalIncome.toFixed(2)}`;
                                                                                                    document.querySelector(".rank-income").textContent = rank;
                                                                                                    }
                                                                                                    
                                                                                                    // Function to observe changes in node values
                                                                                                    function observeNodes() {
                                                                                                        const nodeIds = ["left-001", "right-001", "left-002", "right-002", "left-003", "right-003"];
                                                                                                        const observer = new MutationObserver(calculateIncome);
                                                                                                        
                                                                                                        nodeIds.forEach(id => {
                                                                                                            let targetNode = document.getElementById(id);
                                                                                                            if (targetNode) {
                                                                                                                observer.observe(targetNode, { childList: true, subtree: true, characterData: true });
                                                                                                            }
                                                                                                                });
                                                                                                                }
                                                                                                                
                                                                                                                // Run calculation once on page load
                                                                                                                calculateIncome();
                                                                                                                observeNodes();

                                                                                    
                                                                                    
                                                                                                                if ('serviceWorker' in navigator) {
                                                                                                                    navigator.serviceWorker.register('/service-worker.js')
                                                                                                                    .then((registration) => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker registration failed:', error);
            });
    }


// Automatically add 'active' class to the current page's sidebar link
document.querySelectorAll('.sidebar a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});


