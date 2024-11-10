

function toggleBankList() {
  const bankList = document.getElementById("bankList");
  const bankButton = document.getElementById("bankButton");
  const plusIcon = bankButton.querySelector("svg");

  // Toggle hiển thị danh sách ngân hàng
  bankList.classList.toggle("hidden");

  // Kiểm tra xem danh sách có đang hiển thị không
  if (!bankList.classList.contains("hidden")) {
    // Đổi sang biểu tượng dấu trừ
    plusIcon.innerHTML = `
            <circle cx="15" cy="15.5" r="14.5" fill="#FFDA28" stroke="#232323" />
            <path d="M10 15.5H20V18.5H10V15.5Z" fill="#232323" />
          `;
  } else {
    // Đổi lại thành dấu cộng
    plusIcon.innerHTML = `
            <circle cx="15" cy="15.5" r="14.5" fill="#FFDA28" stroke="#232323" />
            <path
              d="M13.3125 20V16.5469H10V13.4531H13.3125V10H16.6875V13.4531H20V16.5469H16.6875V20H13.3125Z"
              fill="#232323"
            />
          `;
  }
}
