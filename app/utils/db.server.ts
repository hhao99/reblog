import initSqlJs from 'sql.js'
import {useState, useEffect } from 'react'

let db: initSqlJs.Database | null = null;

export async function getDB() {
    if(db) return db

    const SQL = await initSqlJs({})

    db = new SQL.Database();
    db.run(`
        create table if not exists posts (
            id integer primary key autoincrement,
            title text not null,
            content text not null,
            author text not null,
            createdAt datetime not null default (datetime('now')),
            updatedAt datetime not null default (datetime('now'))
        )
        `);
    db.run(`
        insert into  posts (title,content,author) values('first post','the first post','eric')
        `)

        return db;
}

