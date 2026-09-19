import { Routes } from '@angular/router';
import { Login } from './login/login'
import { Cadastro } from './cadastro/cadastro';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'cadastro',
        component: Cadastro
    },
    {
        path: 'esqueci-senha',
        component: EsqueciSenha
    }
];
