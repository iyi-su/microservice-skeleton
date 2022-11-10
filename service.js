import { start } from "@iyi-su/microservice";
const service = {
    Query: {
        books: async () => [
            { title: "hello", author: "simon" },
            { title: "world", author: "yulia" },
        ],
    },
};
await start(service);
