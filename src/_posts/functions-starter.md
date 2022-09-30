---
title: 'Bê-á-Bá das Funções: Conceito e Aplicações em C'
coverImage: '/assets/functions/bg-post-1.png'
tag: 'Ciência da Computação'
date: '26/09/2022'
author:
  - name: 'Gustavo Soares'
  - image: '/assets/perfil-github-1.png'
intro: 'Na matemática quando queremos resolver um problema, normalmente o dividimos em pedaços menores e autônomos para melhor entendimento (ou era pra ser assim). Na programação não é diferente e para realizarmos essa divisão do problema, uma das soluções são as funções.'
---

## Conceito

Na matemática quando queremos resolver um problema, normalmente o dividimos em pedaços menores e autônomos para melhor entendimento (ou era pra ser assim). Na programação não é diferente e para realizarmos essa divisão do problema, uma das soluções são as funções.

Funções são blocos de comandos específicos que podem ser reutilizados pelo programa. O princípio dessa ferramenta está em encapsular determinada operação, concedendo-lhe um nome para ser invocada ao longo do seu código. Por exemplo, se você precisar de um [algoritmo](https://pt.wikipedia.org/wiki/Algoritmo) que organize uma sequência de números e ache o valor médio dela, será muito mais legível se esse algoritmo for encapsulado em uma função e posteriormente chamado onde e quantas vezes for necessário.

A ideia de função na programação remete um pouco ao conceito de funções na matemática. Temos um nome, uma definição, a invocação da função e, no final de sua execução, um retorno. A principal diferença é que nas funções da programação podemos ter efeitos colaterais que afetarão o código, como imprimir algum valor na tela. Entenda “efeito colateral” como consequência do processamento principal, algo que afeta o ambiente externo.

## Funções na linguagem C

Dada essa introdução sobre funções, vamos entender como elas são aplicadas na prática. Para isso foi escolhida a [linguagem C](https://blog.betrybe.com/linguagem-de-programacao/linguagem-c/). **

Você já deve ter visto algumas funções providas pela linguagem como `printf()`, `scanf()` e várias outras, mas além das predefinidas podemos definir as nossas próprias funções com a sintaxe abaixo:

```c
// Para a nomenclatura de funções, valem as mesmas regras
// que foram definidas para a de variáveis.

[tipo_de_retorno] nome_da_funcao (parametro_1, parametro_2, ...) {
 // código
 return [valor_do_tipo];
}
```

- `[tipo_de_retorno]`: Representa o tipo do retorno da função (`int`, `float`, `char`, etc.).
- `nome_da_funcao`: É o nome que você, pessoa programadora, passa para que ela seja invocada no futuro. Nomes **não** devem conter espaços  e/ou caracteres especiais ou somente palavras reservadas da linguagem.
- Os parênteses que se abrem e fecham `()` após o nome da função são obrigatórios e o conteúdo dentro deles é chamado de parâmetro(s).  **Parâmetros** são variáveis nomeadas na definição da função. Essas variáveis são usadas para importar valores para dentro da função. Os parâmetros `parametro_1` e `parametro_2` representam os valores que a função deve receber e que são necessários para que ela seja invocada.
- As chaves `{}` logo após os parênteses representam o corpo da função e seu escopo (conceito que será visto mais a frente). Aqui serão executados todos os comandos e blocos de processamento necessários da função e, por fim, seu retorno, que deve ser do mesmo tipo da função.

Agora veremos um exemplo básico de função:

```c
// [tipo_de_retorno] nome_da_funcao() {}
int calcula_soma() {
  int soma = 2 + 2;

  return soma;
}
```

<aside>
⚠️ ***ATENÇÃO**:* Você deve ter em mente que o `return` deve ser a última coisa do seu código, pois nada após ele será lido. É como se estivéssemos falando: “A sessão de processamento terminou, agora retorne esse valor”. Então muito cuidado com o lugar do seu retorno.

</aside>

Aqui, vemos uma função `calcula_soma()` com tipo de retorno `int` que calcula 2 + 2 e retorna esse inteiro. Agora, se eu quiser executar esse bloco de código no meu código principal, é só invocar o nome da função `calcula_soma()`.

“E se não quisermos mais calcular 2 + 2 e sim a soma de outros números?”

Simples! É só inserir parâmetros entre os parênteses da função como vimos antes:

```c
int calcula_soma(int n1, int n2) {
  int soma = n1 + n2;

  return soma;
}
```

Agora aceitamos não só dois valores fixos como também qualquer número inteiro.

Para invocar essa função na função main(), basta invocar `calcula_soma()` com dois números separados por vírgula, visto que nossa função aceita somente dois argumentos, exemplificado no código abaixo:

```c
#include <stdio.h>

//código da calcula_soma...

int main()
{
  int soma = calcula_soma(3, 6);

  printf("%d\n", soma); // 9

 return 0;
}
```

<aside>
⚠️ ***ATENÇÃO**:* Como o processo de compilação em C é sequencial, isto é, o compilador lê linha por linha em sequência, funções precisam ser declaradas antes de sua invocação.

</aside>

No exemplo acima, perceba que foram declaradas duas variáveis `soma` em funções diferentes e não houve interferência nenhuma no funcionamento do código. Isso se dá graças aos escopos.

Um **escopo** pode ser interpretado como o contexto atual delimitante de execução onde expressões e variáveis podem ser lidas e chamadas. Em C, usamos o **escopo léxico**, que é delimitado por duas chaves `{}`. Este ainda se divide em escopo global e local. Na função `main`, qualquer variável definida no escopo da função não pode ser acessado do lado de fora dele. O mesmo se aplica à função `calcula_soma` e qualquer outra estrutura que envolva escopos. Já fora das funções, temos o escopo global, onde qualquer função e estrutura tem permissão de acessar. Normalmente só se usa o escopo global para definir variáveis que serão usadas em diversas partes e funções do código. Veja o exemplo abaixo:

```c
#include <stdio.h>
#include <string.h>

//escopo global
const char NOME_DO_USUARIO[] = "Gustavo";

int usuario_multiplica()
{
 // escopo local
 int multi = 5 * 5;

  if (strcmp(NOME_DO_USUARIO, "Gustavo") == 0)
  {
    return multi;
  }
  else
  {
    return 0;
  }
}

int main()
{
  printf("%s diz 'Bom dia!'\n", NOME_DO_USUARIO);
  printf("%s multiplica 5 por 5 e pega %d\n",
    NOME_DO_USUARIO,
    usuario_multiplica()
  );

  return 0;
}
```

### Funções na linguagem C:  O tipo void

Já vimos como as funções funcionam e vocês provavelmente já conhecem os tipos de retorno da função, então já devem saber do tipo `void` e devem estar se perguntando: “Então como eu vou retornar qualquer valor de uma função void?”.

Então… Você não retorna. O void é um tipo que representa o vazio, então nada mais justo que você honrar o significado dele. Um exemplo prático é uma função de imprimir algo no console:

```c
void imprime_ola() {
 printf("Olá Mundo!");
}
```

Você ainda pode, se quiser, inserir um `return;` no final, mas nesse contexto ele não fará a menor diferença.
