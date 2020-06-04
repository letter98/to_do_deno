import client from '../database/connectDb.ts';

interface Key {
    id?: any
}

export async function search(params:Key = {}) { 
    const isSpecific = Object.keys(params).length !== 0;
    if (isSpecific) {
        return await client.execute(`SELECT * FROM card WHERE card_id = ?`, [params.id]);
    } else {
        return await client.execute(`SELECT * FROM card`);   
    }
}

export async function insert({ title, description, finished }: { title: string; description: string; finished: boolean }) {
    return await client.execute(`INSERT INTO card(title, description, finished) values(?,?,?)`, [
        title, description, finished
    ]);
}

export async function update(title: string, description: string, finished: boolean, id: number) {
    return await client.execute(`UPDATE card SET title= ?, description= ?, finished= ? WHERE card_id = ?`, [
        title, description, finished, id
    ]);
}

export async function remove(id: number) {
    return await client.execute(`DELETE FROM card WHERE card_id = ?`, [id]); 
}