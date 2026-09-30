import { Routes } from '@angular/router';
import { Login } from './login/login'
import { Cadastro } from './cadastro/cadastro';
import { EsqueciSenha } from './esqueci-senha/esqueci-senha';
import { Vitrine } from './vitrine/vitrine';
import { Cesta } from './cesta/cesta';
import { Detalhe } from './detalhe/detalhe';

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
    },
    {
        path: 'vitrine',
        component: Vitrine
    },
    {
        path: '',
        component: Vitrine
    },
    {
        path:'cesta',
        component: Cesta
    },
    
    {
        path: 'detalhe',
        component: Detalhe
    }
];