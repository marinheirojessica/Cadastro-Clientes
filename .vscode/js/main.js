let clientes =[];

function salvarClientes() {
    const nome =  document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;

    const cliente = { nome, email, telefone, cpf};
    clientes.push(cliente);

    //Limpar os campos após salvar
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('cpf').value = '';

    alert('Cliente salvo com sucesso!');
}

function listarClientes() {
    const listaClientes = document.getElementById('listaClientes');
    listaClientes.innerHTML = '';

    if(clientes.length === 0) {
        listaClientes.innerHTML = <li>Nenhum cliente cadastrado.</li>;
        return;
    }

    clientes.forEach((cliente, index) => {
        const listaItem = document.createElement('li');
        listaItem.innerHTML = `
        Cliente ${index + 1}:<br>
        Nome: ${cliente.nome}<br>
        Email: ${cliente.email}<br>
        Telefone: ${cliente.telefone}<br>
        CPF: ${cliente.cpf}<br><br>
        `;
       listaClientes.appendChild(listaItem);
    });
}