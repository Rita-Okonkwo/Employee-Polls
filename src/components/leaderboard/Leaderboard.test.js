import { render } from "@testing-library/react";
import {LeaderboardC} from "./Leaderboard";
import { BrowserRouter } from "react-router-dom";

describe('Leaderboard component', () => {
    it('will render correctly', () => {
        const userReducer = {
            sarahedo: {
              id: 'sarahedo',
              password:'password123',
              name: 'Sarah Edo',
              avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
              answers: {
                "8xf0y6ziyjabvozdd253nd": 'optionOne',
                "6ni6ok3ym7mf1p33lnez": 'optionOne',
                "am8ehyc8byjqgar0jgpub9": 'optionTwo',
                "loxhs1bqm25b708cmbf3g": 'optionTwo'
              },
              questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
            },
            tylermcginnis: {
              id: 'tylermcginnis',
              password:'abc321',
              name: 'Tyler McGinnis',
              avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
              answers: {
                "vthrdm985a262al8qx3do": 'optionOne',
                "xj352vofupe1dqz9emx13r": 'optionTwo',
              },
              questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
            },
            mtsamis: {
              id: 'mtsamis',
              password:'xyz123',
              name: 'Mike Tsamis',
              avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
              answers: {
                "xj352vofupe1dqz9emx13r": 'optionOne',
                "vthrdm985a262al8qx3do": 'optionTwo',
                "6ni6ok3ym7mf1p33lnez": 'optionOne'
              },
              questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
            },
            zoshikanlu: {
              id: 'zoshikanlu',
              password:'pass246',
              name: 'Zenobia Oshikanlu',
              avatarURL: "https://tylermcginnis.com/would-you-rather/dan.jpg",
              answers: {
                "xj352vofupe1dqz9emx13r": 'optionOne',
              },
              questions: [],
            }
          }
          const users = ['sarahedo', 'tylermcginnis']
        const view = render(<BrowserRouter><LeaderboardC users={users} userReducer={userReducer} authReducer={'sarahedo'}/></BrowserRouter>)
        expect(view).toMatchSnapshot()
    })
})