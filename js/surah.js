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
  } catch (error) {
    console.error("Error:", error);
  }
};
