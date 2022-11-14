---
title: 'Introdução a strings e aplicações em C'
coverImage: '/assets/strings/bg-post-strings-intro.png'
tag: 'Ciência da Computação'
date: '11/14/2022'
author:
  - name: 'Gustavo Soares'
  - image: '/assets/perfil-github-1.png'
---

Recomendo a leitura de [Como Começar a Aprender Vetores?](https://colatech.vercel.app/post/como-aprender-vetores) antes de ler esse post.

## Conceito

Na teoria, strings seriam como frases; elas representam uma sequência de caracteres presentes em um alfabeto. Mas afinal, o que é um alfabeto? Quero ver responder essa!

Entenda alfabeto como um conjunto finito ou infinito de caracteres que podem conter os mais variados elementos. Uma palavra desse alfabeto pode ser qualquer sequência finita de elementos  $x$ de modo que $x$ esteja presente no alfabeto. Dito isso voltemos ao contexto de computação, que é o que nos interessa.

No universo da programação temos tipos primitivos que dão forma aos dados do nosso programa e um deles é o tipo char. Esse tipo representa um único caractere de um determinado conjunto de elementos, seja esse ASCII, Unicode ou qualquer outro. Strings são nada mais que cadeias de caracteres `char` com um delimitador no final, que representa o fim de uma string. Usemos a linguagem C para demonstrar os conceitos acima:

```c
// Criação de um char letra que representa o caractere "a"
char letra = 'a';

// criação da string palavra de várias formas diferentes
char palavra[] = "Gustavo";
char palavra[8] = "Gustavo";
char palavra[8] = {'G', 'u', 's', 't', 'a', 'v', 'o'};
```

Observe que declaramos a string `palavra` com a notação `[]` que representa um vetor. De fato, strings são  vetores compostos de `char`, ou seja, uma cadeia de caracteres.

Todas as declarações acima estão corretas em C. Mas por que tamanho 8 se a string “Gustavo“ só tem 7 caracteres? Na linguagem C o último caractere de uma string é um delimitador `\0` indicando que aquela sequência de caracteres chegou ao fim.

Na verdade, nossa string `"Gustavo"` é `"Gustavo\0"`. Perceba que se colocarmos o tamanho da variável como 7 e imprimir no console, as duas strings serão impressas, pois um delimitador `\0` foi omitido.

```c
char nome[7] = "Gustavo";
char outroNome[9] = "Guilherme";

printf("%s", nome);
// OUTPUT: GustavoGuilherme
```

Delimitar uma string não é uma tarefa fácil e por isso cada linguagem a faz de um jeito. C, por exemplo, usa o delimitador `\0`, mas Pascal armazena o tamanho da string separadamente. Não existe somente uma forma de resolver determinado problema, mas existem formas mais eficientes que outras.

## Strings em C

Infelizmente C não dispõe de muitas funções nativas para manipulação de strings, mas não criemos pânico! Temos uma biblioteca maravilhosa para isso chamada `string.h`. Vamos realizar uma comparação de strings usando a função `strcmp` dessa biblioteca.

```c
#include <string.h>

int main()
{
  char palavra[] = "Gustavo";
  char nome[8] = {'G', 'u', 's', 't', 'a', 'v', 'o'};

  if (strcmp(palavra, nome) == 0)
  {
    puts("Verdade, as strings sao iguais");
  }
  else
  {
    puts("Opa, elas sao diferentes");
  }
 // retornará "Verdade, as strings são iguais".

  return 0;
}
```

A função `strcmp` compara duas strings caractere por caractere e nos retorna verdadeiro se forem iguais e falso se forem diferentes. Como C não possui tipo booleano, a função retorna 0 e 1, respectivamente.

<aside>
⚠️ ***ATENÇÃO***: strings escritas char por char como na variável `nome` devem **SEMPRE** usar aspas simples como identificação de caractere único.

</aside>

## Strings em C: Strings como Parâmetro

Como strings são arrays de um tipo em C, elas se comportam da mesma forma que arrays em parâmetros. Veja o exemplo abaixo onde retornamos o tamanho de uma string:

```c
#include <stdio.h>
#include <string.h>

int tamanho_string(char string[])
{
  return strlen(string);
}

int main()
{
  printf("%d", tamanho_string("Gustavo")); // 7
  return 0;
}
```

A utilização de Strings se tornou primordial na programação, mas como qualquer outra ferramenta deve ser usada com sabedoria. O protocolo [HTTPS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview), que comanda a internet, usa strings como parte de sua comunicação. Existem infinitas possibilidades para o seu uso e cabe a você, pessoa programadora,  descobrir esse universo.
