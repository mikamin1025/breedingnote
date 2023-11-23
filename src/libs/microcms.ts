import {createClient, type MicroCMSQueries} from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.SERVICE_DOMAIN,
  apiKey: import.meta.env.API_KEY,
})

//microCMSの記事情報を全て取得する
export const getContents = async (queries?: MicroCMSQueries) => {
  return await client.get<any>({ endpoint: "contents", queries });
};