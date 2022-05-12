import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(global.__MONGO_URI__)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collectionData: any, result): any => {
    const collection: any = {
      id: result.insertedId as unknown as string,
      ...collectionData
    }
    return collection
  }
}