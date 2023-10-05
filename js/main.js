let clientes = [];

function validarFormulario(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;

    //Verificar se algum comppo está vazio
    if(!nome || !email || !telefone || !cpf){
        alert('Por favor, preencha todos os campos.');
        return false; //Impede o envio do formulário
    }

    //Se todos os campos estão preenchidos, chama a função para salvar o cliente
    salvarCliente(nome, email, telefone, cpf);
    
    //Permite o envio do formulário
    return true;
}
  
function salvarCliente(nome, email, telefone, cpf){
    console.log('Função salvarCliente foi chamada.');

    const cliente = { nome, email, telefone, cpf};
    clientes.push(cliente);

    console.log('Cliente salvo: cliente');
 
    //Limpar os campos após salvar
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('cpf').value = '';

    //Salvar os clientes no localStorage
    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Cliente salvo com sucesso!');
}

function listarClientes() {
    console.log('Função listarClientes foi chamada');

    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    console.log('Clientes:', clientes);

    //Carregar os clientes do localStorage
    const storedClientes = localStorage.getItem('clientes');

    if(storedClientes) {
        clientes = JSON.parse(storedClientes);
    }

    if(clientes.length === 0) {
        console.log('Nenhum cliente cadastrado.')
        listaClientes.innerHTML = '<li>Nenhum cliente cadastrado.</li>';
        return;
    }

    clientes.forEach((cliente, index) => {
        const listaItem = document.createElement('tr');
        listaItem.innerHTML = `
        <td>${cliente.nome}</td>
        <td>${cliente.email}</td>
        <td>${cliente.telefone}</td>
        <td>${cliente.cpf}</td>
        `;
       listaClientes.appendChild(listaItem);
    });
}

function toUpperCaseInputs(){
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');
    const cpfInput = document.getElementById('cpf');

    nomeInput.addEventListener('input', ()=> { nomeInput.value = nomeInput.value.toUpperCase();
    });

    emailInput.addEventListener('input', () => { emailInput.value = emailInput.value.toUpperCase(); 
    });

    telefoneInput.addEventListener('input', () => { telefoneInput.value = telefoneInput.value.toUpperCase();
    })

    cpfInput.addEventListener('input', () => { cpfInput.value = cpfInput.value.toUpperCase();
    });
}
    // Chame a função para aplicar o evento de transformar em maiúsculo nos inputs
    toUpperCaseInputs();
