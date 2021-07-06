import LocalizedStrings from 'localized-strings'

const strings = new LocalizedStrings(
  {
    en: {
      return: 'Return',
      create: 'Create',
      delete: 'Delete',
      save: 'Save',
      edit: 'Edit',
      clean: 'Clean',
      notInformed: 'Not informed.',
      password: 'Password',
      passwordConfirm: 'Confirm password',
      passwordMinLenght: 'Your password must have at least 8 characters.',
      passwordHaveUppercase: 'Your password must have at least on uppercase letter.',
      passwordHaveLowercase: 'Your password must have at least on lowercase letter.',
      passwordHaveNumber: 'Your password must have at least one number.',
      passwordHaveSpecialChar: 'Your password must have at least on special character.',
      passwordStrong: 'You have a strong password.',
      passwordMustMatch: 'You must type the password twice to check if it matchs.',
      passwordIsDifferente: 'Your password does not match, please, try typing it again.',
      passwordAreEqual: 'Your passwords match.',
    },
    pt: {
      return: 'Voltar',
      create: 'Criar',
      delete: 'Apagar',
      save: 'Salvar',
      edit: 'Editar',
      clean: 'Limpar',
      notInformed: 'Não informado.',
      password: 'Senha',
      passwordConfirm: 'Confirmar senha',
      passwordMinLenght: 'A senha necessita ter pelo menos 8 caracteres.',
      passwordHaveUppercase: 'A senha precisa conter ao menos uma letra em maiúsculo.',
      passwordHaveLowercase: 'A senha precisa conter ao menos uma letra em minúsculo.',
      passwordHaveNumber: 'A senha precisa conter ao menos um número.',
      passwordHaveSpecialChar: 'A senha precisa conter ao menos um caracter especial.',
      passwordStrong: 'Sua senha está forte.',
      passwordMustMatch: 'Você ainda não digitou a senha para confirmar ela.',
      passwordIsDifferente: 'As senhas estão diferentes, por favor, tente novamente.',
      passwordAreEqual: 'As senhas estão iguais.'
    },
  },
  {
    pseudo: false,
  },
)

export default strings
