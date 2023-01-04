---
title: 'A Repetição das Funções Recursivas em Minutos'
coverImage: '/assets/recursive/bg-post-recursivity.png'
tag: 'Ciência da Computação'
date: '09/30/2022'
author:
  - name: 'Gustavo Soares'
  - image: '/assets/perfil-github-1.png'
intro: "De forma rasa e informal, a recursão na programação pode ser considerada como a repetição de um processo e, portanto, pode ser definida como um processo que chama a si mesmo direta ou indiretamente até que alcance uma condição de término. Mas como que esse processo se repete? É um laço de iteração?"
---

## Conceito

De forma rasa e informal, a recursão na programação pode ser considerada como a repetição de um processo e, portanto, pode ser definida como um processo que chama a si mesmo direta ou indiretamente até que alcance uma condição de término. Mas como que esse processo se repete? É um laço de iteração?

A recursão se aplica diretamente a funções, pois é o único bloco de processamento que pode chamar a si mesmo durante sua execução. Uma função recursiva em sua integridade aplica um algoritmo de [Divisão e Conquista](https://pt.wikipedia.org/wiki/Divis%C3%A3o_e_conquista), que consiste em dividir de forma recursiva um problema grande em problemas menores até que o problema seja resolvido. Ou seja, a função sempre vai retornar ela mesma com uma versão mais simples do problema até chegar na solução.

## A Visão Matemática da Coisa

Consideremos que você, pessoa programadora, tem que determinar a soma dos _n_ primeiros números naturais. Existem diversas maneiras de fazer isso, mas a mais simples é sair somando os números de 1 até _n_, parecendo com isso:

$$
\operatorname{f}\lparen\relax{n}\rparen = 1+2+3+4+...+n
$$

Imagina se _n_ for um número na casa dos milhares. Bastante trabalhoso, né? Nesse caso temos a opção recursiva para resolver esse problema. Veja a seguir:

$$
\operatorname{f}\lparen\relax{n}\rparen=\begin{cases}
   \operatorname{f}\lparen\relax{n}\rparen=1 &\text{ se } n=1 \\
   n + \operatorname{f}\lparen\relax{n-1}\rparen &\text{ se } n>1
\end{cases}
$$

A única diferença entre os dois métodos é que a função _f(n)_ está sendo chamada dentro de sua própria função, estabelecendo uma condição de recursão.

## Recursividade na Prática

Ainda ficou confuso? Olhe essa comparação de um código com `for loop` e o mesmo exemplo implementando a recursão.

```c
#include <stdio.h>

int main()
{
  for (int i = 5; i >= 0; i--)
  {
    if (i == 0)
    {
      printf("Decolar!\n");
    }
    else
    {
      printf("%d\n", i);
    }
  }

  return 0;
}
```

No caso acima, criamos uma contagem regressiva para a decolagem de um foguete com o `for` e um laço condicional para caso a contagem chegue a 0. Agora veja esse mesmo caso com outros olhos.

```c
#include <stdio.h>

void sequencia_decolar(int i)
{
  if (i == 0)
  {
    printf("Decolar!!!\n");
    return;
  }

  printf("%d\n", i);
  return sequencia_decolar(i - 1);
}
```

Onde a variável local `contagem` representa de onde a contagem deve começar.

No exemplo recursivo vimos que o retorno `sequencia_decolar(contagem - 1)` é o mesmo problema, porém simplificado, o que caminha para uma pilha de funções onde a anterior, mais complexa, não será resolvida até que a próxima, mais simples, seja. Por exemplo, se a variável `contagem` for 5, teremos esse comportamento:

```text
## Invocação da função sequencia_decolar(5);

5 é igual a 0? Não.
Então imprima "5" no terminal e retorne sequencia_decolar(5 - 1);

4 é igual a 0? Não.
Então imprima "4" no terminal e retorne sequencia_decolar(4 - 1);

3 é igual a 0? Não.
Então imprima "3" no terminal e retorne sequencia_decolar(3 - 1);

2 é igual a 0? Não.
Então imprima "2" no terminal e retorne sequencia_decolar(2 - 1);

1 é igual a 0? Não.
Então imprima "1" no terminal e retorne sequencia_decolar(1 - 1);

0 é igual a 0? Sim.
Então imprima "Decolar!!!" e retorne vazio;
```

## Tipos de Recursão

Entendemos como a recursão funciona, agora entenderemos onde cada tipo de recursão se encaixa.

Como mencionado anteriormente, a recursividade pode aparecer direta ou indiretamente:

- **Forma direta**: É formada pela mesma estrutura de comandos e uma chamada a si mesma durante seu bloco de execução.
- **Forma indireta**: Nesse caso podem existir  **n**  funções e todas dependem de todas, gerando uma cadeia de dependências até que a condição de término seja atingida. Veja o exemplo abaixo:

```c
#include <stdio.h>

int numero = 1;

void par();
void impar();

void par()
{
  // condição de término
  if (numero <= 10)
  {
    printf(" %d ", numero + 1);
    numero++;

    // recursividade indireta
    impar();
  }

  return;
}

void impar()
{
  // condição de término
  if (numero <= 10)
  {
    printf(" %d ", numero - 1);
    numero++;

    // recursividade indireta
    par();
  }

  return;
}

int main()
{
  par(); // 2 1 4 3 6 5 8 7 10 9
  return 0;
}
```

No código acima temos duas funções desconsiderando a função principal: `par()`, que só imprime números pares e `impar()`, que só imprime números ímpares, cada uma intrinsecamente ligada por uma cadeia de chamadas até a condição ser atingida.

## Memória na Recursividade

Sabemos que a recursividade aumenta bastante a legibilidade do nosso código, mas nem tudo é um mar de rosas, principalmente quando se trata de memória na recursão. Como será que funciona a recursividade por debaixo dos panos?

Veja o trecho de código abaixo que implementa a multiplicação por recursividade:

```c
int multiplica_recursivo(int vezes, int valor)
{
  if (vezes == 0 || valor == 0) // condição de existência
  {
    return 0;
  }
  else if (vezes == 1) // condição de término
  {
    return valor;
  }
  else
  {
    return valor + multiplica_recursivo(vezes - 1, valor);
  }
}
```

O código apresenta um caso de recursão direta, o qual determina que enquanto `a` for diferente de 1, a função será chamada subtraindo o parâmetro `vezes` por 1.

A cada chamada que não atinge a condição de término, empilhamos uma chamada mais simples na pilha. Quando a condição de término é atingida, as funções são executadas uma por uma, da última empilhada até a primeira, até que não haja mais função a ser executada.

## Conclusão

Quando comparadas com laços de iteração, funções recursivas consomem mais memória que laços, visto que cada chamada à função consome mais memória na [_stack_](https://blog.pantuza.com/artigos/heap-vs-stack)  e um loop não requer espaço extra. Dito isso, pense bem antes de aplicar recursividade no seu projeto, principalmente se desempenho for um fator crucial.

Alguns pontos a serem ressaltados ao comparar as duas situações são:

- Iterações terminam quando uma condição se torna falha. As recursões, quando se chega no caso mais básico;
- Iterações não alocam espaços extras na stack;
- Recursões fornecem maior legibilidade ao código. Uma vez que se compreende o processo, fica fácil proceder;
  