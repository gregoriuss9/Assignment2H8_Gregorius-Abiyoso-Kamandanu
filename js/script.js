function myFunction(){
    let formName = document.getElementById('exampleInputName').value;
    let formPosition = document.getElementById('exampleInputRole').value;
    let formAvailbility = document.getElementById('exampleInputAvailbility').value;
    let formUsia = document.getElementById('exampleInputUsia').value;
    let formLokasi = document.getElementById('exampleInputLokasi').value;
    let formPengalaman = document.getElementById('exampleInputExp').value;
    let formEmail = document.getElementById('exampleInputEmail').value;

    document.getElementById('full-name').innerHTML = formName;
    document.getElementById('full-position').innerHTML = formPosition;
    document.getElementById('status-value').innerHTML = formAvailbility;
    document.getElementById('status-usia').innerHTML = formUsia;
    document.getElementById('status-lokasi').innerHTML = formLokasi;
    document.getElementById('status-pengalaman').innerHTML = formPengalaman;
    document.getElementById('status-email').innerHTML = formEmail;

    document.getElementById('form').remove();
}