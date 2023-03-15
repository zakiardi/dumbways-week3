function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let number = document.getElementById("input-number").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  // Penggunaan if for Form Submission

  if (name === "") {
    return alert("Nama Harus Diisi");
  } else if (email === "") {
    return alert("Email Harus Diisi");
  } else if (number === "") {
    return alert("Nomor Harus Diisi");
  } else if (subject === "") {
    return alert("Subject Harus Diisi");
  } else if (message === "") {
    return alert("Pesan Harus Diisi");
  }

  let emailReceiver = "muhammadzakiardianto@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo, nama saya ${name}, ${name}, ${message}, silahkan kontak saya dengan email ${email}, telp ${number},`;
  a.click();

  let peserta = {
    name: name,
    email: email,
    number: number,
    subject: subject,
    message: message,
  };
  console.log(peserta);
}
