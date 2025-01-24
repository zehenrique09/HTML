$("#btn").on('click', () => {

    let nome = $("#nome").val()


    let sexo = $("input[name='sexo']:checked").val()


    let idade = $("#idade").val()

    let cpf = $("#cpf").val()

    let email = $("#email").val()

    let usuario = $("#usuario").val()

    let senha = $("#senha").val()






    let novalinha = (

        $("<tr></tr>")


            .append("<td>" + nome + "</td>")
            .append("<td>" + sexo + "</td>")
            .append("<td>" + idade + "</td>")
            .append("<td>" + cpf + "</td>")
            .append("<td>" + email + "</td>")
            .append("<td>" + usuario + "</td>")
            .append("<td>" + senha + "</td>")

    )

    $("tbody").append(novalinha)

})



// Logica


// pegar os valores dos campos inputs

// criar uma linha com alguns td


// colocar os valores obtidos nos td


// append para tabela 

