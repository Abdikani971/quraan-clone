const fetchingSingalSurah = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const surahNumber = urlParams.get("surah");
  const ayahContainer = document.querySelector(".ayah-container");

  ayahContainer.innerHTML = `
    <div class="container content-page">
      <div class="center-content col">
        <div class="text-center text--medium p-3">
          <div class="loader"></div>
        </div>
      </div>
    </div>
  `;

  try {
    const response = await fetch(
      `https://quranapi.pages.dev/api/${surahNumber}.json`
    );
    const data = await response.json();

    ayahContainer.innerHTML = "";

    data.english.forEach((translation, index) => {
      const arabic = data.arabic1[index];
      const ayahNumber = index + 1;

      ayahContainer.innerHTML += `
        <div class="translation-item">
          <div>
            <div class="translation-icons">
              <a class="translation-icon ayah-badge-link">
                <span class="ayah-badge">${surahNumber}:${ayahNumber}</span>
              </a>
            </div>
          </div>

          <div class="translation-text">
            <div class="translation-arabic">
              <div class="arabic">
                <span class="w">${arabic}</span>
              </div>
            </div>

            <div class="verse-translations">
              <p class="text text-grey text-medium text-regular translation">${translation}</p>
              <p class="text text-green text-medium text-regular">— Dr. Mustafa Khattab, the Clear Quran</p>
            </div>
          </div>
        </div>

        <div class="separator"></div>
      `;
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchingSingalSurah();
