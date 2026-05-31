import { Client } from "@notionhq/client";
import { ContactPayload } from "../types/contact";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID as string;

export const createContactPage = async (payload: ContactPayload) => {
    return notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
            Name: {
                title: [
                    {
                        text: { content: payload.name },
                    },
                ],
            },
            Email: {
                email: payload.email,
            },
            Message: {
                rich_text: [
                    {
                        text: { content: payload.message },
                    },
                ],
            },
        },
    });
};
