import { saveQuestionAnswer } from "./helper";

describe('saveQuestionAndAnswer', () => {
    it('will return true when correctly formatted data is passed to the function', async () => {
        const info = {authedUser: "sarahedo", qid: "vthrdm985a262al8qx3do", answer: "optionOne"}
        const result = await saveQuestionAnswer(info)
        expect(result).toEqual(true)
    });
    it('will return an error if incorrect data is passed to the function', async () => {
        const info = {authUser: "sarahedo", answer: "optionOne"}
        const result = saveQuestionAnswer(info)
        await expect(result).rejects.toEqual("Please provide authedUser, qid, and answer")
    })
})

