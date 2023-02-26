function Pessoa(nome) {
    this.nome = nome;
}

function Veiculo(nome,tipo,modelo,custo) {
    this.modelo = modelo;
    this.tipo = tipo;
    let _custo = custo;

    // getters e setters
    this.getValor = function() {
        return _custo;
    }

    this.setValor = function(valor) {
        if (typeof valor === 'number') {
            _custo = valor;
        }
    }

    this.getResposta = function() {
        return `A ${this.nome} comprou um/uma ${this.tipo}, modelo ${this.modelo}, com o desconto de R$${custo - _custo} pagando somente R$${_custo}`;
    }

    this.desconto = function() {
        const novoCusto = _custo - (_custo * 0.1);
        _custo = novoCusto;
    }

    Pessoa.call(this, nome);
}

function Bicicleta(nome,modelo) {
    Veiculo.call(this, nome,"Bicicleta",modelo, 1000);
    
    this.desconto = function() {
        const novoCusto = this.getValor() - (this.getValor() * 0.05);
        this.setValor(novoCusto);
    }
}

function Moto(nome,modelo) {
    Veiculo.call(this, nome,"Moto",modelo, 37000);
    
    this.desconto = function() {
        const novoCusto = this.getValor() - (this.getValor() * 0.2);
        this.setValor(novoCusto);
    }
}

function Carro(nome,modelo) {
    Veiculo.call(this, nome, "Carro",modelo, 500000);

    this.desconto = function() {
        const novoCusto = this.getValor() - (this.getValor() * 0.3);
        this.setValor(novoCusto);
    }
}

const bicicleta1 = new Bicicleta("Charles", "Caloi");
const moto1 = new Moto("Bianca","KAWASAKI NINJA 400 2023 KRT");
const carro1 = new Carro("Taiane","Volvo C40 Recharge");
const aviao = new Veiculo("Carmem","Avião","jatinho","1000000");

bicicleta1.desconto();
console.log(bicicleta1.getResposta())

moto1.desconto();
console.log(moto1.getResposta())

carro1.desconto();
console.log(carro1.getResposta())

aviao.desconto();
console.log(aviao.getResposta())