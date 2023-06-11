import { render } from "@testing-library/react";
import {LoginC} from "./Login";
import { BrowserRouter } from "react-router-dom";

describe('Login component', () => {
    it('will render correctly', () => {
        const users = ['sarahedo', 'tylermcginnis']
        const view = render(<BrowserRouter><LoginC users={users}/></BrowserRouter>)
        expect(view).toMatchSnapshot()
    })
})