import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import ItemView from "../components/ItemView/ItemView";
import {isSAvailableMockItem, isSoldMockItem, mockItem} from "./testConstants";

test('renders the landing page', () => {
    render(<BrowserRouter><ItemView item={mockItem} isDetailView={false} /></BrowserRouter>);
});

describe('ItemView component', () => {

    it('renders an item', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={false} /></BrowserRouter>);
        const itemElement = screen.getByText(mockItem.name);
        expect(itemElement).toBeInTheDocument();
    });

    it('renders Description for Detailed View', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const itemElement = screen.getByText(mockItem.description);
        expect(itemElement).toBeInTheDocument();
    });

    it('does not renders Description for default View', () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={false} /></BrowserRouter>);
        const itemElement = screen.queryByText(mockItem.description);
        expect(itemElement).toBeNull();
    });

    it('renders SoldPanel if is_sold_old property is true', () => {
        render(<BrowserRouter><ItemView item={isSoldMockItem} isDetailView={true} /></BrowserRouter>);
        const itemElement = screen.getByText(/SOLD/);
        expect(itemElement).toBeInTheDocument();
    });

    it('does not renders SoldPanel if is_sold_old property is false', () => {
        render(<BrowserRouter><ItemView item={isSAvailableMockItem} isDetailView={false} /></BrowserRouter>);
        const itemElement = screen.queryByText(/SOLD/);
        expect(itemElement).toBeNull();
    });

    it("Renders the Link for Item Detail", () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={false} /></BrowserRouter>);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    it("Renders the correct Link for Ite", () => {
        render(<BrowserRouter><ItemView item={mockItem} isDetailView={true} /></BrowserRouter>);
        const link = screen.getByRole('link');
        expect(link).toBeDefined();
        expect(link).toHaveAttribute("href", `/items/${mockItem.id}`)
    });

    it('matches snapshot', () => {
        const { container } = render(<BrowserRouter><ItemView item={mockItem} isDetailView={false} /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});
