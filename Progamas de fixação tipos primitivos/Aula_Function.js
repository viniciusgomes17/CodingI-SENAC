function dobro (num) {
    return num * 2
  }
  console.log(dobro(20))
  
  
 
  function calcularMedia (nota1, nota2, nota3) {
    const soma = (nota1 + nota2 + nota3)
    const media = (soma / 3).toFixed(2)
    return media
  }
  
  
  console.log(calcularMedia(7, 7, 7))
  
  const soma = num1 => (num1 + 3000).toFixed(2)
  console.log(soma(5))
  