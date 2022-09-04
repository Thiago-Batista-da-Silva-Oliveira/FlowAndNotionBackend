import { AppError } from '@shared/utils/AppError';


type Props = {
  password?: string;
};
const validValues = [
  {
    field: 'password',
    minLength: 6,
    maxLength: 15,
    msgMin: 'Senha deve ter no mínimo 6 caracteres',
    msgMax: 'Senha deve ter máximo 15 caracteres',
  },
 
];

export function Validation({
  password,
}: Props) {
  const props = [
    { field: 'password', value: password },
  ];
  const propsWithNoEmptyValues = props.filter(info => info.value !== undefined);

  for (let i = 0; i < propsWithNoEmptyValues.length; i++) {
    for (let u = 0; u < validValues.length; u++) {
      if (propsWithNoEmptyValues[i].field === validValues[u].field) {
        if (propsWithNoEmptyValues[i].value.length < validValues[u].minLength) {
          throw new AppError(validValues[u].msgMin, 400);
        }
        if (propsWithNoEmptyValues[i].value.length > validValues[u].maxLength) {
          throw new AppError(validValues[u].msgMax, 400);
        }
      }
    }
  }
}