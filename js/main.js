let clientes = [];
  
function salvarCliente() {
    console.log('Função salvarCliente foi chamada.');

    const nome =  document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('CPF:', cpf);

    const cliente = { nome, email, telefone, cpf};
    clientes.push(cliente);
    console.log('Cliente salvo:, cliente');

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