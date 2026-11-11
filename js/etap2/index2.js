function doInsertRovTable(num, nom, prenom, note) {
    const table = document.querySelector('table tbody');
    const row = table.insertRow();
    row.insertCell(0).textContent = num;
    row.insertCell(1).textContent = nom;
    row.insertCell(2).textContent = prenom;
    row.insertCell(3).textContent = note;
    row.insertCell(4).innerHTML = '<input type="checkbox">';
}
