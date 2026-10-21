(() => {
  const stamp = document.querySelector(".live");
  if (!stamp) return;
  stamp.setAttribute("title", `rendered ${new Date().toISOString()}`);
})();
