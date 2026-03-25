
class Personagem{
    constructor(nome, hp, mana, especial){
        this.nome = nome;
        this.hp = hp;
        this.mana = mana;
        this.especial = especial;
    }
    atacar(alvo, habilidade){
        if(alvo.hp > 0 && this.hp > 0) {
            if(this.mana >=habilidade.custo && this.especial >= habilidade.especial){
                alvo.hp -= habilidade.dano;
                console.log()
                if (habilidade.custo > 0){
                    this.mana -= habilidade.custo
                    this.especial += 50;
                }
                else{
                    this.mana += 20
                }
                if (habilidade.especial > 0){
                    this.especial = 0
                }
                return `${this.nome} usou ${habilidade.nome}. Tirou ${habilidade.dano} de HP do inimigo!`
            }
            else{
                return `Sem recursos para usar essa habilidade!`;
            }
        }
        if(alvo.hp <= 0){
            alert(`${alvo.nome} MORREU! Pressione F5 para recomeçar`)
        }
        if(this.hp <= 0){
            alert(`${this.nome} MORREU! Pressione F5 para recomeçar`)
        }
    }
    boss_atacar(alvo){
        if(alvo.hp > 0 && this.hp > 0){
            if(this.especial == 100){
                alvo.hp -= 30
                this.especial = 0
            }
            else{
                this.especial +=50
                alvo.hp -= 15
            }
        }
        if(alvo.hp <= 0){
            alert(`${alvo.nome} MORREU! Pressione F5 para recomeçar`)
        }
        if(this.hp <= 0){
            alert(`${this.nome} MORREU! Pressione F5 para recomeçar`)
        }
    }
}

const atualizarInterface = (mensagem) => {
    console.log(boss.hp)
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("mp-heroi").value = hero.mana;
    document.getElementById("especial-heroi").value = hero.especial;
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("mp-boss").value = boss.mana;
    document.getElementById("especial-boss").value = boss.especial;
}
class Habilidade{
    constructor(id, nome, dano, custo, especial){
        this.id = id
        this.nome = nome
        this.dano = dano
        this.custo = custo
        this.especial = especial
    }
}
let hero = new Personagem("Carvagon, O Santo Padroeiro Da Identidade Canina", 100, 100, 0);

let boss = new Personagem("Pivolo, o Mau Dono do Mausoléu!", 500, 100, 0)
let listaHabilidades = [
    new Habilidade(1, "Ataque Básico", 20, 0, 0),
    new Habilidade(2, "Ataque Skill", 80, 20, 0),
    new Habilidade(3, "Ataque Especial", 150, 0, 100)
]
let container = document.getElementById("controles")
listaHabilidades.forEach(hab =>{
    let btn = document.createElement("button")
    btn.innerText = hab.nome
    btn.classList.add("btn","btn-warning")
    container.appendChild(btn)
    btn.onclick = () => {
        let mensagem = hero.atacar(boss, hab)
        atualizarInterface(mensagem)
        boss.boss_atacar(hero)
    }
})

document.getElementById("msg").textContent = "Ele parece furioso! Não se aproxime do maosoleu!"

