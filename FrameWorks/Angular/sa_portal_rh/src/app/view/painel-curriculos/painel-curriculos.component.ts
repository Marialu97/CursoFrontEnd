import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculosComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo( "", '', '', 0, '', '', '', '', '', ''); // rastrear os dados no formulário por interpolação

  public curriculos: Curriculo[] = [];
  // armazenar os dados do API -json

  constructor(private _curriculosService: CurriculosService) {} // aplicando o service no Construtor

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    // Lista os currículos do servidor usando o serviço 'CurriculosService'
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        // Mapeia os dados retornados para objetos 'Curriculo'
        return new Curriculo(
              item.id,
              item.nome,
              item.email,
              item.idade,
              item.endereco,
              item.formacao,
              item.telefone,
              item.habilidades,
              item.portfolio,
              item.foto
        );
      });
    });
  }

  // Listar unico Currículo 
  listarCurriculoUnico(curriculo: Curriculo) {
    // Função para listar currículo para edição no formulário 
    this.curriculo = curriculo;
    // O currículo criado é mostrado no formulário
  }

  // cadastrar Currículo 
  cadastrar() {

    if (
    !this.curriculo.id ||
    !this.curriculo.nome ||
    !this.curriculo.email ||
    !this.curriculo.idade ||
    !this.curriculo.endereco ||
    !this.curriculo.formacao ||
    !this.curriculo.telefone ||
    !this.curriculo.habilidades ||
    !this.curriculo.portfolio ||
    !this.curriculo.foto
  ) {
    alert('Por favor, preencha todos os campos antes de cadastrar!');
    return;
  }

    this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo( "", '', '', 0, '', '', '', '', '', ''); // limpar os campos do formulário
        this.listarCurriculos();
        alert('Currículo Cadastrado com Sucesso');
      },
      (err) => {
        console.error('Exception:', err);
      }
    );
  }

  handleFileInput(event: any) {
  const file = event.target.files[0];
  if (file) {
    this.curriculo.foto = file.name; // ou você pode armazenar o próprio `file`
  }
}

  // atualizar Currículos 
  atualizar(id: any) {
    this._curriculosService.atualizarCurriculo(id,this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo( "", "", "", 0, "", "", "", "", "", "");
        this.listarCurriculos();
        alert('Currículo Atualizado com Sucesso!!!');
      },
      (err) => {
        console.error('Exception:', err);
      }
    );
  }

  // deletar Currículos
  excluir(id: any) {
    this._curriculosService.removerCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo( "", "", "", 0, "", "", "", "", "", "");
        this.listarCurriculos();
        alert('Currículo Deletado com Sucesso!!!');
      }, (err) => {
        console.error('Exception:', err);
      }
    );
  }
}
