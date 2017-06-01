/**
 * @licence
 * Copyright 2016 Monte sua Viagem. All Rights Reserved.
 */

module.exports = {
  any: {
    unknown: '!!Não permitido',
    invalid: '!!Tipo de dado inválido (ex: preencher um campo com números quando se esperava um texto)',
    empty: '!!Campo obrigatório não preenchido',
    required: '!!Campo obrigatório ausente'
  },
  date: {
    base: '!!Formato de data inválido',
    isoDate: '!!Formato de data inválido (Permitido apenas ISO8601)',
    min: '!!Data deve ser maior ou igual a {{limit}}',
    max: '!!Data deve ser manor ou igual a {{limit}}'
  },
  object: {
    allowUnknown: '!!Campo não permitido'
  },
  number: {
    base: '!!Tipo de dado inválido (Permitido apenas números)',
    min: '!!Deve ser maior ou igual a {{limit}}',
    max: '!!Deve ser menor ou igual a {{limit}}',
    float: '!!Formato de número inválido (Permitido apenas decimais)',
    integer: '!!Formato de número inválido (Permitido apenas inteiros)',
    negative: '!!Formato de número inválido (Permitido apenas negativos)',
    positive: '!!Formato de número inválido (Permitido apenas positivos)'
  },
  string: {
    base: '!!Tipo de dado inválido (Permitido apenas texto)',
    min: '!!Deve ser menor ou iguals a {{limit}} caracteres',
    max: '!!Deve ser maior ou iguals a {{limit}} caracteres',
    regex: {
      base: '!!Tipo de dados inválido'
    },
    isoDate: '!!Formato de data inválido (Permitido apenas ISO8601)'
  }
};
