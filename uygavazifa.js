function getCountry() {
    const countryName = document.getElementById("countryInput").value;
    const result = document.getElementById("result");

    result.innerHTML = "Downloading...";

    fetch(`https://restcountries.com/v3.1/name/${countryName}`, {
        method: "GET"
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Davlat topilmadi");
            }
            return res.json();
        })
        .then((data) => {
            const country = data[0];

             const flag = country.flags?.png || "https://via.placeholder.com/150?text=No+Flag";

             let currenssy = "Malumot yo'q 😐"
             if(country.currencies) {
                const current = Object.values(country.currencies)[0]
                currenssy = `${current.name} (${current.symbol || ""})`;
             }

            result.innerHTML = `
                <h2>${country.name.common}</h2>"Ma'lumot yo'q"}</p>
                <p><b>Aholi:</b> ${country.population.toLocaleString()}</p>
                <p><b>Hudud:</b> ${country.region}</p>
                <p><b>Valyutasi:</b> ${currenssy}</p>
                <p><b>Tillar:</b> ${country.languages ? Object.values(country.languages).join(", ") : "Ma'lumot yo'q"}</p>

            `;
        })
        .catch((err) => {
            result.innerHTML = `<p style="color:red">${err.message}</p>`;
        });
}

const input = document.getElementById("countryInput");

// Enter bosilganda getCountry() ishlaydi
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getCountry(); // Bu yerda sening funksiyang chaqiriladi
    }
});





// function getCountry() {
//     const countryName = document.getElementById("countryInput").value;
//     const result = document.getElementById("result");

//     result.innerHTML = "Downloading...";

//     fetch(`https://restcountries.com/v3.1/name/${countryName}`, {
//         method: "GET"
//     })
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error("Davlat topilmadi");
//         }
//         return res.json();
//     })
//     .then((data) => {
//         const country = data[0];

//         const flag = country.flags?.png || "https://via.placeholder.com/150?text=No+Flag";

//         let currensy = "Ma'lumot yo'q 😐";
//         if (country.currencies) {
//             const current = Object.values(country.currencies)[0];
//             currensy = `${current.name} (${current.symbol || ""})`;
//         }

//         result.innerHTML = `
//             <h2>${country.name.common}</h2>
//             <img src="${flag}" width="150" alt="Flag of ${country.name.common}">
//             <p><b>Poytaxt:</b> ${country.capital?.[0] || "Ma'lumot yo'q"}</p>
//             <p><b>Aholi:</b> ${country.population.toLocaleString()}</p>
//             <p><b>Hudud:</b> ${country.region}</p>
//             <p><b>Valyutasi:</b> ${currensy}</p>
//         `;
//     })
//     .catch((err) => {
//         result.innerHTML = `<p style="color:red">${err.message}</p>`;
//     });
//                 <img src="${flag}" width="150">
//                 <p><b>Poytaxt:</b> ${country.capital?.[0] || 
// // }
