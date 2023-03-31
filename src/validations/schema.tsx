import * as Yup from 'yup';

let patternTwoDigisAfterComma = /^\d+(\.\d{0,2})?$/;

export default Yup.object({
  title: Yup.string()
    .min(3, "O campo deve ter no mínimo 3 caracteres")
    .max(100, "O campo deve ter no máximo 100 caracteres")
    .required("Campo obrigatório"),
  description: Yup.string().required("Campo obrigatório"),
  sizes: Yup.string().required("Campo obrigatório"),
  weight: Yup.number().required("Campo obrigatório"),
  cod: Yup.number().min(10000, "O campo deve ter no mínimo 5 caracteres").required("Campo obrigatório"),
  category: Yup.string().required().typeError("Campo obrigatório"),
  price: Yup.number().positive("O valor deve ser positivo.")
    .test(
      "is-decimal",
      "O valor deve ser um decimal com no máximo dois dígitos após a vírgula",
      (val: any) => {
        if (val != undefined) {
          return patternTwoDigisAfterComma.test(val);
        }
        return true;
      }
    )
    .required("Campo obrigatório"),
  acquisition: Yup.date()
    .max(new Date(), "Não é possível incluir uma data futura")
    .required().typeError("Campo obrigatório"),
  src: Yup.string()
    .matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'A URL não está correta.')
    .required("Campo obrigatório"),
});