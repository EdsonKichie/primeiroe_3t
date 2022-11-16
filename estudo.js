let tabuada = 2;

function escreva() {
    document.write("Tabuada do " + tabuada + "<br>");
    document.write(tabuada + " x 1 = " + (tabuada * 1) + "<br>");
    document.write(tabuada + " x 2 = " + (tabuada * 2) + "<br>");
    document.write(tabuada + " x 3 = " + (tabuada * 3) + "<br>");
    document.write(tabuada + " x 4 = " + (tabuada * 4) + "<br>");
    document.write(tabuada + " x 5 = " + (tabuada * 5) + "<br>");
    document.write(tabuada + " x 6 = " + (tabuada * 6) + "<br>");
    document.write(tabuada + " x 7 = " + (tabuada * 7) + "<br>");
    document.write(tabuada + " x 8 = " + (tabuada * 8) + "<br>");
    document.write(tabuada + " x 9 = " + (tabuada * 9) + "<br>");
    document.write(tabuada + " x 10 = " + (tabuada * 10) + "<br>");

}

function minhaTabuada() {
    for (let i = 1; i <= 10; i++) {
        document.write("Tabuada do " + i + "<br>");
        for (let j = 1; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (j * i) + "<br>");
        }
        document.write("<br>");
    }
}

function quadrado() {
    for (let i = 1; i <= 10; i++) {
        document.write("O quadrado de " + i + " é " + (i * i) + "<br>");
    }
}

function moeda(atual) {
    return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function calcula() {
    let val = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;
    if (!Number(val)) {
        alert("O valor deve ser um NÚMERO.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if (!Number(j)) {
        alert("O valor dos juros deve ser um NÚMERO.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    if (!Number(t)) {
        alert("O valor do tempo deve ser um NÚMERO.");
        document.getElementById("meses").value = "";
        document.getElementById("meses").focus();
        return
    }

    let res = val;
    let texto = "";
    for (let m = 1; m <= t; m++) {
        res = val * (1 + (j / 100));
        val = res;
        texto += m + ": " + moeda(res) + "<br>"; 
       // document.write("Mês " + m + " = " + moeda(res) + "<br>")
    }
    document.getElementById("mes").innerHTML=texto;
    document.getElementById("total").innerHTML= "Total: " + moeda(res);
    //document.write("Resultado: " + moeda(res));
}

function somarNotas() {
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    document.getElementById("resultadosoma").innerHTML = "Soma: " + r;
}

function mediaNotas() {
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    r = r / Number(3)
    document.getElementById("resultadomedia").innerHTML = "Média: " + r;
}

function fecharNotas() {
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let r = Number(n1) + Number(n2) + Number(n3);
    r = 180 - r;
    document.getElementById("resultadofechar").innerHTML = "Falta: " + r;
}

function calculaESG() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let delta = (b*b)-(4*a*c);
    document.getElementById("").innerHTML
}
