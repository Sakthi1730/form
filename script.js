function submitForm() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const foods = document.getElementById("food").value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const cells = [firstName, lastName, address, pincode, gender, foods, state, country];

   
    for (let i = 0; i < cells.length; i++) {
        const cell = newRow.insertCell(i);
        cell.textContent = cells[i];
    }

 
    document.getElementById('myForm').reset();
}
