function toggleAnswer(answerId, iconId) {
  const answer = document.getElementById(answerId);
  const icon = document.getElementById(iconId);

  if (answer.classList.contains("max-h-0")) {
    answer.classList.remove("max-h-0", "opacity-0");
    answer.classList.add("max-h-full", "opacity-100", "mb-5");
    icon.innerHTML = `
      <circle cx="15" cy="15.5" r="14.5" fill="#FFDA28" stroke="#232323" />
      <path d="M10 15.5H20V18.5H10V15.5Z" fill="#232323" />
    `;
  } else {
    answer.classList.remove("max-h-full", "opacity-100", "mb-5");
    answer.classList.add("max-h-0", "opacity-0");
    icon.innerHTML = `
            <circle cx="15" cy="15.5" r="14.5" fill="#FFDA28" stroke="#232323" />
            <path
              d="M13.3125 20V16.5469H10V13.4531H13.3125V10H16.6875V13.4531H20V16.5469H16.6875V20H13.3125Z"
              fill="#232323"
            />
          `;
  }
}
