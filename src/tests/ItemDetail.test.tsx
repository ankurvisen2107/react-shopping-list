import {fireEvent, render, screen,} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemView from "../components/ItemView/ItemView";
import {mockItem} from "./testConstants";

test('Renders the landing page', () => {
    render(<BrowserRouter><ItemDetail /></BrowserRouter>);
});

describe('ItemDetail component', () => {

    it('renders item description', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const link = screen.getByRole('link');
        fireEvent.click(link);
        const description = screen.getByText(mockItem.description);
        expect(description).toBeInTheDocument();
    });

    it('renders item shipping fee', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const link = screen.getByRole('link');
        fireEvent.click(link);
        const shipping_fee = screen.getByText(mockItem.shipping_fee);
        expect(shipping_fee).toBeInTheDocument();
    });

    it('renders item comment count', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const link = screen.getByRole('link');
        fireEvent.click(link);
        const comment_count = screen.getByText(mockItem.comment_count);
        expect(comment_count).toBeInTheDocument();
    });

    it('does not renders Search Component', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const link = screen.getByRole('link');
        fireEvent.click(link);
        const input = screen.queryByPlaceholderText(/Search/);
        expect(input).toBeNull();
    });

    it('does not renders Categories Component', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const link = screen.getByRole('link');
        fireEvent.click(link);
        const tab = screen.queryByText(/all/);
        expect(tab).toBeNull();
    });

    it('matches snapshot', () => {
        const { container } = render(<BrowserRouter><ItemDetail /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});
