function calculadoraDeMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nome = document.getElementById("nome").value;

  const soma = (nota1 + nota2 + nota3) / 3;
  const media = document.querySelector(".mediaFinal");
  media.textContent = `Parabéns ${nome}, sua média final é ${soma.toFixed(2)}`;

  if (nome === "" || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    alert("Por favor, preencha todos os campos da AVA");
    return; // Exit the function to prevent further execution
  }

  document.getElementById("nota1").value = "";
  document.getElementById("nota2").value = "";
  document.getElementById("nota3").value = "";
  document.getElementById("nome").value = "";
}
/** Inicio
   * pego o valor de cada nota preenchida pelo usuario atraves do ID, usando o getElementById() e o value.
    Calculo da média 
   * Calculo a média somando cada uma das 3 notas preenchidas e divido por 3.
   Mostrar Média final
   * Para mostrar a notafinal eu seleciono a class do local aonde quero que a nota apareça usando o querySlector e exibo na tela atribuindo o textContent.
  Limpar Conteúdo
   *Para apagar o conteudo preenchido pelo usuario após a aparição da Nota, eu atribuo aspas vazias "" no document.getElementById utilizido no inicio no FINAL do codigo.
    toFixed(2) arredonda o numero em 2 casas decimais (depois da virgula)
 * ex: 6,33
 * toFixed(4)
 * ex: 6,3345
 */
