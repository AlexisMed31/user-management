import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id_usuario: number;

  @Column()
  public usuario: string;

  @Column()
  public contrasena: string;

  @Column()
  public correo: string;

  @Column()
  public fecha_creacion: Date;

  @Column()
  public rol: string;
}

export default User;
