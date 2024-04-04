import { expect, describe, test, jest, beforeEach } from '@jest/globals'
import RickAndMortyUSA from '../../src/business/integrations/rickAndMortyUSA.js'
import RickAndMortyUSAAdapter from '../../src/business/adapters/rickAndMortyUSAAdapter.js'

describe('#RickAndMortyUSAAdapter', () => {
    beforeEach(() => jest.clearAllMocks())
    test('#getCharacters should be an adapter of RickAndMortyBRL.getCharactersFromXML', async () => {
        const usaIntegration = jest.spyOn(RickAndMortyUSA, RickAndMortyUSA.getCharactersFromXML.name).mockResolvedValue([])
        const result = await RickAndMortyUSAAdapter.getCharacters()

        expect(result).toEqual([])
        expect(usaIntegration).toHaveBeenCalled()
    })
})