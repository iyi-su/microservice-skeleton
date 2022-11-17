import {Client as BaseClient} from "@iyi-su/client";
import {gql} from "@apollo/client/core";
import type {Book} from "@iyi-su/service-types/resolvers";

export class ServiceClient extends BaseClient<ServiceClient> {

    protected static override envVar: string = "SERVICE_CLIENT_ADDRESS";

    public async getBooks(): Promise<Book[]> {
        type getBooks = {
            getBooks: Book[]
        }
        const result = await this.query<getBooks, {}>(gql`
            query getBooksQuery {
                getBooks {
                    author
                    title
                }
            }
        `, {});
        return result.getBooks;
    }

}
