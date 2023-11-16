// Função para contar palavras
function countWords() {
    var inputText = document.getElementById('inputText').value;
    // Remova espaços em branco no início e no final
    inputText = inputText.trim();
    // Divida o texto em palavras usando espaços como delimitador
    var words = inputText.split(/\s+/);
    // Atualize a exibição com a contagem de palavras
    document.getElementById('wordCount').textContent = 'Contagem de Palavras: ' + words.length;
  }
  
  // Adicione um ouvinte de evento ao campo de texto
  document.getElementById('inputText').addEventListener('input', countWords);
  