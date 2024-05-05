function generateResultCard(result) {
  const card = document.createElement("div").setAttribute('class', "quote");
  card.classList.add("result-card");
  card.innerHTML = `
        <div class="img">
          <img src="${result.image_link}" class="quote__img">
        </div>
        <h2 class="quotes__name">${result.title}</h2>
        <p class="quotes">${result.text}</p>
    `;
  return card;
}



document
  .getElementById("searchForm")
  .addEventListener("submit", handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);

    const response = await fetch("/search", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке запроса: " + response.status);
    }

    const data = await response.json();

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
    data.results.forEach((result) => {
      const resultCard = generateResultCard(result);
      resultsContainer.appendChild(resultCard);
    });
    resultsContainer.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

document.getElementById("searchBtn").addEventListener('submit', handleFormSubmit);
