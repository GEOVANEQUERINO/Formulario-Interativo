function validateName() {
    var name = document.getElementById('nome').value;
    var error = document.getElementById('nameError');
    if (name === "") {
        error.textContent = "Por favor, insira seu nome.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validateGender() {
    var genders = document.getElementsByName('genero');
    var error = document.getElementById('genderError');
    var selected = Array.from(genders).some(gender => gender.checked);
    if (!selected) {
        error.textContent = "Por favor, selecione um gênero.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validateAge() {
    var age = document.getElementById('idade').value;
    var error = document.getElementById('ageError');
    if (age === "" || age < 1 || age > 120) {
        error.textContent = "Por favor, insira uma idade válida (1-120).";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function validateLanguages() {
    var checkboxes = document.getElementsByName('linguagem[]');
    var selected = Array.from(checkboxes).some(checkbox => checkbox.checked);
    var error = document.getElementById('langError');
    if (!selected) {
        error.textContent = "Por favor, selecione ao menos uma linguagem de programação.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

function submitForm() {
    var isValidName = validateName();
    var isValidGender = validateGender();
    var isValidAge = validateAge();
    var isValidLanguages = validateLanguages();

    if (isValidName && isValidGender && isValidAge && isValidLanguages) {
        // Aqui você pode adicionar o código para processar e exibir o resultado
        processarResultado(); // Processa o resultado após a validação
        return true; // Todos os campos válidos
    }

    function processarResultado() {
        var nome = document.getElementById('nome').value;
        var genero = "";
        var generos = document.getElementsByName('genero');
        for (var i = 0; i < generos.length; i++) {
            if (generos[i].checked) {
                genero = generos[i].value;
                break;
            }
        }

        var linguagensSelecionadas = [];
        var linguagens = document.getElementsByName('linguagem[]');
        for (var j = 0; j < linguagens.length; j++) {
            if (linguagens[j].checked) {
                linguagensSelecionadas.push(linguagens[j].value);
            }
        }

        // Determinar o resultado com base nas respostas
        var resultado = "Olá, " + nome + "! ";
        resultado += "Você é do sexo " + genero + " que gosta de programar em " + linguagensSelecionadas.join(", ") + ".";
        
        // Exibir o resultado ao usuário
        alert("Formulário enviado com sucesso!");

        alert(resultado);
    }
    
}