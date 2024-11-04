const fetchingSingalSurah = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const surahNumber = urlParams.get("surah");
  const ayahContainer = document.querySelector(".ayah-container");
};
