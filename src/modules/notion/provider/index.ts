import { container } from 'tsyringe';
import { BCryptHashProvider } from './implementations/BCryptHashProvider';
import { IHashProvider } from './models';
;

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);

