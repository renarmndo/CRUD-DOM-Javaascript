const form = document.getElementById("crudForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const nim = document.getElementById("nim");
const tableBody = document.getElementById("tablebody");

let editData = null;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const setNama = nama.value.trim();
  const setEmail = email.value.trim();
  const setNim = nim.value.trim();

  if (setNama === "" || setEmail === "" || setNim === "") return; // Validasi data

  if (editData) {
    editData.cells[1].innerText = setNama;
    editData.cells[2].innerText = setEmail;
    editData.cells[3].innerText = setNim;
    editData = null;
  } else {
    addRow(setNama, setEmail, setNim);
  }

  // Reset form setelah submit
  nama.value = "";
  email.value = "";
  nim.value = "";
});

function addRow(nama, email, nim) {
  const row = document.createElement("tr");

  // ID (otomatis berdasarkan jumlah baris)
  const idCell = document.createElement("td");
  idCell.innerText = tableBody.rows.length + 1;
  idCell.classList.add(
    "text-center",
    "border",
    "border-gray-200",
    "px-6",
    "py-3"
  );
  row.appendChild(idCell);

  // Nama
  const nameCell = document.createElement("td");
  nameCell.innerText = nama;
  nameCell.classList.add(
    "text-center",
    "border",
    "border-gray-200",
    "px-6",
    "py-3"
  );
  row.appendChild(nameCell);

  // Email
  const emailCell = document.createElement("td");
  emailCell.innerText = email;
  emailCell.classList.add(
    "text-center",
    "border",
    "border-gray-200",
    "px-6",
    "py-3"
  );
  row.appendChild(emailCell);

  // NIM
  const nimCell = document.createElement("td");
  nimCell.innerText = nim;
  nimCell.classList.add(
    "text-center",
    "border",
    "border-gray-200",
    "px-6",
    "py-3"
  );
  row.appendChild(nimCell);

  // Action
  const actionCell = document.createElement("td");
  actionCell.classList.add(
    "text-center",
    "border",
    "border-gray-200",
    "px-6",
    "py-3"
  );

  // Tombol Edit
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add(
    "bg-yellow-500",
    "text-white",
    "px-4",
    "py-2",
    "rounded-lg",
    "mr-2"
  );
  editButton.onclick = function () {
    editRow(row);
  };
  actionCell.appendChild(editButton);

  // Tombol Hapus
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add(
    "bg-red-500",
    "text-white",
    "px-4",
    "py-2",
    "rounded-lg"
  );
  deleteButton.onclick = function () {
    deleteRow(row);
  };
  actionCell.appendChild(deleteButton);

  row.appendChild(actionCell);

  tableBody.appendChild(row);
}

function editRow(row) {
  editData = row;
  nama.value = row.cells[1].innerText;
  email.value = row.cells[2].innerText;
  nim.value = row.cells[3].innerText;
}

function deleteRow(row) {
  tableBody.removeChild(row);
  resetTableIds();
}

function resetTableIds() {
  // Reset ID agar berurutan kembali setelah penghapusan
  Array.from(tableBody.rows).forEach((row, index) => {
    row.cells[0].innerText = index + 1;
  });
}
