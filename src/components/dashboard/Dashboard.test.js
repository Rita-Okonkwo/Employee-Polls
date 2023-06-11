import { render } from "@testing-library/react";
import {DashboardC} from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

describe('Dashboard component', () => {
    it('will render correctly', () => {
        const view = render(<BrowserRouter><DashboardC/></BrowserRouter>)
        expect(view).toMatchSnapshot()
    })
})