function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function setColorScheme(scheme) {
  if (scheme === "dark") {
    document.documentElement.classList.add("dark-mode");
    setCookie("theme", "dark", 7); // Lưu cookie trong 7 ngày
  } else {
    document.documentElement.classList.remove("dark-mode");
    setCookie("theme", "light", 7);
  }
}

function getPreferredColorScheme() {
  const savedScheme = getCookie("theme");
  if (savedScheme) {
    return savedScheme;
  }

  // Nếu không có lựa chọn từ cookie, kiểm tra hệ thống
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

function updateColorScheme() {
  const scheme = getPreferredColorScheme();
  setColorScheme(scheme);
}

// Áp dụng chế độ màu khi tải trang
updateColorScheme();

// Lắng nghe sự thay đổi của chế độ màu hệ thống
if (window.matchMedia) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", updateColorScheme);
}

//TODO: Add toggle button
function toggleDarkMode() {
  const myDiv = document.querySelector("body > div");
  myDiv.classList.toggle("dark-mode");
}



// Đừng xoá cái này của anh nữa nha
const darkModeToggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        html.classList.add('dark');
        setCookie('darkMode', 'true', 365);
    } else {
        html.classList.remove('dark');
        setCookie('darkMode', 'false', 365);
    }
});

if (hasCookie('darkMode')) {
    const isDarkMode = getCookie('darkMode') === 'true';
    html.classList.toggle('dark', isDarkMode);
    darkModeToggle.checked = isDarkMode;
}