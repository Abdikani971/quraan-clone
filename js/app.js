const fetchingSurah = async () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "block";

  try {
    const response = await fetch("https://quranapi.pages.dev/api/surah.json");
    const data = await response.json();

    if (Array.isArray(data)) {
      renderSurahList(data);
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

  surahs.forEach((surah, index) => {
    const currentIndex = index + 1;
    const surahCard = document.createElement("a");
    surahCard.innerHTML += `
      <a href="surah.html?surah=${currentIndex}">
        <div class="surah-card">
          <div class="surah-card-number">${currentIndex}</div>
          <div class="surah-card-text">
            <div class="surah-card-english">
              <h5>${surah.surahName}</h5>
              <div class="ayah-number-wrapper">
                <p class="english">${surah.surahNameTranslation}</p>
              </div>
            </div>
            <div class="surah-card-arabic">
              <p>
                <span class="icon-surah">${surah.surahNameArabicLong}</span>
              </p>
            </div>
          </div>
        </div>
      </a>
    `;
    surahList.appendChild(surahCard);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  fetchingSurah();
});