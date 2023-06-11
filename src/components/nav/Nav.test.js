import { render } from "@testing-library/react";
import {NavC} from "./Nav";
import { BrowserRouter } from "react-router-dom";

describe('Nav component', () => {
    it('will render correctly', () => {
        const view = render(<BrowserRouter><NavC user={{}}/></BrowserRouter>)
        expect(view).toMatchSnapshot()
    })
})