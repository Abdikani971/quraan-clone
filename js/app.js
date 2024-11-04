let allSurahs = [];

const fetchingSurah = async () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "block";

  try {
    const response = await fetch("https://api.alquran.cloud/v1/surah");
    const data = await response.json();

    if (Array.isArray(data.data)) {
      allSurahs = data.data;
      renderSurahList(allSurahs);
    } else {
      console.error("Unexpected data format");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    loader.style.display = "none";
  }
};

const renderSurahList = (surahs) => {
  const surahList = document.getElementById("surah-list");
  surahList.innerHTML = "";

  surahs.forEach((surah) => {
    const surahCard = document.createElement("div");
    surahCard.innerHTML = `
      <a href="surah.html?surah=${surah.number}">
        <div class="surah-card">
          <div class="surah-card-number">${surah.number}</div>
          <div class="surah-card-text">
            <div class="surah-card-english">
              <h5>${surah.englishName}</h5>
              <div class="ayah-number-wrapper">
                <p class="english">${surah.englishNameTranslation}</p>
              </div>
            </div>
            <div class="surah-card-arabic">
              <p>
                <span class="icon-surah">${surah.name}</span>
              </p>
            </div>
          </div>
        </div>
      </a>
    `;
    surahList.appendChild(surahCard);
  });
};

const handleSearch = (event) => {
  event.preventDefault();
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredSurahs = allSurahs.filter((surah) => {
    return (
      surah.englishName.toLowerCase().includes(searchInput) ||
      surah.englishNameTranslation.toLowerCase().includes(searchInput) ||
      surah.name.toLowerCase().includes(searchInput)
    );
  });

  renderSurahList(filteredSurahs);
};

document.getElementById("search-form").addEventListener("submit", handleSearch);

document.addEventListener("DOMContentLoaded", () => {
  fetchingSurah();
});
