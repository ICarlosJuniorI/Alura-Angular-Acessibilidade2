import { animate, style, transition, trigger } from '@angular/animations';

export const fade = trigger(                 // Usa o trigger pra criar a transição
  'fade',                                    // Nome da animação
  [                                          // Array com as transições
    transition(
      ':enter',                              // Passa se a transição é quando está entrando ou saindo do DOM
      [
        style({ opacity: 0 }),               // Valor inicial, antes de entrar no DOM considera o opacity 0
        animate(100, style({ opacity: 1 })) // Ao entrar no DOM faz a animação de 1s até chegar no opacity
      ]
    ),
    transition(
      ':leave',                              // Passa se a transição é quando está entrando ou saindo do DOM
      [
        animate(100, style({ opacity: 0 })) // Ao entrar no DOM faz a animação de 1s até chegar no opacity
      ]
    )
  ]
);
