import { saveQuestion } from "./helper";

describe('saveQuestion', () => {
    it('will return saved question & all expected fields are populated when correctly formatted data is passed to the function', async () => {
        const info = {optionOneText: 'hello', optionTwoText: 'welcome', author: 'sarahedo'}
        const result = await saveQuestion(info)
        expect(result.author).toEqual(info.author)
    });
    it('will return an error if incorrect data is passed to the function', async () => {
        const info = {authUser: "sarahedo", answer: "optionOne"}
        const result = saveQuestion(info)
        await expect(result).rejects.toEqual("Please provide optionOneText, optionTwoText, and author")
    })
})