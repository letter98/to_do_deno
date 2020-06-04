import client from '../database/connectDb.ts';

interface Key {
    id?: any
}

export async function insert({ fullname, username, password }: { fullname: string; username: string; password: string }) {
    return await client.execute(`INSERT INTO account(fullname, username, password) values(?,?,?)`, [
        fullname, username, password
    ]);
}

export async function search(params:Key = {}) { 
    const isSpecific = Object.keys(params).length !== 0;
    if (isSpecific) {
        return await client.execute(`SELECT * FROM account WHERE account_id = ?`, [params.id]);
    } else {
        return await client.execute(`SELECT * FROM account`);   
    }
}

export async function update(fullname: string, password: string, id: number) {
    return await client.execute(`UPDATE account SET fullname= ?, password= ? WHERE account_id = ?`, [
        fullname, password, id
    ]);
}

export async function remove(id: number) {
    return await client.execute(`DELETE FROM account WHERE account_id = ?`, [id]); 
}