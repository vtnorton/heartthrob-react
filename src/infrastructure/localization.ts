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
    },
    pt: {
      return: 'Voltar',
      create: 'Criar',
      delete: 'Apagar',
      save: 'Salvar',
      edit: 'Editar',
      clean: 'Limpar',
    },
  },
  {
    pseudo: false,
  },
)

export default strings
