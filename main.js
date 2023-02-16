function validarCEP(cep) {
    // Remove quaisquer caracteres não numéricos
    cep = cep.replace(/\D/g, '');
  
    // Verifica se o CEP possui 8 dígitos
    if (cep.length !== 8) {
      return false;
    }
  
    // Se chegou até aqui, o CEP é válido
    return true;
  }
  
  function validarCPF(cpf) {
    // Remove quaisquer caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }
  
    // Verifica o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
    }
  
    // Verifica o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
    }
  
    // Se chegou até aqui, o CPF é válido
    return true;
  }
  
  function validarEmail(email) {
    // Define uma expressão regular para validar o endereço de e-mail
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  
    // Verifica se o endereço de e-mail corresponde à expressão regular
    if (regexEmail.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  
  let cep = prompt('Digite o CEP:');
  if (validarCEP(cep)) {
    alert('CEP válido!');
  } else {
    alert('CEP inválido!');
  }
  
  let cpf = prompt('Digite o CPF:');
  if (validarCPF(cpf)) {
    alert('CPF válido!');
  } else {
    alert('CPF inválido!');
  }
  
  let email = prompt('Digite o endereço de e-mail:');
  if (validarEmail(email)) {
    alert('Endereço de e-mail válido!');
  } else {
    alert('Endereço de e-mail inválido!');
  }
  