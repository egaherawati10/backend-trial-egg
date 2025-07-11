import { Injectable } from "@nestjs/common";
import { dbConfig } from "./database.config";
import { Pool, QueryResultRow } from "pg";

@Injectable()
export class Database {
    private pool: Pool;

    constructor() {
        this.pool = new this.pool({
            ...dbConfig,
            max: 10,
        });
    }

    async query<T extends QueryResultRow = any>(
        sql: string,
        params?: any[],
    ): Promise<T[]> {
        try {
            const result = await this.pool.query<T>(sql, params);
            return result.rows;
        } catch (error: unknown) {
            console.error("Database query error", error);
            throw new Error("Database query error");
        }
    }
}