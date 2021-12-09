drop database if exists servicos;
create database servicos charset = UTF8 collate utf8_general_ci;

use servicos;

create table prestadores(
id_servico integer PRIMARY key not null auto_increment,
prestador varchar(256) not null,
valor_hora float (9,2) not null,
horas_trab float(6,2) not null
);

insert into prestadores VALUES
(1, 'Sula Medonca', 35.0 , 75.0);
(2, 'Mariana Silva', 24.0 , 100.0);
(3, 'Junior Junqueira', 15.50 , 125.0);

select * from prestadores;
