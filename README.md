# Inventário Oficina Comunitária — Prévia Demonstrativa

Protótipo navegável criado no Estúdio LOFRANO. Demonstra telas e critérios de aceite; **não é o sistema completo nem uma entrega de produção**.

Prévia fictícia revisada pela qualidade para equipe interna da oficina: consultar catálogo sintético com 8 ferramentas exemplo, simular retirada com etiqueta anônima F01/F02 e confirmar devolução com atualização visual do estoque. Tudo simulado no navegador, sem backend nem dados pessoais, com status bem visível e navegação por teclado no celular e computador. Dados e ações são demonstração.

## Executar localmente

Requer somente Python 3 para servir arquivos estáticos:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Abra http://127.0.0.1:8080. Não há instalação de pacotes nem chamadas de rede pelo protótipo. Campos e botões são demonstrações; não salvam nem enviam dados.

## Escopo

- Catálogo sintético com busca
  - Buscar por furadeira fictícia filtra a lista para itens correspondentes
  - Limpar busca volta a mostrar os 8 itens fictícios
  - Busca sem resultado mostra estado vazio Nenhum item fictício encontrado
- Filtro de disponibilidade bem visível
  - Selecionar Disponíveis mostra só selos verdes Disponível
  - Selecionar Emprestadas mostra só selos laranjas com F01/F02
- Registro de retirada por etiqueta anônima
  - Só confirma retirada com F01 ou F02 selecionada
  - Sem etiqueta mantém status e mostra erro acessível por texto
  - Após confirmar ferramenta fica Emprestada para etiqueta escolhida
- Confirmação de devolução com atualização visual
  - Confirmar devolução muda status para Disponível na hora
  - Contadores de disponíveis e emprestados atualizam após devolução
- Acessível no celular, desktop e teclado
  - Fluxo completo percorrível por Tab Enter e Escape com foco visível
  - Layout legível em celular estreito e desktop sem sobreposição
  - Status informado por texto além da cor e campos com rótulos

## Limitações

- Prévia 100% demonstrativa: nomes códigos e etiquetas F01/F02 fictícios e sintéticos.
- Ações simuladas só no navegador: recarregar ou Reiniciar restaura estado inicial sem banco real.
- Fora de escopo: autenticação pagamentos dados pessoais integrações externas e estoque real.
- Verificação de qualidade por inspeção de conteúdo: sem backend sem testes executados em navegador.
- Fluxo central pendente de teste real: navegação por teclado e adaptação celular e desktop a confirmar na renderização.

Autenticação, banco de dados, integrações, segurança de servidor, acessibilidade completa e validação com usuários precisam de implementação e revisão próprias. Nenhum histórico de conversa, contato ou credencial faz parte deste repositório.

Licença MIT.
