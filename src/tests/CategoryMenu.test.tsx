import {render, screen,} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import App from "../App";
import {filterItems, getAllCategories} from "../appUtils";
import {mockCategories, mockCategoryItem, mockItemList} from "./testConstants";
import CategoryMenu from "../components/CategoryMenu/CategoryMenu";
import {ALL_CATEGORIES} from "../appConstants";

test('Renders the landing page', () => {
    const func = jest.fn();
    render(<BrowserRouter><CategoryMenu activeTab={0} onMenuClick={func} /></BrowserRouter>);
});

describe('CategoryMenu component', () => {

    it('Renders All Category', () => {
        render(<BrowserRouter><App /></BrowserRouter>);
        const tab = screen.getByText(/all/);
        expect(tab).toBeInTheDocument();
    });

    it('should prepend All Category object to Category list', () => {
        const finalCategories = getAllCategories(mockCategories);
        expect(finalCategories[0]).toMatchObject(ALL_CATEGORIES);
    });

    it('should filter items correctly on basis of category id', function () {
        const mockFilteredValues = filterItems(mockItemList, mockCategoryItem.name, mockCategoryItem.category_id);
        expect(mockFilteredValues).toMatchObject([mockCategoryItem]);
    });

    it('matches snapshot', () => {
        const func = jest.fn();
        const { container } = render(<BrowserRouter><CategoryMenu activeTab={0} onMenuClick={func} /></BrowserRouter>);
        expect(container).toMatchSnapshot();
    });
});
