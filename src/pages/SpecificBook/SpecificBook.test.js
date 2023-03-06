import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartProvider from "../../features/providers/CartProvider";
import {MemoryRouter} from "react-router-dom";
import BooksProvider from "../../features/providers/BooksProvider";
import {books} from './books'
import SpecificBookForm from "../../components/SpecificBookForm/SpecificBookForm";
describe('Specific book form testing',
    () => {
        const dispatch = jest.fn();
        const state = books
        const book = {
            id: 1,
            author: "David Flanagan",
            price: 2.8,
            image: "https://courses.prometheus.org.ua/asset-v1:Ciklum+FEB101+2022_T3+type@asset+block@javascript_the_definitive_guide.jpg",
            title: "JavaScript: The Definitive Guide, 7th Edition",
            shortDescription: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language.",
            description: "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You’ll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js."
        }
        const cart = {}

        const runFunctionSomeTimes = (fn, num) => {
            for (let i = 1; i <= num; i++) {
                fn()
            }
        }
        const renderComponentWithProviders = () => {
            render(
                <MemoryRouter>
                    <BooksProvider testDispatch={dispatch} testState={state}>
                        <CartProvider testDispatch={dispatch} testState={cart}>
                            <SpecificBookForm book={book}/>
                        </CartProvider>
                    </BooksProvider>
                </MemoryRouter>
            );
        }
        it('Render specific book form content',
            async () => {
                renderComponentWithProviders()
                expect(await screen.findByTestId('form')).toBeInTheDocument()
            });
        it('Increment amount of specific book, initial amount is 1. Expected result is 2',
            async () => {
                renderComponentWithProviders()
                const incrementButton = screen.getByTestId('increment');
                userEvent.click(incrementButton);
                expect(await screen.findByRole('spinbutton')).toHaveValue(2);

            });
        it('Decrement amount of specific book, initial amount is 1. Imitation increment amount up to 5. Expected result after decrementing is 4',
            async () => {
                renderComponentWithProviders()
                const incrementButton = screen.getByTestId('increment');
                const decrementButton = screen.getByTestId('decrement');
                runFunctionSomeTimes(() => userEvent.click(incrementButton), 4)
                userEvent.click(decrementButton);
                expect(await screen.findByRole('spinbutton')).toHaveValue(4);
            });

        it('Specific book total price have to change. Initial: price - 2.8, amount - 5. Expected result is 14',
            () => {
                renderComponentWithProviders()
                const input = screen.getByTestId('input')
                fireEvent.change(input, {target: {value: 5}})
                expect(input.value).toBe("5")
                expect(screen.getByTestId('total-price')).toHaveTextContent('14')
            });
    });