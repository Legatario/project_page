import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginModel } from '../../../models/loginModel';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  msgError: string = '';

  constructor(private formBuilder : FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }




  submitLogin(){
    const dados = this.loginForm.getRawValue() as LoginModel;


    const listUser = JSON.parse(localStorage.getItem('listUser') || '[]');

    // Verificar se existe um usuário com o email e senha fornecidos
    const usuarioValido = listUser.find((usuario: any) => {
      return usuario.emailCad == dados.email && usuario.passwordCad == dados.password;
    });

    if (usuarioValido) {
      const userLogado = {
        nome: usuarioValido.nomeCad,
        token: 'ajsausalzhdkla158'
    };

    const jsonString = JSON.stringify(userLogado);

    localStorage.setItem('UserLogado', jsonString);

      this.router.navigate(['/home']);
    } else {
      this.msgError = 'Por favor, verifique o email e a senha';
    }

  }
}
