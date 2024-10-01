function calculateTotal() {
  const registrationInStateBachelor = 200;
  const registrationOutStateBachelor = 600;
  const registrationInStateMaster = 300;
  const registrationOutStateMaster = 900;
  const tutionInStateBachelor = 350;
  const tutionOutStateBachelor = 700;
  const tutionInStateMaster = 450;
  const tutionOutStateMaster = 900;
  let studentType = prompt("Enter student type (B for Bachelor, M for Master): ");
  let residency = prompt("Enter residency (I for In-state, O for Out-state): ");
  let creditsTaking = parseInt(prompt("Enter the number of credits taking: "), 10);
  let tuitionRate;
  let registrationFee;
  if (studentType === "B" && residency === "I") {
      registrationFee = registrationInStateBachelor
      tuitionRate = tutionInStateBachelor
  } else if (studentType === "B" && residency === "O"){
      registrationFee = registrationOutStateBachelor
      tuitionRate = tutionOutStateBachelor
  } else if (studentType === "M" && residency === "I"){
      registrationFee = registrationInStateMaster
      tuitionRate = tutionInStateMaster
  } else if (studentType === "M" && residency === "O"){
      registrationFee = registrationOutStateMaster
      tuitionRate = tutionOutStateMaster
  }
  let tuition = creditsTaking * tuitionRate;
  let total = tuition + registrationFee;
  document.getElementById('result').innerHTML = `
      <p>Student Type: ${studentType === 'B' ? 'Bachelor' : 'Master'}</p>
      <p>Residency: ${residency === 'I' ? 'In-state' : 'Out-state'}</p>
      <p>Credits Taking: ${creditsTaking}</p>
      <p>Registration Fee: $${registrationFee}</p>
      <p>Tuition Rate: $${tuitionRate} (per credit)</p>
      <p>Tuition: $${tuition}</p>
      <p>Total: $${total}</p>
  `;
}

calculateTotal();