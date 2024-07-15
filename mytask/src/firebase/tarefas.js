// O propósito deste arquivo é ter todas as funções
// necessárias para gerenciar tarefas (CRUD - Create, Read, Update, Delete):
// - adicionar uma nova tarefa (Create)
// - listar as tarefas (Read)
// - atualizar uma tarefa (Update)
// - deletar uma tarefa (Delete)

import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Criar uma referência para a coleção no Firestore (essa linha é muito importante)
// Referência para a coleção de tarefas no Firestore
export const tarefasCol = collection(db, "tarefas");

// Função assíncrona = que o resultado não é obtido de imediato
// Haverá uma "espera"
// exportar a função adicionarTarefa
// função assincrona = o resultado não é imediato
// há uma espera para que a função seja executada
export async function addTarefa(data) {
    // Essas função se comunica com o firestone, envia os dados (data) e salva na coleção indicada
    // adicionar a tarefa no Firestore
    // a função add() retorna uma Promise
    // que é resolvida com o objeto da tarefa
    // após a tarefa ser adicionada
    return await addDoc(tarefasCol, data);
    // await é uma instrução para esperar o resultado de addDoc
}

export async function getTarefas() {

    const snapshot = await getDocs(tarefasCol);
    const tarefas = []; //array vazio que vai inserir os obj na forma de obj e não de doc como vem do Firebase

    //Percorremos cada documento da coleção e inserimos no array de tarefas
    snapshot.forEach(doc => { //percorre esse snapshot, e para cada doc coloca nesse obj tarefas
        tarefas.push({ id: doc.id, ...doc.data() }); //usando spread, vai ter um novo array de objetos no formato que a gnt precisa
    });

    return tarefas;
}