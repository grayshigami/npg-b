import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { IncidenciasModule } from './incidencias/incidencias.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/entities/usuario.entity';
import { Incidencia } from './incidencias/entities/incidencia.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'agray',
      password: 'abcdef',
      database: 'NPGIncidencias',
      entities: [Usuario, Incidencia],
      synchronize: true,
      options: {
        enableArithAbort: true,
        trustServerCertificate: true
      }
    }),
    UsuariosModule, IncidenciasModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
