import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginModel } from '../../../models/loginModel';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  msgError: string = '';
  msgSuccess: string = '';

  constructor(private formbuilder : FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.registerForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  submitRegister() {
    if (this.registerForm.valid) {
      const dados = this.registerForm.getRawValue() as LoginModel;


      const listUserString = localStorage.getItem('listUser');
      const listUser = listUserString ? JSON.parse(listUserString) : [];

      // Verifique se o usuário já está cadastrado
      const usuarioExistente = listUser.find((user: any) => user.emailCad === dados.email);
      if (usuarioExistente) {
        this.msgError = 'Usuário ja cadastrado'
        return;
      }

      // Adicione o novo usuário à lista de usuários
      listUser.push({
        nomeCad: dados.name,
        emailCad: dados.email,
        passwordCad: dados.password
      });

      // Salve a lista atualizada no localStorage
      localStorage.setItem('listUser', JSON.stringify(listUser));

      this.registerForm.reset();
      this.msgError = '';
      this.msgSuccess = 'Usuário Cadastrado';

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2500);

    }
  }

}
