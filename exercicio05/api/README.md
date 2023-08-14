# Passo a passo para rodar a api

## Arquitetura

eu utilizei a arquitetura DDD, repare que separei as regras de negocio em services, o banco de dados dentro de infra, separei a parte de routes em http, tambem usei Injeção de dependência nos repositorios.

Na pasta shared esta as migrations, routes, classe de erro e a Injeção de dependência dos repositorios.

eu fiz com postgres usando o typeorm, voce pode rodar o postgres usando docker, abaixo vou deixar um comando para rodar o docker ja na porta certa e com a senha correta.

```sh
sudo docker run --name test_postgres_container -e POSTGRES_PASSWORD=docker -p 5431:5432 -d postgres
```

depois disso vai ser necessario rodar as migrations

```sh
npm run typeorm -- -d ./src/shared/infra/typeorm/data-source.ts migration:run
```

OBS: estava com pouco tempo ai tive que fazer meio que correndo para terminar, tem varios pontos que da para melhorar :)
