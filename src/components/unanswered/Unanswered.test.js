import { fireEvent, render, screen } from "@testing-library/react";
import {UnansweredC} from "./Unanswered";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

describe('Unanswered component', () => {
    it('button will dissapear after button click', () => {
        render(<BrowserRouter><UnansweredC user={{}} question={{"optionOne": {votes: ['hehe'], text: "thanks"}, "optionTwo": {votes: ['haha'], text: "lol"}}} dispatch={() => {}} auth={"sarahedo"} newQuestion={{"optionOne": {votes: ['hehe'], text: "thanks"}, "optionTwo": {votes: ['haha'], text: "lol"}}}/></BrowserRouter>)
        const button = screen.getAllByRole('button')[0]
        fireEvent.click(button)
        expect(screen.queryByRole('button')).not.toBeInTheDocument()
    });
    it('Checkmark will show after button click', () => {
        render(<BrowserRouter><UnansweredC user={{}} question={{"optionOne": {votes: ['hehe'], text: "thanks"}, "optionTwo": {votes: ['haha'], text: "lol"}}} dispatch={() => {}} auth={"sarahedo"} newQuestion={{"optionOne": {votes: ['hehe'], text: "thanks"}, "optionTwo": {votes: ['haha'], text: "lol"}}}/></BrowserRouter>)
        const button = screen.getAllByRole('button')[0]
        fireEvent.click(button)
        expect(screen.getByTestId('checkmark')).toBeInTheDocument()
    })
})