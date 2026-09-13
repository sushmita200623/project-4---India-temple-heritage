```javascript
/* ==========================================
   INDIA TEMPLE HERITAGE PORTAL
   ========================================== */


/* ==========================================
   TEMPLE DATA
   ========================================== */

const temples = [

    {
        id: 1,
        name: "Kedarnath Temple",
        state: "Uttarakhand",
        city: "Kedarnath",
        category: "Jyotirlinga",
        timing: "4:00 AM - 9:00 PM",
        festival: "Bhai Dooj",
        image:
            "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
        description:
            "Kedarnath is a famous Shiva temple in the Himalayan region of Uttarakhand and is traditionally counted among the twelve Jyotirlingas."
    },

    {
        id: 2,
        name: "Jagannath Temple",
        state: "Odisha",
        city: "Puri",
        category: "Heritage",
        timing: "5:00 AM - 11:00 PM",
        festival: "Rath Yatra",
        image:
            "https://images.unsplash.com/photo-1626080308314-d786b2d9e2c7?auto=format&fit=crop&w=900&q=80",
        description:
            "Jagannath Temple in Puri is one of India's important pilgrimage destinations and is especially associated with the annual Rath Yatra."
    },

    {
        id: 3,
        name: "Kashi Vishwanath Temple",
        state: "Uttar Pradesh",
        city: "Varanasi",
        category: "Jyotirlinga",
        timing: "2:30 AM - 11:00 PM",
        festival: "Mahashivratri",
        image:
            "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=900&q=80",
        description:
            "Kashi Vishwanath Temple is a famous Shiva temple located in Varanasi, one of India's important pilgrimage cities."
    },

    {
        id: 4,
        name: "Meenakshi Amman Temple",
        state: "Tamil Nadu",
        city: "Madurai",
        category: "Heritage",
        timing: "5:00 AM - 10:00 PM",
        festival: "Chithirai Festival",
        image:
            "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=900&q=80",
        description:
            "Meenakshi Amman Temple in Madurai is renowned for its monumental gopurams, sculptures and Dravidian architectural traditions."
    },

    {
        id: 5,
        name: "Brahma Temple",
        state: "Rajasthan",
        city: "Pushkar",
        category: "Heritage",
        timing: "6:00 AM - 9:00 PM",
        festival: "Pushkar Fair",
        image:
            "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80",
        description:
            "Brahma Temple in Pushkar is an important pilgrimage destination located near the sacred Pushkar Lake in Rajasthan."
    },

    {
        id: 6,
        name: "Trimbakeshwar Temple",
        state: "Maharashtra",
        city: "Nashik",
        category: "Jyotirlinga",
        timing: "5:30 AM - 9:00 PM",
        festival: "Mahashivratri",
        image:
            "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?auto=format&fit=crop&w=900&q=80",
        description:
            "Trimbakeshwar Temple near Nashik is traditionally counted among the twelve Jyotirlinga shrines."
    },

    {
        id: 7,
        name: "Ram Mandir",
        state: "Uttar Pradesh",
        city: "Ayodhya",
        category: "Vaishnav",
        timing: "6:30 AM - 9:30 PM",
        festival: "Ram Navami",
        image:
            "https://images.unsplash.com/photo-1604608672516-f1b9e7a5c2a6?auto=format&fit=crop&w=900&q=80",
        description:
            "Ayodhya is an important pilgrimage city associated with Lord Rama and has a rich cultural and religious history."
    },

    {
        id: 8,
        name: "Somnath Temple",
        state: "Gujarat",
        city: "Somnath",
        category: "Jyotirlinga",
        timing: "6:00 AM - 10:00 PM",
        festival: "Mahashivratri",
        image:
            "https://images.unsplash.com/photo-1590050752117-23a9d7fc9a2f?auto=format&fit=crop&w=900&q=80",
        description:
            "Somnath Temple is traditionally counted among the twelve Jyotirlinga shrines and is located on the western coast of Gujarat."
    }

];


/* ==========================================
   DISPLAY TEMPLES
   ========================================== */

function displayTemples(list = temples) {

    const grid = document.getElementById("templeGrid");

    if (!grid) {
        return;
    }

    if (list.length === 0) {

        grid.innerHTML = 
            <div class="no-result">
                <h3>🔍 No Temples Found</h3>
                <p>
                    Try another temple, city, state or category.
                </p>
            </div>
        ;

        return;
    }


    grid.innerHTML = list.map(function (temple) {

        return 
            <article class="temple-card">

                <img
                    src="${temple.image}"
                    alt="${temple.name}"
                    loading="lazy"
                    onerror="this.src='https://via.placeholder.com/900x500?text=Temple+Image'"
                >

                <div class="temple-info">

                    <button
                        class="favorite"
                        onclick="addFavorite(${temple.id})"
                        title="Add to favorites"
                    >
                        ♡
                    </button>

                    <span class="tag">
                        ${temple.category}
                    </span>

                    <h3>
                        ${temple.name}
                    </h3>

                    <p>
                        📍 ${temple.city}, ${temple.state}
                    </p>

                    <p>
                        🕐 ${temple.timing}
                    </p>

                    <button
                        class="details-btn"
                        onclick="showTemple(${temple.id})"
                    >
                        View Details →
                    </button>

                </div>

            </article>
        ;

    }).join("");

}


/* ==========================================
   FILTER TEMPLES
   ========================================== */

function filterTemples() {

    const stateElement =
        document.getElementById("stateFilter");

    const categoryElement =
        document.getElementById("categoryFilter");


    const state =
        stateElement ? stateElement.value : "all";

    const category =
        categoryElement ? categoryElement.value : "all";


    const filteredTemples = temples.filter(function (temple) {

        const stateMatch =
            state === "all" ||
            temple.state === state;

        const categoryMatch =
            category === "all" ||
            temple.category === category;

        return stateMatch && categoryMatch;

    });


    displayTemples(filteredTemples);
}


/* ==========================================
   SEARCH
   ========================================== */

function searchTemple() {

    const input =
        document.getElementById("searchInput");

    if (!input) {
        return;
    }


    const search =
        input.value.toLowerCase().trim();


    if (search === "") {

        displayTemples();

    } else {

        const results = temples.filter(function (temple) {

            return (
                temple.name.toLowerCase().includes(search) ||
                temple.state.toLowerCase().includes(search) ||
                temple.city.toLowerCase().includes(search) ||
                temple.category.toLowerCase().includes(search) ||
                temple.festival.toLowerCase().includes(search)
            );

        });

        displayTemples(results);
    }


    scrollToSection("temples");
}


/* ==========================================
   TEMPLE DETAILS
   ========================================== */

function showTemple(id) {

    const temple =
        temples.find(function (item) {
            return item.id === id;
        });


    if (!temple) {
        return;
    }


    const modal =
        document.getElementById("templeModal");

    const content =
        document.getElementById("modalContent");


    content.innerHTML = 

        <img
            src="${temple.image}"
            alt="${temple.name}"
            style="
                width:100%;
                height:280px;
                object-fit:cover;
                border-radius:15px;
            "
            onerror="this.src='https://via.placeholder.com/900x500?text=Temple+Image'"
        >

        <br><br>

        <span class="tag">
            ${temple.category}
        </span>

        <h2 style="margin:12px 0;">
            ${temple.name}
        </h2>

        <p>
            📍 <strong>Location:</strong>
            ${temple.city}, ${temple.state}
        </p>

        <p>
            🕐 <strong>Timings:</strong>
            ${temple.timing}
        </p>

        <p>
            🎉 <strong>Festival:</strong>
            ${temple.festival}
        </p>

        <br>

        <h3>About the Temple</h3>

        <p style="line-height:1.8;margin-top:10px;">
            ${temple.description}
        </p>

        <br>

        <button
            class="details-btn"
            onclick="savePilgrimage('${escapeQuotes(temple.name)}')"
        >
            ❤️ Add to Pilgrimage
        </button>

    ;


    modal.style.display = "flex";
}


/* ==========================================
   CLOSE TEMPLE MODAL
   ========================================== */

function closeModal() {

    const modal =
        document.getElementById("templeModal");

    if (modal) {
        modal.style.display = "none";
    }
}


/* ==========================================
   STATE SELECTION
   ========================================== */

function selectState(state) {

    const stateFilter =
        document.getElementById("stateFilter");

    const categoryFilter =
        document.getElementById("categoryFilter");


    if (stateFilter) {
        stateFilter.value = state;
    }

    if (categoryFilter) {
        categoryFilter.value = "all";
    }


    filterTemples();

    scrollToSection("temples");
}


/* ==========================================
   PILGRIMAGE PLANNER
   ========================================== */

function createPlan() {

    const stateElement =
        document.getElementById("plannerState");

    const daysElement =
        document.getElementById("days");

    const result =
        document.getElementById("planResult");


    const state =
        stateElement.value;

    const days =
        daysElement.value;


    if (!state) {

        result.innerHTML = 
            <div class="plan-error">
                ⚠️ Please select a state first.
            </div>
        ;

        return;
    }


    const stateTemples =
        temples.filter(function (temple) {

            return temple.state === state;

        });


    let places;


    if (stateTemples.length > 0) {

        places =
            stateTemples.map(function (temple) {

                return temple.name;

            });

    } else {

        places = [
            "Explore famous temples",
            "Visit local heritage sites",
            "Discover nearby cultural attractions"
        ];

    }


    result.innerHTML = 

        <div
            style="
                background:white;
                color:#333;
                padding:25px;
                border-radius:15px;
            "
        >

            <h3>
                🧭 ${days}-Day Pilgrimage Plan
            </h3>

            <p style="margin-top:8px;">
                📍 Destination:
                <strong>${state}</strong>
            </p>

            <br>

            <h4>
                Suggested Places
            </h4>

            <ul
                style="
                    margin:12px 0 0 20px;
                    line-height:2;
                "
            >

                ${places.map(function (place) {

                    return `<li>${place}</li>`;

                }).join("")}

            </ul>

            <br>

            <p>
                💡 Always verify current temple timings,
                entry rules, travel conditions and official
                visitor information before travelling.
            </p>

            <button
                class="details-btn"
                onclick="savePlan('${escapeQuotes(state)}', '${days}')"
            >
                💾 Save Plan
            </button>

        </div>

    ;
}


/* ==========================================
   SAVE PILGRIMAGE PLAN
   ========================================== */

function savePlan(state, days) {

    const plan = {
        state: state,
        days: days,
        savedAt: new Date().toISOString()
    };


    localStorage.setItem(
        "pilgrimagePlan",
        JSON.stringify(plan)
    );


    alert(
        "✅ Your pilgrimage plan has been saved!"
    );
}


/* ==========================================
   SAVE TEMPLE TO PILGRIMAGE
   ========================================== */

function savePilgrimage(name) {

    localStorage.setItem(
        "selectedTemple",
        name
    );


    alert(
        "❤️ " +
        name +
        " has been added to your pilgrimage plan!"
    );


    closeModal();
}


/* ==========================================
   FAVORITES
   ========================================== */

function addFavorite(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem("favorites")
        ) || [];


    if (!favorites.includes(id)) {

        favorites.push(id);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("❤️ Temple added to favorites!");

    } else {

        alert("ℹ️ This temple is already in favorites.");

    }
}


/* ==========================================
   DARK MODE
   ========================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const darkMode =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "darkMode",
        darkMode
    );
}


/* ==========================================
   LOGIN
   ========================================== */

function openLogin() {

    const modal =
        document.getElementById("loginModal");

    modal.style.display = "flex";
}


function closeLogin() {

    const modal =
        document.getElementById("loginModal");

    modal.style.display = "none";
}


function loginUser(event) {

    event.preventDefault();


    alert(
        "✅ Demo Login Successful!\n\nWelcome to Temple Bharat."
    );


    closeLogin();
}


/* ==========================================
   SCROLL
   ========================================== */

function scrollToSection(id) {

    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }
}


/* ==========================================
   ESCAPE QUOTES
   ========================================== */

function escapeQuotes(text) {

    return text
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");

}


/* ==========================================
   KEYBOARD SEARCH
   ========================================== */

function setupSearch() {

    const input =
        document.getElementById("searchInput");


    if (!input) {
        return;
    }


    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchTemple();

            }

        }
    );
}


/* ==========================================
   CLOSE MODALS WHEN CLICKING OUTSIDE
   ========================================== */

function setupModalEvents() {

    const templeModal =
        document.getElementById("templeModal");

    const loginModal =
        document.getElementById("loginModal");


    window.addEventListener(
        "click",
        function (event) {

            if (event.target === templeModal) {
                closeModal();
            }

            if (event.target === loginModal) {
                closeLogin();
            }

        }
    );


    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeModal();
                closeLogin();

            }

        }
    );
}


/* ==========================================
   LOAD SAVED DARK MODE
   ========================================== */

function loadDarkMode() {
    const saved =localStorage.getItem("darkMode");

    if (saved === "true") {
    document.body.classList.add("dark");
    
    }
}


/* ==========================================
   INITIALIZE WEBSITE
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayTemples();

        loadDarkMode();

        setupSearch();

        setupModalEvents();

    }
);
```
