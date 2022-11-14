---
title: 'Como Começar a Aprender Vetores?'
coverImage: '/assets/array/bg-array-post.png'
tag: 'Ciência da Computação'
date: "09/28/2022"
author:
  - name: 'Gustavo Soares'
  - image: '/assets/perfil-github-1.png'
---

## Conceito

Um vetor é uma [estrutura de dados](https://www.alura.com.br/artigos/estruturas-de-dados-introducao) indexada e contínua na memória que armazena valores do mesmo tipo. Digitando em português compreensível, um vetor é uma lista sequencial de valores de mesmo tipo (inteiro, real, etc.) com a ordem que você definir (ordem de inserção dos elementos), quantidade de valores fixa e organizado por índices, ou seja, cada elemento é associado por um número que representa sua posição na lista.  Cada elemento de um vetor pode ser acessado pelo nome instanciado a ele + o índice do elemento.

## Vetores em C

Na linguagem C, vetores são chamados de **arrays** e possuem tamanho fixo. Arrays são variáveis como qualquer outra e podem ser criados usando a seguinte sintaxe:

```c
<tipo> nome_do_vetor[tamanho];
```

Quando você não inicializa um vetor cujo tipo é um número (`int`, `float`, etc.),  todas as posições dele são ocupadas pelo valor 0, pois quando você cria a variável `nome_do_vetor`, seu programa já se prepara e reserva esses `n` espaços para receber seu vetor. Para inicializar um vetor, atribua a ele um par de chaves com a ordem dos valores que você quiser e os valores que você quiser, contanto que atinja o tamanho proposto.

```c
// array de 4 floats inicializado
float quebrados[4] = {1.4, 5.7, 2.1, 7.4};
```

Na matemática a contagem dos naturais se inicia no 0. Na programação não é diferente e, portanto, começamos a contar os elementos de um vetor a partir do 0. Isto é, em um vetor `numeros` de 5 inteiros, o primeiro número deverá ser chamado por `numeros[0]`. Mas se a contagem dos índices de um vetor começa no 0, qual será a última posição?

Para isso temos o mesmo vetor `numeros` de 5 inteiros, onde sua contagem começa no 0. Para **todo** vetor, seu último elemento sempre será seu tamanho  - 1. Portanto, para acessar o último inteiro de `numeros`, devemos escrever `numeros[4]`. Veja o exemplo a seguir:

```c
#include <stdio.h>

int main()
{
  int numeros[5] = {21, 40, 7, 12, 33};

  printf("%d\n", numeros[0]);
  printf("%d\n", numeros[4]);

  return 0;
}
```

## Vetores em C: Percorrendo um vetor

Imagine que você tem um primo, Fulaninho, que é horrível em matemática e que precisa saber se passou de semestre ou não. Sabendo que você está aprendendo programação, Fulaninho pediu para que você calcule todas as 6 notas dele e faça uma média.

Agora que você tomou conhecimento dos arrays, fica muito mais fácil realizar essa operação. Mas ainda assim resta uma dúvida: Como você acessará todas as posições do array sem ter que chamá-las uma por uma? Porque se tivermos que fazer isso, será o mesmo que criar uma variável para cada nota, somar todas e depois calcular a média (desconsiderando memória, é claro).

Sabemos que precisamos somar 6 notas. Também sabemos que a soma de todas as notas é um processo repetitivo. Portanto, você assume como solução usar uma estrutura de repetição para somar todas as notas.

Como você já tem o tamanho do array,  é só criar um loop de 0 a 6 - 1, que é a posição do último elemento. Observe o código abaixo:

```c
double notas[6] = {4.5, 6.5, 4.0, 5.0, 7.0, 5.5};
double soma_notas;

for (int i = 0; i <= 5; i++) {
 soma_notas = soma_notas + notas[i];
}
```

E agora você tem a soma das notas armazenada na variável `soma_notas`. Só falta calcular a média. Para isso você cria mais uma variável para armazenar o resultado da média.

```c
double media = soma_notas / 6;

printf("a media de fulaninho eh: %.2f\n", media);
// imprimirá "a media de fulaninho eh: 5.42".
```

Pronto! Bom, Fulaninho não ficou muito feliz com a nota, mas isso não é mais problema seu e você ainda aprendeu a percorrer um array usando `for loop`.

A imagem abaixo mostra a representação do array `notas` sendo armazenado contiguamente na memória.

![aula-panelinha-vec.svg](/assets/array/memory-representation.svg)

## Vetores em C: Vetores como Parâmetros

Vetores podem ser passados como parâmetros como qualquer outra variável, mas diferentemente de sua inicialização, seu tamanho só é especificado na sua invocação. Observe a função `imprime_vetor` abaixo:

```c
#include <stdio.h>

void imprime_vetor(int array[], int tamanho)
{
  for (int i = 0; i < tamanho; i++)
  {
    printf("%d ", array[i]);
  }
}

int main() {
 int inteiros[4] = {1, 2, 3, 4};

  imprime_vetor(inteiros, 4); // 1 2 3 4
}
```

Nela, temos como parâmetro um vetor `array[]` sem nenhum tamanho definido, o que nos permite passar um array com tamanho aleatório. Contanto que especifiquemos o tamanho no segundo parâmetro `tamanho`, a função executará normalmente.
