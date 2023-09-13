// Arquivo e variável para fazer a conexão do server com o Banco de Dados SQLite
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
