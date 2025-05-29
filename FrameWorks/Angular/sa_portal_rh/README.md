TERMINAL

npx ng new sa_portal_rh --routing --style=scss

npx ng g c template/header
npx ng g c template/footers
npx ng add @ng-bootstrap/ng-bootstrap

CODIGO 
src 
app
template
header
header.component.scss
	ESCREVE DENTRO 
header.component.scss
	ESCREVE DENTRO  CSS

app.component.html
	APAGA E ESCREVE DENTRO 
TERMINAL E COLOCO PARA RODAR 
  npm start

footers
footers.component.html
	ESCREVE DENTRO
footer.component.scss
	ESCREVE DENTRO CSS

VOLTA NO 
footers.component.html

NOVO TERMINAL
ENTRA NAS PAGINAS E ESCREVE 
npx ng g c view/inicio
 npx ng g c view/currículos
npx ng g c view/vagas 

CODIGO

ESTA EM BAOXO DO
view
app-routing.module.ts
	ESCREVE DENTRO OS IMPORT

ENTRA NO 
view
inicio
inicio.component.html
	ESCREVE DENTRO
inicio.component.scss
	ESCREVE DENTRO

TERMINAL
 mkdir src/app/models
 type nul > src/app/models/vaga.model.ts
 type nul > src/app/models/curriculo.model.ts
NESSE COMANDO VAI DAR ERRO MAIS VAI FUNCIONAR 

EM BAIXO DO 
app
VAI CRIAS 
models
vaga.model.ts
	ESCREVE DENTRO 
TERMINAL
 npx ng g s services/vagas
CODIGO
services
vagas.service.ts

NA LATERAL CRIA UMA PASTA 
backend
TERMINAL 
  type nul > backend/db.json
VAI DAR ERRO 
backend
db.json
	ESCREVE DENTRO COPIA O DO PROFESOR E COLA 
TERMINAL INSTALA 
Thunder Client NA PESQUISA 
TERMINAL
 npm install -g json-server
 PORTA MINHA 
 npx json-server --watch backend/db.json --port 3010 

VAI NO RAIO E COLOCA POST
http://localhost:3010/vagas
ESCREVE DENTRO 
	
servisse
vagas.service.ts
 	ESCREVE DENTRO 
vagas
vagas.component.html
	ESCREVE DENTRO 

vagas.component.ts
	ESCREVE DENTRO 
VAI NO 
app.module.ts
	ESCREVE UMA LINHA PARA DAR CERTO
vagas
vagas.component.scss 
	ESCREVE DENTRO 

TERMINAL 
 mkdir src/assets/img

COLOCAR UMA IMAGEM NAO PEGEI 

VOLTA PRO 
services
vagas.service.ts
	ESCREVE DENTRO 

 TERMINAL
npx ng g c view/painel-vagas

models
vaga.model.ts
	ESCREVE DENTRO 

painel-vagas
painel-vagas.component.ts
	ESCREVE DENTRO 

	 TERMINAL
	   npx json-server --watch backend/db.json --port 3010       

	RESUMO 
			models 
			vaga.model.ts = deixa tudo publico
			services
			vagas.service.ts
			view
			vagas
			vagas.component.ts
			painel-vagas
			painel-vagas.component.html
			 	ESCREVE DENTRO 

	TERMINAL
		abre um novo 
		npm start 
	vai no link gerado e segura e netra 
	esse roda a pagina 

			vagas.component.ts
			painel-vagas
				ESCREVE DENTRO
			painel-vagas
			painel-vagas.component.html
			 	ESCREVE DENTRO

			app.module.ts
			ESCREVE DENTRO 	UMA LINHA
			app-routing.module.ts
			ESCREVE DENTRO 	UMA LINHA

			painel-vagas
			painel-vagas.component.scss
			ESCREVE DENTRO



EXERCICIO:

	













"monquentape" para escrever mais rapodo 

