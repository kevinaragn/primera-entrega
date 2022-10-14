import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

@Output () addUsuario: EventEmitter<any> = new EventEmitter<any>();

  formulario= this.formBuilder.group({
    nombre: ['', [Validators.required ]],
    apellido: ['', [Validators.required]],
    edad : ['', [Validators.required, Validators.min(21), this.ValidarEdad()]],
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submitForm():void {
    console.log(this.formulario.value);
    this.addUsuario.emit(this.formulario.value);
  } 

ValidarEdad(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } |null => { 
    return (Number.isInteger(parseInt(control.value))) ?  { errorEdad: true} :null ;
  }
}
}
