// Small demo dataset of name-days by country (MM-DD -> [names])
const namesByCountry = {
    fi: {
        "01-01": ["Uudenvuodenpäivä"],
        "11-06": ["Kaarlo", "Kaarina"],
        "11-07": ["Marko"],
        "11-05": ["Elias"]
    },
    ua: {
        "11-06": ["Oksana"],
        "11-07": ["Taras"],
        "11-05": ["Olena"]
    },
    se: {
        "11-06": ["Hans"],
        "11-07": ["Anna"],
        "11-05": ["Lars"]
    },
    es: {
        "11-06": ["Jüri"],
        "11-07": ["Mari"],
        "11-05": ["Peeter"]
    }
};


function saveCountry() {
    const country = document.getElementById('country').value;
    localStorage.setItem('selectedCountry', country);
}

function loadCountry() {
    const saved = localStorage.getItem('selectedCountry');
    if (saved) {
        const sel = document.getElementById('country');
        sel.value = saved;
    }
}


function mmddFromDate(d) {
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return mm + '-' + dd;
}

// Convert input yyyy-mm-dd to MM-DD
function mmddFromInput(value) {
    if (!value) return null;
    // expected format: YYYY-MM-DD
    const parts = value.split('-');
    if (parts.length !== 3) return null;
    return parts[1] + '-' + parts[2];
}

function getNamesFor(mmdd, country) {
    if (!mmdd) return [];
    const data = namesByCountry[country] || {};
    return data[mmdd] || [];
}

function populateList(elementId, names) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.innerHTML = '';
    if (!names || names.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Ei nimipäiviä';
        el.appendChild(li);
        return;
    }
    names.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        el.appendChild(li);
    });
}

// Update today, tomorrow and yesterday lists
function updateAll() {
    saveCountry();
    const country = document.getElementById('country').value;
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const todayNames = getNamesFor(mmddFromDate(today), country);
    const yesterdayNames = getNamesFor(mmddFromDate(yesterday), country);
    const tomorrowNames = getNamesFor(mmddFromDate(tomorrow), country);

    populateList('today-names', todayNames);
    populateList('yesterday-names', yesterdayNames);
    populateList('tomorrow-names', tomorrowNames);
}


function searchByDate() {
    const input = document.getElementById('date-input').value;
    const el = document.getElementById('date-results');
    el.innerHTML = '';
    if (!input) {
        el.textContent = 'Valitse päivämäärä';
        return;
    }
    const mmdd = mmddFromInput(input);
    const country = document.getElementById('country').value;
    const names = getNamesFor(mmdd, country);
    if (!names || names.length === 0) {
        el.textContent = 'Ei nimipäiviä valitulle päivälle';
        return;
    }
    names.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        el.appendChild(li);
    });
}


function searchByName() {
    const name = document.getElementById('name-input').value.trim();
    const out = document.getElementById('name-result');
    if (!name) {
        out.textContent = 'Anna nimi';
        return;
    }
    const country = document.getElementById('country').value;
    const data = namesByCountry[country] || {};
    const lower = name.toLowerCase();
    const matches = [];
    for (const mmdd in data) {
        const list = data[mmdd];
        for (const n of list) {
            if (n.toLowerCase() === lower) {
                matches.push(mmdd);
            }
        }
    }
    if (matches.length === 0) {
        out.textContent = 'Nimeä ei löytynyt';
        return;
    }
    
    const formatted = matches.map(m => {
        const [mm, dd] = m.split('-');
        return `${parseInt(dd, 10)}.${parseInt(mm, 10)}.`;
    });
    out.textContent = `Nimipäivä(t): ${formatted.join(', ')}`;
}

window.addEventListener('load', () => {
    loadCountry();
    updateAll();
});


window.updateAll = updateAll;
window.searchByDate = searchByDate;
window.searchByName = searchByName;

