const { createElement } = require("react");

class Personagem{
    constructor(nome, hp, mana, especial){
        this.nome = nome;
        this.hp = hp;
        this.mana = mana;
        this.especial = especial;
    }
    atacar(alvo, habilidade){
        this.alvo = alvo
        this.habilidade = habilidade
        if(this.mana >=habilidade.custo && this.energia >= habilidade.energia){
            alvo.hp -= habilidade.dano;
            if (habilidade.custo > 0){
                this.mana -= habilidade.custo
                this.energia += 50;
            }
            if (habilidade.energia > 0){
                this.energia = 0
            }
            msg = `${this.nome} usou ${habilidade.nome}. Tirou ${habilidade.dano} de HP do inimigo!`
        }
        else{
            msg = `Sem recursos para usar essa habilidade!`
        }
        
        return(msg)
    }
}
const atualizarInterface = (mensagem) =>{
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("mp-heroi").value = hero.mana;
    document.getElementById("especial-heroi").value = hero.especial;
}
class Habilidade{
    constructor(id, nome, dano, custo, energia){
        this.id = id
        this.nome = nome
        this.dano = dano
        this.custo = custo
        this.energia = energia
    }
}
let hero = new Personagem("Carvagon, O Santo Padroeiro Da Identidade Canina", 200, 100, 0);
document.getElementById("nome-heroi").textContent = `${hero.nome}`;
let boss = new Personagem("Pivolo, o Mau Dono do Mausoléu!", 1000, 100, 0)
document.getElementById("nome-boss").textContent = `${boss.nome}`
let listaHabilidades = [
    new Habilidade(1, "Ataque Básico", 20, 0, 0),
    new Habilidade(2, "Ataque Skill", 20, 20, 0),
    new Habilidade(3, "Ataque Especial", 20, 0, 100)
]
listaHabilidades.forEach(hab =>{
    let btn = document.createElement("button")
    btn.innerText = hab.nome
    btn.classList.add("btn","btn-warning")
    container.appendChiId(btn)
    btn.onclick = () => {
        let mensagem = hero.atacar(boss, hab)
        atualizarInterface(mensagem)
        boss.atacar(hero, hab)
    }
})

document.getElementById("msg").textContent = "Ele parece furioso! Não se aproxime do maosoleu!"

